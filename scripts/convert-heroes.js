const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const publicImages = path.join(__dirname, '..', 'public', 'images')

const heroes = [
  'hero-arcanos.png',
  'hero-maiores.png',
  'hero-menores.png',
  'hero-o-tarot.png',
  'hero-o-zodiaco.png',
  'tarot-hero.png',
]

async function convert(file) {
  const input = path.join(publicImages, file)
  if (!fs.existsSync(input)) {
    console.warn(`Arquivo não encontrado: ${input}`)
    return
  }

  const name = path.basename(file, path.extname(file))
  const webpOut = path.join(publicImages, `${name}.webp`)
  const avifOut = path.join(publicImages, `${name}.avif`)

  try {
    await sharp(input).jpeg({ quality: 80 }).toFile(path.join(publicImages, `${name}.jpg`))
  } catch (e) {
    // ignore
  }

  try {
    await sharp(input).webp({ quality: 80 }).toFile(webpOut)
    console.log(`Gerado: ${webpOut}`)
  } catch (err) {
    console.error(`Falha ao gerar webp para ${file}:`, err.message)
  }

  try {
    await sharp(input).avif({ quality: 50 }).toFile(avifOut)
    console.log(`Gerado: ${avifOut}`)
  } catch (err) {
    console.error(`Falha ao gerar avif para ${file}:`, err.message)
  }
}

async function run() {
  for (const h of heroes) {
    await convert(h)
  }
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
