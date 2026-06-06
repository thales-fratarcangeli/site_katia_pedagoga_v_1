import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import SectionHeading from "./SectionHeading"
import ProductCard from "./ProductCard"
import { MATERIALS, FILTERS } from "../data/content"
import { container } from "../lib/motion"

export default function FeaturedMaterials() {
  const [active, setActive] = useState("bestseller")

  const list = useMemo(
    () => MATERIALS.filter((m) => m.tags.includes(active)).slice(0, 8),
    [active]
  )

  return (
    <section id="materiais" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Vitrine de materiais"
            title="Os queridinhos das professoras"
            description="Atividades testadas em sala, prontas para imprimir e usar hoje mesmo."
          />
          <a
            href="#"
            className="hidden items-center gap-2 rounded-full border border-cream-200 px-5 py-3 text-sm font-bold text-ink-soft transition hover:border-coral-200 hover:text-coral-600 lg:inline-flex"
          >
            Ver todos os materiais <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Filtros */}
        <div className="mt-8 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none]">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${
                active === f.id
                  ? "gradient-warm text-white shadow-coral"
                  : "border border-cream-200 bg-cream text-ink-soft hover:text-coral-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grade */}
        <motion.div
          key={active}
          variants={container(0.07)}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {list.map((m) => (
            <ProductCard key={m.id} material={m} />
          ))}
        </motion.div>

        <div className="mt-10 text-center lg:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-soft"
          >
            Ver todos os materiais <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
