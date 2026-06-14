import Image from "next/image"

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-card/30">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt ?? ""}
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
      )}

      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
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
