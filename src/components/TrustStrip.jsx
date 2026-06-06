const ITEMS = [
  "Alfabetização",
  "Matemática",
  "Coordenação Motora",
  "Educação Infantil",
  "Inglês",
  "Datas Comemorativas",
  "Jogos Pedagógicos",
  "Ensino Fundamental",
  "Planejamentos",
  "Alinhado à BNCC",
]

export default function TrustStrip() {
  return (
    <section className="border-y border-cream-200 bg-white py-6">
      <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
        Tudo para o seu planejamento
      </p>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-cream-200 bg-cream px-5 py-2.5 text-sm font-semibold text-ink-soft"
            >
              <span className="h-2 w-2 rounded-full bg-coral-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
