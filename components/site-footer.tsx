import Link from "next/link"
import { Moon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <Moon className="size-5 text-primary" aria-hidden="true" />
            <span className="font-heading text-lg tracking-[0.2em] text-foreground">ARCANA</span>
          </div>
          <p className="mt-4 font-serif text-base leading-relaxed text-muted-foreground">
            Um guia contemplativo sobre a arte do tarot, seus símbolos e os 78 arcanos que iluminam a
            jornada da alma.
          </p>
        </div>

        <nav className="flex gap-12" aria-label="Rodapé">
          <ul className="flex flex-col gap-3 font-serif text-muted-foreground">
            <li className="font-heading text-xs tracking-widest text-foreground">EXPLORAR</li>
            <li>
              <Link href="/o-tarot" className="transition-colors hover:text-primary">
                O Tarot
              </Link>
            </li>
            <li>
              <Link href="/o-zodiaco" className="transition-colors hover:text-primary">
                O Zodíaco
              </Link>
            </li>
            <li>
              <Link href="/arcanos" className="transition-colors hover:text-primary">
                Todos os Arcanos
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 font-serif text-muted-foreground">
            <li className="font-heading text-xs tracking-widest text-foreground">ARCANOS</li>
            <li>
              <Link href="/arcanos/maiores" className="transition-colors hover:text-primary">
                Arcanos Maiores
              </Link>
            </li>
            <li>
              <Link href="/arcanos/menores" className="transition-colors hover:text-primary">
                Arcanos Menores
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border/60 px-6 py-6">
        <p className="mx-auto max-w-6xl text-center font-serif text-sm text-muted-foreground">
          {"© "}
          {new Date().getFullYear()} Arcana · Criado por Lucas Herlon · Conteúdo educativo sobre tarot. Apenas para fins de estudo e reflexão.
        </p>
      </div>
    </footer>
  )
}
