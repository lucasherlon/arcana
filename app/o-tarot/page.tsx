import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { suitInfo } from "@/lib/tarot-data"

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
              <h2 className="font-heading text-2xl text-foreground">Origens</h2>
              <p className="mt-4">
                O tarot surgiu na Itália no século XV, inicialmente como um jogo de cartas conhecido
                como <em>tarocchi</em>. Apenas séculos depois, sobretudo a partir do século XVIII, as
                cartas passaram a ser associadas ao esoterismo, ao simbolismo e à introspecção.
              </p>
              <p className="mt-4">
                Baralhos como o Tarot de Marselha e, mais tarde, o Rider-Waite-Smith (1909), ajudaram a
                consolidar as imagens e os significados que conhecemos hoje. O tarot tornou-se uma
                linguagem visual rica em arquétipos.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">A estrutura do baralho</h2>
              <p className="mt-4">
                Um baralho de tarot tradicional possui <strong className="text-foreground">78 cartas</strong>,
                divididas em dois grupos: os arcanos maiores e os arcanos menores. A palavra
                {' "arcano" '}vem do latim <em>arcanum</em>, que significa{' "segredo" '}ou{' "mistério".'}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border/60 bg-card p-6">
                  <h3 className="font-heading text-xl text-primary">22 Arcanos Maiores</h3>
                  <p className="mt-3 text-base">
                    Numerados de 0 a 21, narram a chamada {'"Jornada do Louco"'}. Representam grandes
                    lições, transformações e marcos espirituais.
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 bg-card p-6">
                  <h3 className="font-heading text-xl text-primary">56 Arcanos Menores</h3>
                  <p className="mt-3 text-base">
                    Divididos em quatro naipes de 14 cartas cada. Tratam de situações cotidianas,
                    emoções e desafios do dia a dia.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Os quatro naipes</h2>
              <p className="mt-4">
                Cada naipe dos arcanos menores está associado a um elemento e a uma esfera da
                experiência humana:
              </p>
              <ul className="mt-6 space-y-4">
                {Object.values(suitInfo).map((s) => (
                  <li
                    key={s.name}
                    className="flex items-start gap-4 rounded-lg border border-border/60 bg-card p-5"
                  >
                    <span className="font-heading text-2xl text-primary" aria-hidden="true">
                      {s.symbol}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg text-foreground">
                        {s.name} <span className="text-muted-foreground">· {s.element}</span>
                      </h3>
                      <p className="mt-1 text-base">{s.theme}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Posições: direita e invertida</h2>
              <p className="mt-4">
                Muitas tradições atribuem significados distintos conforme a carta aparece na posição
                normal (direita) ou invertida. A posição invertida costuma indicar uma energia
                bloqueada, interna ou em desequilíbrio — não necessariamente algo negativo.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Uma ferramenta de reflexão</h2>
              <p className="mt-4">
                Embora popularmente associado à adivinhação, o tarot é, antes de tudo, uma ferramenta
                simbólica de autoconhecimento. As cartas oferecem perspectivas e perguntas que
                estimulam a reflexão sobre escolhas, emoções e caminhos. Este site tem caráter
                educativo e contemplativo.
              </p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
