import { useState } from "react"
import { motion } from "framer-motion"
import { Gift, Mail, CheckCircle2 } from "lucide-react"
import { fadeUp, viewport } from "../lib/motion"

export default function Newsletter() {
  const [sent, setSent] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative overflow-hidden rounded-[2.5rem] gradient-warm px-6 py-12 text-center shadow-coral sm:px-12 sm:py-16"
      >
        {/* Decoração */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-white/15" />
          <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute right-10 top-8 h-3 w-3 rotate-45 rounded-sm bg-white/40" />
          <div className="absolute left-12 bottom-10 h-2.5 w-2.5 rounded-full bg-sunny-300" />
          <div className="absolute left-1/4 top-10 h-2 w-2 rounded-full bg-white/50" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold text-white backdrop-blur">
            <Gift className="h-4 w-4" />
            Presente da semana
          </span>

          <h2
            className="mt-5 font-display font-bold text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.1 }}
          >
            Ganhe uma atividade gratuita toda semana
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-lg text-white/90">
            Cadastre seu e-mail e receba novidades, cupons exclusivos e um PDF
            gratuito direto na sua caixa de entrada.
          </p>

          {sent ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-coral-600 shadow-card">
              <CheckCircle2 className="h-5 w-5" />
              Prontinho! Confira seu e-mail 💌
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="mx-auto mt-8 flex max-w-lg flex-col gap-2 rounded-[1.75rem] bg-white/15 p-2 backdrop-blur sm:flex-row sm:rounded-full"
            >
              <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4">
                <Mail className="h-5 w-5 shrink-0 text-ink-muted" />
                <input
                  type="email"
                  required
                  placeholder="seu melhor e-mail"
                  className="w-full bg-transparent py-3 text-ink placeholder:text-ink-muted focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-ink px-7 py-3.5 font-bold text-white transition hover:bg-ink-soft"
              >
                Quero receber
              </button>
            </form>
          )}

          <p className="mt-4 text-sm text-white/75">
            Sem spam. Cancele quando quiser. 🤍
          </p>
        </div>
      </motion.div>
    </section>
  )
}
