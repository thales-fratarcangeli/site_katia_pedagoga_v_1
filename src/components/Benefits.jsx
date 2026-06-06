import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { BENEFITS } from "../data/content"
import { themeOf } from "../lib/themes"
import { container, popIn, viewport } from "../lib/motion"

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Por que a Katia Pedagógica"
        title="Tudo pensado para facilitar a sua rotina"
        description="Da escolha ao download, uma experiência simples e segura — para você focar no que importa: ensinar."
      />

      <motion.div
        variants={container(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {BENEFITS.map((b) => {
          const t = themeOf(b.color)
          const Icon = b.icon
          return (
            <motion.div
              key={b.title}
              variants={popIn}
              className="group rounded-3xl border border-cream-200 bg-white p-6 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card"
            >
              <div
                className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${t.iconWrap} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-ink-soft">{b.text}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
