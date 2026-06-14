import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "O Zodíaco · A Jornada da Alma",
  description:
    "A relação entre o tarot e a astrologia: correspondências dos arcanos com os signos, os planetas, os quatro elementos e a roda astrológica.",
}

const signCorrespondences = [
  { sign: "Áries", note: "Carneiro", arcana: "O Imperador (IV)" },
  { sign: "Touro", note: "", arcana: "O Hierofante (V)" },
  { sign: "Gêmeos", note: "", arcana: "Os Enamorados (VI)" },
  { sign: "Câncer", note: "Caranguejo", arcana: "O Carro (VII)" },
  { sign: "Leão", note: "", arcana: "A Força (VIII ou XI)" },
  { sign: "Virgem", note: "", arcana: "O Eremita (VIIII)" },
  { sign: "Libra", note: "Balança", arcana: "A Justiça (VIII ou XI)" },
  { sign: "Escorpião", note: "", arcana: "A Morte (XIII)" },
  { sign: "Sagitário", note: "", arcana: "A Temperança (XIIII)" },
  { sign: "Capricórnio", note: "", arcana: "O Diabo (XV)" },
  { sign: "Aquário", note: "", arcana: "A Estrela (XVII)" },
  { sign: "Peixes", note: "", arcana: "A Lua (XVIII)" },
]

const planetCorrespondences = [
  { arcana: "O Louco", planet: "Urano" },
  { arcana: "O Mago (I)", planet: "Mercúrio" },
  { arcana: "A Sacerdotisa (II)", planet: "Lua" },
  { arcana: "A Imperatriz (III)", planet: "Vênus" },
  { arcana: "A Roda da Fortuna (X)", planet: "Júpiter" },
  { arcana: "O Enforcado (XII)", planet: "Netuno" },
  { arcana: "A Torre (XVI)", planet: "Marte" },
  { arcana: "O Sol (XVIIII)", planet: "Sol" },
  { arcana: "O Julgamento (XX)", planet: "Plutão" },
  { arcana: "O Mundo (XXI)", planet: "Saturno" },
]

const suits = [
  {
    name: "Paus (Wands)",
    element: "Fogo",
    signs: "Áries, Leão, Sagitário",
    meaning: "Representa energia, motivação e força interior.",
  },
  {
    name: "Espadas (Swords)",
    element: "Ar",
    signs: "Gêmeos, Libra, Aquário",
    meaning: "Representa o plano mental, pensamentos e consciência superior.",
  },
  {
    name: "Copas (Cups)",
    element: "Água",
    signs: "Câncer, Escorpião, Peixes",
    meaning: "Representa o plano emocional, sentimentos e alma.",
  },
  {
    name: "Ouros (Pentacles)",
    element: "Terra",
    signs: "Touro, Virgem, Capricórnio",
    meaning: "Representa o plano material, corpo físico, trabalho e carreira.",
  },
]

export default function OZodiacoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="TAROT E ASTROLOGIA"
          title="O Zodíaco"
          description="Como o tarot e a astrologia se entrelaçam através dos arcanos, dos planetas e dos quatro elementos."
        />

        <article className="mx-auto max-w-3xl px-6 py-16">
          <div className="space-y-12 font-serif text-lg leading-relaxed text-muted-foreground">
            <section>
              <p>
                A relação entre os signos do zodíaco e o Tarot é profunda e estruturada, fundamentada na ideia de que o Tarot é uma linguagem simbólica que integra diversos sistemas esotéricos, incluindo a astrologia, a cabala e a numerologia. Essa conexão permite que os Arcanos funcionem como arquétipos de estados de consciência e ferramentas para entender o tempo e a personalidade.
              </p>
              <p className="mt-4">
                Abaixo estão as principais formas de relação entre esses dois sistemas.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">
                1. Correspondências entre os Arcanos Maiores e os Signos
              </h2>
              <p className="mt-4">
                De acordo com os sistemas tradicionais (como o de Rider-Waite e o da Golden Dawn), os 12 signos do zodíaco estão diretamente ligados a 12 Arcanos Maiores específicos:
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {signCorrespondences.map((item) => (
                  <li
                    key={item.sign}
                    className="flex items-center justify-between gap-4 rounded-lg border border-border/60 bg-card p-4"
                  >
                    <span className="font-heading text-base text-foreground">
                      {item.sign}
                      {item.note && (
                        <span className="ml-1 font-serif text-sm text-muted-foreground">({item.note})</span>
                      )}
                    </span>
                    <span className="text-right text-base text-primary">{item.arcana}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">2. Correspondências Planetárias</h2>
              <p className="mt-4">
                Os Arcanos Maiores restantes são frequentemente associados a corpos celestes e planetas:
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {planetCorrespondences.map((item) => (
                  <li
                    key={item.arcana}
                    className="flex items-center justify-between gap-4 rounded-lg border border-border/60 bg-card p-4"
                  >
                    <span className="font-heading text-base text-foreground">{item.arcana}</span>
                    <span className="text-right text-base text-primary">{item.planet}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">3. Naipes e os Quatro Elementos</h2>
              <p className="mt-4">
                Os Arcanos Menores são divididos em quatro naipes, cada um regido por um elemento astrológico, o que ajuda a classificar as energias da leitura:
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {suits.map((suit) => (
                  <div key={suit.name} className="rounded-lg border border-border/60 bg-card p-6">
                    <h3 className="font-heading text-xl text-primary">{suit.name}</h3>
                    <p className="mt-2 font-heading text-sm tracking-widest text-foreground">
                      {suit.element.toUpperCase()}
                    </p>
                    <p className="mt-1 text-base">{suit.signs}</p>
                    <p className="mt-3 text-base">{suit.meaning}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">4. Uso Prático e Temporal (Decanatos)</h2>
              <p className="mt-4">
                As associações astrológicas são usadas para determinar o tempo (timing) em uma leitura. Cada uma das 36 cartas numeradas dos Arcanos Menores (do 2 ao 10 de cada naipe) corresponde a um <strong className="text-foreground">decanato</strong> — um período de 10 graus ou aproximadamente 10 dias — de um signo específico.
              </p>
              <p className="mt-4">
                Assim, o Dois de Paus pode ser associado ao primeiro decanato de Áries (Marte em Áries), situando um evento no início da primavera no hemisfério norte.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">5. A Roda Astrológica no Tarot</h2>
              <p className="mt-4">
                Existe um método de lançamento chamado <strong className="text-foreground">Roda Astrológica</strong>, que utiliza as 12 casas do zodíaco como posições fixas para as cartas. Cada {"\"casa\""} da roda representa uma área da vida (como a Casa 1 para o eu/presente, a Casa 2 para finanças, a Casa 10 para destino/carreira), permitindo uma análise holística do consulente baseada na estrutura do mapa natal.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">A Visão de Jodorowsky</h2>
              <p className="mt-4">
                Embora Alejandro Jodorowsky reconheça que o Tarot foi assimilado por estruturas como a astrologia ao longo dos séculos, ele defende que o Tarot possui uma organização numerológica própria e original. No entanto, ele utiliza os {"\"quatro trios do Zodíaco\""} como uma fórmula válida para organizar os quatro temperamentos humanos dentro de sua mandala do Tarot.
              </p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
