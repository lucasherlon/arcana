import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { ArcanaCard } from "@/components/arcana-card"
import { minorArcana, suitInfo, type MinorSuit } from "@/lib/tarot-data"

export const metadata: Metadata = {
  title: "Arcanos Menores · Os Quatro Naipes · Arcana",
  description:
    "Os 56 arcanos menores do tarot, divididos em Paus, Copas, Espadas e Ouros. Conheça cada carta.",
}

export default function ArcanosMenoresPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="56 CARTAS"
          title="Arcanos Menores"
          description="Quatro naipes que refletem as experiências do cotidiano: emoções, ações, pensamentos e o mundo material. Clique nos cards para detalhes, significados e interpretações. "
          image="/images/hero-menores.png"
          imageAlt="Cartas dos arcanos menores do tarot com os quatro naipes à luz de velas"
        />
        <div className="mx-auto max-w-6xl px-6 py-12">
          {(Object.keys(suitInfo) as MinorSuit[]).map((suit) => {
            const info = suitInfo[suit]
            const cards = minorArcana.filter((c) => c.suit === suit)
            return (
              <section key={suit} className="mb-16">
                <div className="flex items-baseline gap-3 border-b border-border/60 pb-4">
                  <span className="font-heading text-3xl text-primary" aria-hidden="true">
                    {info.symbol}
                  </span>
                  <h2 className="font-heading text-2xl text-foreground">
                    {info.name}
                    <span className="ml-3 font-serif text-lg text-muted-foreground">
                      {info.element} · {info.theme}
                    </span>
                  </h2>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {cards.map((card) => (
                    <ArcanaCard key={card.slug} card={card} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
