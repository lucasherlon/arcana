import Link from "next/link"
import type { TarotCard } from "@/lib/tarot-data"
import { suitInfo } from "@/lib/tarot-data"

export function ArcanaCard({ card }: { card: TarotCard }) {
  return (
    <Link
      href={`/arcanos/${card.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-10px] hover:shadow-primary/30"
    >
      <div className="flex items-start justify-between">
        <span className="font-heading text-2xl text-primary">{card.number}</span>
        <span className="font-heading text-[0.65rem] tracking-widest text-muted-foreground">
          {card.type === "maior" ? "MAIOR" : card.suit ? suitInfo[card.suit].name.toUpperCase() : "MENOR"}
        </span>
      </div>

      <h3 className="mt-4 font-heading text-lg leading-tight text-foreground transition-colors group-hover:text-primary">
        {card.name}
      </h3>

      <p className="mt-2 font-serif text-base leading-relaxed text-muted-foreground line-clamp-3">
        {card.upright}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {card.keywords.slice(0, 3).map((kw) => (
          <span
            key={kw}
            className="rounded-full border border-border/60 px-2.5 py-0.5 font-sans text-xs text-muted-foreground"
          >
            {kw}
          </span>
        ))}
      </div>
    </Link>
  )
}
