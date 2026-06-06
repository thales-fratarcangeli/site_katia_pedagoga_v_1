import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { STEPS } from "../data/content"
import { themeOf } from "../lib/themes"
import { container, popIn, viewport } from "../lib/motion"

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-lilac-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Simples assim"
          title="Do clique à sala de aula em 3 passos"
          description="Sem complicação: você escolhe, paga e já sai imprimindo."
        />

        <motion.div
          variants={container(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mt-14 grid gap-8 md:grid-cols-3"
        >
          {/* Linha conectora (desktop) */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-lilac-200 md:block" />

          {STEPS.map((s, i) => {
            const t = themeOf(s.color)
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={popIn}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div
                    className={`grid h-18 w-18 place-items-center rounded-3xl border-4 border-lilac-50 bg-white shadow-card ${t.text}`}
                  >
                    <Icon className="h-8 w-8" strokeWidth={2.2} />
                  </div>
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full gradient-warm text-sm font-bold text-white shadow-coral">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 max-w-xs text-ink-soft">{s.text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
