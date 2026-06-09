export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="border-b border-border/60 bg-card/30">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
        <span className="font-heading text-xs tracking-[0.3em] text-primary">{eyebrow}</span>
        <h1 className="mt-4 text-balance font-heading text-4xl leading-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-pretty font-serif text-xl leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
