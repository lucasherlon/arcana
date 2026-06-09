import Link from "next/link"
import Image from "next/image"
import { Sparkles, BookOpen, Layers, Compass, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArcanaCard } from "@/components/arcana-card"
import { majorArcana, suitInfo } from "@/lib/tarot-data"

export default function HomePage() {
  const featured = [majorArcana[0], majorArcana[1], majorArcana[10], majorArcana[19]]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/tarot-hero.png"
              alt="Cartas de tarot antigas dispostas sobre veludo à luz de velas"
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          </div>

          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center md:py-40">
            <span className="flex items-center gap-2 font-heading text-xs tracking-[0.3em] text-primary">
              <Sparkles className="size-4" aria-hidden="true" />
              O UNIVERSO SIMBÓLICO DO TAROT
            </span>
            <h1 className="mt-6 text-balance font-heading text-4xl leading-tight text-foreground md:text-6xl">
              A jornada do louco contada em 78 arcanos
            </h1>
            <p className="mt-6 max-w-2xl text-pretty font-serif text-xl leading-relaxed text-muted-foreground">
              Explore as origens, os símbolos e os significados do tarot. Um guia contemplativo para
              entender cada carta e a sabedoria que ela carrega.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/arcanos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-heading text-sm tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explorar os Arcanos
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/o-tarot"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3 font-heading text-sm tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                O que é o Tarot?
              </Link>
            </div>
          </div>
        </section>

        {/* O que é o tarot */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-heading text-xs tracking-[0.3em] text-primary">SOBRE A ARTE</span>
              <h2 className="mt-4 text-balance font-heading text-3xl leading-tight text-foreground md:text-4xl">
                Um espelho de símbolos e arquétipos
              </h2>
              <div className="mt-6 space-y-4 font-serif text-lg leading-relaxed text-muted-foreground">
                <p>
                  O tarot é um baralho de 78 cartas repletas de símbolos. Surgido na Europa no século XV
                  como jogo, tornou-se ao longo dos séculos um instrumento de introspecção, estudo
                  simbólico e autoconhecimento.
                </p>
                <p>
                  Cada carta representa arquétipos universais — figuras, situações e emoções que
                  atravessam a experiência humana. Mais do que prever o futuro, o tarot é convidado a
                  funcionar como um espelho para a reflexão.
                </p>
              </div>
              <Link
                href="/o-tarot"
                className="mt-8 inline-flex items-center gap-2 font-heading text-sm tracking-wider text-primary transition-opacity hover:opacity-80"
              >
                Conhecer a história e estrutura
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Layers, title: "78 cartas", text: "22 arcanos maiores e 56 menores." },
                { icon: Compass, title: "Arquétipos", text: "Símbolos universais da experiência humana." },
                { icon: BookOpen, title: "Estudo", text: "Uma ferramenta de reflexão e autoconhecimento." },
                { icon: Sparkles, title: "Tradição", text: "Séculos de simbolismo e interpretação." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-lg border border-border/60 bg-card p-6">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-lg text-foreground">{title}</h3>
                  <p className="mt-2 font-serif text-base leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Estrutura: maiores e menores */}
        <section className="border-y border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="text-center">
              <span className="font-heading text-xs tracking-[0.3em] text-primary">A ESTRUTURA</span>
              <h2 className="mt-4 font-heading text-3xl text-foreground md:text-4xl">
                Maiores e Menores
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Link
                href="/arcanos/maiores"
                className="group rounded-lg border border-border/60 bg-card p-8 transition-colors hover:border-primary/60"
              >
                <h3 className="font-heading text-2xl text-foreground transition-colors group-hover:text-primary">
                  Arcanos Maiores
                </h3>
                <p className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground">
                  As 22 cartas que narram a jornada do Louco — do início inocente à realização plena.
                  Representam grandes lições e marcos espirituais.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm tracking-wider text-primary">
                  Ver os 22 arcanos
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>

              <Link
                href="/arcanos/menores"
                className="group rounded-lg border border-border/60 bg-card p-8 transition-colors hover:border-primary/60"
              >
                <h3 className="font-heading text-2xl text-foreground transition-colors group-hover:text-primary">
                  Arcanos Menores
                </h3>
                <p className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground">
                  As 56 cartas divididas em quatro naipes — Paus, Copas, Espadas e Ouros. Tratam das
                  situações e experiências do cotidiano.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {Object.values(suitInfo).map((s) => (
                    <span
                      key={s.name}
                      className="rounded-full border border-border/60 px-3 py-1 font-serif text-sm text-muted-foreground"
                    >
                      {s.name} · {s.element}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Destaques */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-heading text-xs tracking-[0.3em] text-primary">DESTAQUES</span>
              <h2 className="mt-4 font-heading text-3xl text-foreground md:text-4xl">Comece por aqui</h2>
            </div>
            <Link
              href="/arcanos"
              className="hidden items-center gap-2 font-heading text-sm tracking-wider text-primary transition-opacity hover:opacity-80 sm:inline-flex"
            >
              Ver todos
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((card) => (
              <ArcanaCard key={card.slug} card={card} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
