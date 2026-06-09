"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { ArcanaCard } from "@/components/arcana-card"
import { allCards, suitInfo, type MinorSuit } from "@/lib/tarot-data"
import { cn } from "@/lib/utils"

type Filter = "todos" | "maiores" | "menores" | MinorSuit

const filters: { value: Filter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "maiores", label: "Arcanos Maiores" },
  { value: "menores", label: "Arcanos Menores" },
  { value: "paus", label: suitInfo.paus.name },
  { value: "copas", label: suitInfo.copas.name },
  { value: "espadas", label: suitInfo.espadas.name },
  { value: "ouros", label: suitInfo.ouros.name },
]

export function ArcanaExplorer() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState<Filter>("todos")

  const results = useMemo(() => {
    return allCards.filter((card) => {
      const matchesFilter =
        filter === "todos" ||
        (filter === "maiores" && card.type === "maior") ||
        (filter === "menores" && card.type === "menor") ||
        card.suit === filter

      const q = query.trim().toLowerCase()
      const matchesQuery =
        q === "" ||
        card.name.toLowerCase().includes(q) ||
        card.keywords.some((k) => k.toLowerCase().includes(q))

      return matchesFilter && matchesQuery
    })
  }, [query, filter])

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome ou palavra-chave..."
            aria-label="Buscar arcanos"
            className="w-full rounded-full border border-border bg-card py-3 pl-12 pr-4 font-serif text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar arcanos">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-heading text-xs tracking-wider transition-colors",
                filter === f.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-8 font-serif text-base text-muted-foreground">
        {results.length} {results.length === 1 ? "arcano encontrado" : "arcanos encontrados"}
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((card) => (
            <ArcanaCard key={card.slug} card={card} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center font-serif text-xl text-muted-foreground">
          Nenhum arcano corresponde à sua busca.
        </p>
      )}
    </div>
  )
}
