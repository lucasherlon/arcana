import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { ArcanaCard } from "@/components/arcana-card"
import { majorArcana } from "@/lib/tarot-data"

export const metadata: Metadata = {
  title: "Arcanos Maiores · A Jornada do Louco · Arcana",
  description:
    "Os 22 arcanos maiores do tarot, de 0 a 21, narram a jornada da alma.",
}

export default function ArcanosMaioresPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="22 CARTAS"
          title="Arcanos Maiores"
          description="A Jornada do Louco — do número 0 ao 21, cada carta marca uma grande lição da alma. Clique nos cards para detalhes, significados e interpretações. "
          image="/images/hero-maiores.png"
          imageAlt="Cartas dos arcanos maiores do tarot dispostas à luz de velas"
        />
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {majorArcana.map((card) => (
              <ArcanaCard key={card.slug} card={card} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
