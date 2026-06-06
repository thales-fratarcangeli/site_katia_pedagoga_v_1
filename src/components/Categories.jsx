import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { CATEGORIES } from "../data/content"
import { themeOf } from "../lib/themes"
import { container, popIn, viewport } from "../lib/motion"

export default function Categories() {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Explore por tema"
        title="Categorias para cada momento da aula"
        description="Encontre rapidinho o material ideal para a sua turma, organizado por área e faixa etária."
      />

      <motion.div
        variants={container(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {CATEGORIES.map((cat) => {
          const t = themeOf(cat.color)
          const Icon = cat.icon
          return (
            <motion.a
              key={cat.id}
              href="#materiais"
              variants={popIn}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border border-cream-200 bg-white p-5 shadow-soft transition hover:shadow-card`}
            >
              <div
                className={`mb-4 grid h-14 w-14 place-items-center rounded-2xl ${t.iconWrap} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
              >
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="text-base font-bold text-ink">{cat.name}</h3>
              <p className="mt-1 text-sm font-medium text-ink-muted">
                {cat.count} materiais
              </p>
              <span
                className={`mt-3 inline-flex items-center gap-1 text-sm font-bold ${t.text} opacity-0 transition group-hover:opacity-100`}
              >
                Ver materiais <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          )
        })}
      </motion.div>
    </section>
  )
}
