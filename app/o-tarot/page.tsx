import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "O Tarot · A Jornada do Louco",
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
          image="/images/hero-o-tarot.png"
          imageAlt="Cartas de tarot antigas dispostas sobre veludo à luz de velas"
        />

        <article className="mx-auto max-w-3xl px-6 py-16">
          <div className="space-y-12 font-serif text-lg leading-relaxed text-muted-foreground">
            <section>
              <p>
                O Tarot é definido como um sistema complexo de 78 cartas ou lâminas, que funciona tanto como uma {"\"catedral nômade\""} quanto como uma enciclopédia de símbolos. Mais do que um simples jogo, ele é considerado uma linguagem óptica e uma ferramenta visual de desenvolvimento pessoal e espiritual.
                Surgido na Europa no século XIV, o Tarot evoluiu de um passatempo para um instrumento de introspecção, estudo simbólico e autoconhecimento, sendo utilizado por místicos, filósofos e artistas ao longo dos séculos.
              </p>
              <p>
                Alejandro Jodorowsky, em seu livro O Caminho do Tarot (2004), destaca que ele é uma {"\"máquina filosófica\""} e uma gramática de perguntas e respostas que permite a comunicação com o Divino e a exploração da psique. Ele é visto como um espelho da alma, onde cada carta se torna aquilo que o observador vê, permitindo que o inconsciente se manifeste através das imagens.
              </p>
              <p className="mt-4">
                Abaixo, detalhamos o que compõe o Tarot e como ele é compreendido em diferentes tradições e abordagens, destacando sua estrutura, simbolismo e as diversas formas de uso.:
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">1. Estrutura e Composição</h2>
              <p className="mt-4">
                O baralho totaliza <strong className="text-foreground">78 cartas</strong>, chamadas aqui de <strong className="text-foreground">arcanos</strong>, um termo derivado do latim "arcana" (segredo) que remete ao sentido oculto e não-linear das cartas. Os arcanos estão divididos em dois grupos principais:
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
                O Tarot pode ser visto sob diversas óticas, aqui destacamos as três principais:
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

            <section>
              <h2 className="font-heading text-2xl text-foreground">5. Marselha ou Rider-Waite</h2>
              <p className="mt-4">
                Marselha e Rider‑Waite‑Smith são as duas formas mais difundidas do tarot e distinguem‑se principalmente pela ilustração dos Arcanos Menores, pela numeração de certas cartas e pela nomenclatura de figuras religiosas: o Marselha apresenta desenhos geométricos e repetitivos nos Menores, exigindo uma leitura mais numerológica e analítica, enquanto Waite introduziu cenas ilustradas com figuras humanas para todos os Menores, tornando as leituras mais narrativas e acessíveis; Waite também inverteu a ordem de Força e Justiça para alinhar a tradição cabalística, renomeou a Papisa como Alta Sacerdotisa e o Papa como Hierofante, e consolidou o Arcano XIII como A Morte; além disso, as cortes e suas hierarquias podem variar entre os sistemas e o estilo de interpretação difere — Marselha privilegia sinais sutis e uma leitura óptica detalhista, enquanto o Rider‑Waite favorece clareza simbólica e facilidade para iniciantes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">6. Carl Jung e o Tarot</h2>
              <p className="mt-4">
                Há uma relação entre a ideia de inconsciente em Carl Jung e o Tarot que se fundamenta nos conceitos de <strong className="text-foreground">arquétipos</strong>, <strong className="text-foreground">mandala</strong> e <strong className="text-foreground">projeção</strong>. O Tarot é entendido como um sistema simbólico que reflete a estrutura da psique e serve como ferramenta para acessar conteúdos do inconsciente.
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-heading text-lg text-primary">Arcanos como arquétipos</h3>
                  <p className="mt-2">
                    Cada arcano é visto como um arquétipo que atua no inconsciente, representando estados fundamentais da consciência e modelos universais que emergem na experiência individual.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg text-primary">O Tarot como mandala</h3>
                  <p className="mt-2">
                    A organização das 78 cartas pode ser lida como uma mandala da psique: uma totalidade simbólica que facilita a visão do "todo" e a relação entre consciente e inconsciente.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg text-primary">Espelho e projeção</h3>
                  <p className="mt-2">
                    As imagens funcionam como um instrumento projetivo: ao contemplar as cartas, o consulente reconhece padrões internos e permite que conteúdos inconscientes se tornem conscientes, servindo como recurso terapêutico e de autoconhecimento.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg text-primary">Anima e Animus</h3>
                  <p className="mt-2">
                    Pares de arcanos podem ser interpretados pelos termos junguianos anima (aspecto receptivo) e animus (aspecto ativo), revelando dinâmicas internas que, quando equilibradas, favorecem leituras mais integradas.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg text-primary">Jornada e individuação</h3>
                  <p className="mt-2">
                    A progressão dos arcanos, especialmente do Louco ao Mundo, é comparada à Jornada do Herói e ao processo junguiano de individuação: um movimento de integração das diversas partes da psique rumo à totalidade simbólica representada por O Mundo (XXI).
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
