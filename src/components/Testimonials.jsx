import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { TESTIMONIALS } from "../data/content"
import { themeOf } from "../lib/themes"
import { container, popIn, viewport } from "../lib/motion"

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Quem usa, recomenda"
        title="Professoras apaixonadas pelos materiais"
        description="Mais de 30 mil educadoras já transformaram o planejamento com a Katia Pedagógica."
      />

      <motion.div
        variants={container(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {TESTIMONIALS.map((tm) => {
          const t = themeOf(tm.color)
          return (
            <motion.figure
              key={tm.name}
              variants={popIn}
              className="relative flex flex-col rounded-3xl border border-cream-200 bg-white p-6 shadow-soft"
            >
              <Quote className={`h-8 w-8 ${t.text} opacity-30`} fill="currentColor" />
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: tm.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sunny-500 text-sunny-500" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-ink-soft">“{tm.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-cream-200 pt-4">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-base font-bold text-white ${t.solid}`}
                >
                  {tm.name.replace("Profª ", "").charAt(0)}
                </span>
                <div className="leading-tight">
                  <div className="font-bold text-ink">{tm.name}</div>
                  <div className="text-sm text-ink-muted">{tm.city}</div>
                </div>
              </figcaption>
            </motion.figure>
          )
        })}
      </motion.div>
    </section>
  )
}
