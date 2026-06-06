import { motion } from "framer-motion"
import { Search, ArrowRight, PlayCircle, Star, Sparkles, Zap, Check } from "lucide-react"
import CoverArt from "./CoverArt"
import { STATS, CATEGORIES } from "../data/content"
import { container, fadeUp, popIn, viewport } from "../lib/motion"

const avatars = [
  { i: "A", c: "bg-coral-400" },
  { i: "J", c: "bg-lilac-400" },
  { i: "C", c: "bg-mint-400" },
  { i: "L", c: "bg-sunny-400" },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Blobs decorativos */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-coral-200/60 blur-3xl animate-blob" />
        <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-lilac-200/60 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-[-4rem] left-1/3 h-72 w-72 rounded-full bg-sunny-200/60 blur-3xl animate-blob [animation-delay:-8s]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Coluna esquerda */}
        <motion.div
          variants={container(0.1)}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-coral-200 bg-white/70 px-4 py-1.5 text-sm font-bold text-coral-600 shadow-soft backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Nº 1 em atividades pedagógicas no Brasil
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display font-bold text-ink"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.05 }}
          >
            Materiais que{" "}
            <span className="text-gradient">encantam</span> e facilitam
            o seu dia em sala
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-lg text-ink-soft lg:mx-0"
          >
            Atividades em PDF, planejamentos e jogos prontos para imprimir e
            alinhados à BNCC. Pague, baixe na hora e leve direto para a sua
            turma.
          </motion.p>

          {/* Busca */}
          <motion.form
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-7 flex max-w-xl flex-col gap-2 rounded-[1.75rem] border border-cream-200 bg-white p-2 shadow-card sm:flex-row sm:items-center sm:rounded-full lg:mx-0"
          >
            <div className="flex flex-1 items-center gap-2 px-3 text-ink-muted">
              <Search className="h-5 w-5 shrink-0" />
              <input
                type="search"
                placeholder="O que você quer ensinar hoje?"
                className="w-full bg-transparent py-2.5 text-ink placeholder:text-ink-muted focus:outline-none"
              />
            </div>
            <select
              aria-label="Categoria"
              className="cursor-pointer rounded-full border border-cream-200 bg-cream px-4 py-2.5 text-sm font-semibold text-ink-soft focus:outline-none sm:border-0 sm:bg-transparent"
              defaultValue=""
            >
              <option value="">Todas categorias</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-warm px-6 py-3 font-bold text-white shadow-coral transition hover:brightness-105"
            >
              Buscar
            </button>
          </motion.form>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#materiais"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-bold text-white shadow-soft transition hover:bg-ink-soft sm:w-auto"
            >
              Explorar materiais
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream-200 bg-white/70 px-6 py-3.5 font-bold text-ink-soft backdrop-blur transition hover:border-coral-200 hover:text-coral-600 sm:w-auto"
            >
              <PlayCircle className="h-5 w-5" />
              Como funciona
            </a>
          </motion.div>

          {/* Prova social */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <div className="flex -space-x-2.5">
              {avatars.map((a) => (
                <span
                  key={a.i}
                  className={`grid h-9 w-9 place-items-center rounded-full border-2 border-cream text-sm font-bold text-white ${a.c}`}
                >
                  {a.i}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center justify-center gap-0.5 lg:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sunny-500 text-sunny-500" />
                ))}
                <span className="ml-1.5 font-bold text-ink">4,9</span>
              </div>
              <p className="text-ink-muted">+30 mil professoras já usam</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Coluna direita — ilustração */}
        <motion.div
          variants={popIn}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md">
            {/* Halo */}
            <div className="absolute inset-6 rounded-[2.5rem] gradient-sunset opacity-90 blur-[2px]" />

            {/* Capa de trás */}
            <div className="absolute left-2 top-10 aspect-[4/5] w-[58%] -rotate-6 overflow-hidden rounded-3xl border-4 border-white shadow-card">
              <CoverArt cover="math" color="lilac" className="h-full w-full" />
            </div>

            {/* Capa principal */}
            <div className="absolute right-2 top-2 aspect-[4/5] w-[60%] rotate-3 overflow-hidden rounded-3xl border-4 border-white shadow-card animate-float-slow">
              <CoverArt cover="abc" color="coral" className="h-full w-full" />
            </div>

            {/* Chip: download imediato */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-2 top-1/2 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-card sm:-left-4"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint-100 text-mint-600">
                <Zap className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-ink">Download na hora</p>
                <p className="text-xs text-ink-muted">PDF no seu e-mail</p>
              </div>
            </motion.div>

            {/* Chip: avaliação */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-2 right-0 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-card animate-float sm:right-2"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-sunny-100 text-sunny-600">
                <Star className="h-5 w-5 fill-sunny-500 text-sunny-500" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-ink">4,9 de 5</p>
                <p className="text-xs text-ink-muted">+9 mil avaliações</p>
              </div>
            </motion.div>

            {/* Chip: BNCC */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute -right-1 top-6 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white shadow-card"
            >
              <Check className="h-3.5 w-3.5 text-mint-400" strokeWidth={3} />
              Alinhado à BNCC
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Estatísticas */}
      <motion.div
        variants={container(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 pb-14 sm:px-6 md:grid-cols-4"
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={popIn}
            className="rounded-3xl border border-cream-200 bg-white/70 px-4 py-5 text-center shadow-soft backdrop-blur"
          >
            <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1 text-sm font-semibold text-ink-muted">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
