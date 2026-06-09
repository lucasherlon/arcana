import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Sparkles, RotateCcw } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { allCards, getCardBySlug, suitInfo } from "@/lib/tarot-data"

export function generateStaticParams() {
  return allCards.map((card) => ({ slug: card.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const card = getCardBySlug(slug)
  if (!card) return { title: "Arcano não encontrado · Arcana" }
  return {
    title: `${card.name} · Arcana`,
    description: card.description,
  }
}

export default async function CardPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const card = getCardBySlug(slug)
  if (!card) notFound()

  const index = allCards.findIndex((c) => c.slug === slug)
  const prev = allCards[index - 1]
  const next = allCards[index + 1]

  const category =
    card.type === "maior"
      ? "Arcano Maior"
      : card.suit
        ? `Arcano Menor · ${suitInfo[card.suit].name} (${suitInfo[card.suit].element})`
        : "Arcano Menor"

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <Link
            href="/arcanos"
            className="inline-flex items-center gap-2 font-heading text-xs tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            VOLTAR AOS ARCANOS
          </Link>

          {/* Card hero */}
          <div className="mt-8 rounded-xl border border-border/60 bg-card p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex size-24 items-center justify-center rounded-full border border-primary/40 bg-background">
                <span className="font-heading text-3xl text-primary">{card.number}</span>
              </div>
              <span className="mt-6 font-heading text-xs tracking-[0.3em] text-primary">
                {category.toUpperCase()}
              </span>
              <h1 className="mt-3 font-heading text-4xl text-foreground md:text-5xl">{card.name}</h1>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {card.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full border border-border/60 px-3 py-1 font-serif text-base text-muted-foreground"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <section className="mt-10">
            <h2 className="font-heading text-xl text-foreground">Sobre a carta</h2>
            <p className="mt-4 font-serif text-xl leading-relaxed text-muted-foreground">
              {card.description}
            </p>
          </section>

          {/* Meanings */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-card p-6">
              <h3 className="flex items-center gap-2 font-heading text-lg text-foreground">
                <Sparkles className="size-5 text-primary" aria-hidden="true" />
                Posição direita
              </h3>
              <p className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground">
                {card.upright}
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-6">
              <h3 className="flex items-center gap-2 font-heading text-lg text-foreground">
                <RotateCcw className="size-5 text-accent" aria-hidden="true" />
                Posição invertida
              </h3>
              <p className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground">
                {card.reversed}
              </p>
            </div>
          </div>

          {/* Navigation between cards */}
          <nav
            className="mt-12 flex items-center justify-between gap-4 border-t border-border/60 pt-8"
            aria-label="Navegação entre arcanos"
          >
            {prev ? (
              <Link
                href={`/arcanos/${prev.slug}`}
                className="group flex flex-col items-start gap-1 text-left"
              >
                <span className="flex items-center gap-1 font-heading text-xs tracking-wider text-muted-foreground">
                  <ArrowLeft className="size-3" aria-hidden="true" />
                  ANTERIOR
                </span>
                <span className="font-serif text-lg text-foreground transition-colors group-hover:text-primary">
                  {prev.name}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/arcanos/${next.slug}`}
                className="group flex flex-col items-end gap-1 text-right"
              >
                <span className="flex items-center gap-1 font-heading text-xs tracking-wider text-muted-foreground">
                  PRÓXIMO
                  <ArrowRight className="size-3" aria-hidden="true" />
                </span>
                <span className="font-serif text-lg text-foreground transition-colors group-hover:text-primary">
                  {next.name}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
