import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { ArcanaExplorer } from "@/components/arcana-explorer"

export const metadata: Metadata = {
  title: "Os Arcanos · Explore as 78 cartas · Arcana",
  description: "Navegue, busque e filtre os 78 arcanos do tarot: maiores, menores e por naipe.",
}

export default function ArcanosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="O BARALHO COMPLETO"
          title="Os 78 Arcanos"
          description="Explore cada uma das cartas do tarot. Busque por nome ou tema e filtre por categoria."
        />
        <ArcanaExplorer />
      </main>
      <SiteFooter />
    </div>
  )
}
