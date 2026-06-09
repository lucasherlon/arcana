"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Início" },
  { href: "/o-tarot", label: "O Tarot" },
  { href: "/arcanos", label: "Os Arcanos" },
  { href: "/arcanos/maiores", label: "Arcanos Maiores" },
  { href: "/arcanos/menores", label: "Arcanos Menores" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Moon className="size-5 text-primary" aria-hidden="true" />
          <span className="font-heading text-lg tracking-[0.2em] text-foreground">ARCANA</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-serif text-base tracking-wide transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-6 py-4 md:hidden" aria-label="Navegação móvel">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-serif text-lg tracking-wide transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
