import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "O Tarot · História e Estrutura · Arcana",
  description:
    "Descubra a história, a estrutura e o simbolismo do tarot: os arcanos maiores, menores e os quatro naipes.",
}

export default function OTarotPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="A ARTE DO TAROT"
          title="O que é o tarot?"
          description="Uma introdução às origens, à estrutura e ao simbolismo das 78 cartas."
        />

        <article className="mx-auto max-w-3xl px-6 py-16">
          <div className="space-y-12 font-serif text-lg leading-relaxed text-muted-foreground">
            <section>
              <p>
                O Tarot é definido nas fontes como um sistema complexo de 78 cartas ou lâminas, que funciona tanto como uma {"\"catedral nômade\""} quanto como uma enciclopédia de símbolos. Mais do que um simples jogo, ele é considerado uma linguagem óptica e uma ferramenta visual de desenvolvimento pessoal e espiritual.
              </p>
              <p className="mt-4">
                Abaixo, detalho o que compõe o Tarot e como ele é compreendido segundo as fontes:
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">1. Estrutura e Composição</h2>
              <p className="mt-4">
                O baralho totaliza <strong className="text-foreground">78 cartas</strong>, divididas em dois grupos principais:
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border/60 bg-card p-6">
                  <h3 className="font-heading text-xl text-primary">Arcanos Maiores (22 cartas)</h3>
                  <p className="mt-3 text-base">
                    Numerados de 0 (O Louco) a XXI (O Mundo), representam arquétipos universais, estados fundamentais da consciência e o caminho místico da alma.
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 bg-card p-6">
                  <h3 className="font-heading text-xl text-primary">Arcanos Menores (56 cartas)</h3>
                  <p className="mt-3 text-base">
                    Divididos em quatro naipes (Espadas, Copas, Paus e Ouros), referem-se aos aspectos mais cotidianos, práticos e pessoais da vida material, emocional e intelectual.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">2. O Tarot como Espelho e Linguagem</h2>
              <p className="mt-4">
                Uma das definições mais profundas apresentadas é que o Tarot funciona como um <strong className="text-foreground">espelho da alma</strong>. Por ser um instrumento essencialmente projetivo, cada arcano converte-se naquilo que o observador vê, permitindo que o inconsciente se manifeste através das imagens.
              </p>
              <p className="mt-4">
                Ele é descrito como uma {"\"máquina filosófica\""} e uma gramática de perguntas e respostas que permite a comunicação com o Divino e a exploração da psique.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">3. Diferentes Abordagens de Uso</h2>
              <p className="mt-4">
                As fontes destacam que o Tarot pode ser visto sob diversas óticas:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex flex-col gap-2 rounded-lg border border-border/60 bg-card p-5">
                  <h3 className="font-heading text-lg text-primary">Tarologia</h3>
                  <p className="text-base">
                    Uma abordagem terapêutica (proposta por Alejandro Jodorowsky) que utiliza o Tarot como uma forma de psicanálise para ler o presente e buscar a cura psicológica, em oposição à leitura de futuros hipotéticos.
                  </p>
                </li>
                <li className="flex flex-col gap-2 rounded-lg border border-border/60 bg-card p-5">
                  <h3 className="font-heading text-lg text-primary">Iniciação e Magia</h3>
                  <p className="text-base">
                    É visto como a {"\"estrada real\""} que conduz à iluminação, unindo mente, corpo e espírito, e funcionando como um instrumento de alquimia interior.
                  </p>
                </li>
                <li className="flex flex-col gap-2 rounded-lg border border-border/60 bg-card p-5">
                  <h3 className="font-heading text-lg text-primary">Integração de Sistemas</h3>
                  <p className="text-base">
                    O Tarot é a linguagem simbólica que integra diversas disciplinas esotéricas, como a Cabala, a astrologia e a alquimia.
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">4. Simbolismo e Unidade</h2>
              <p className="mt-4">
                O Tarot é frequentemente comparado a uma mandala ou a um templo, onde as cartas não são apenas símbolos isolados, mas partes de uma unidade coerente.
              </p>
              <p className="mt-4">
                Seus criadores, embora anônimos, teriam depositado nessas cartas um tesouro espiritual para preservar conhecimentos de grandes tradições religiosas (cristianismo, judaísmo e islamismo) através dos tempos.
              </p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
