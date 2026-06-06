import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Search, ShoppingCart, Heart, Sparkles } from "lucide-react"
import Logo from "./Logo"
import { NAV_LINKS } from "../data/content"
import { useCart } from "../context/CartContext"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <>
      {/* Faixa promocional */}
      <div className="gradient-warm text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold sm:text-sm">
          <Sparkles className="h-4 w-4 shrink-0" />
          <span>
            Entrega na hora, é tudo digital! Use{" "}
            <span className="font-extrabold underline decoration-white/60 underline-offset-2">
              PRIMEIRA10
            </span>{" "}
            e ganhe 10% OFF na 1ª compra.
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-cream-200 bg-cream/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <Logo />

          {/* Links — desktop */}
          <ul className="ml-2 hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition hover:bg-coral-50 hover:text-coral-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Busca — desktop */}
          <div className="ml-auto hidden max-w-xs flex-1 items-center gap-2 rounded-full border border-cream-200 bg-white px-4 py-2 text-ink-muted shadow-soft md:flex">
            <Search className="h-4 w-4 shrink-0" />
            <input
              type="search"
              placeholder="Buscar atividades, temas..."
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
            />
          </div>

          {/* Ações */}
          <div className="ml-auto flex items-center gap-1.5 md:ml-0">
            <button
              type="button"
              aria-label="Favoritos"
              className="hidden h-10 w-10 place-items-center rounded-full text-ink-soft transition hover:bg-coral-50 hover:text-coral-600 sm:grid"
            >
              <Heart className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Carrinho"
              className="relative grid h-10 w-10 place-items-center rounded-full text-ink-soft transition hover:bg-coral-50 hover:text-coral-600"
            >
              <ShoppingCart className="h-5 w-5" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 18 }}
                    className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-coral-500 px-1 text-[11px] font-bold text-white"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href="#"
              className="ml-1 hidden rounded-full px-4 py-2 text-sm font-bold text-ink-soft transition hover:text-coral-600 lg:inline-block"
            >
              Entrar
            </a>
            <a
              href="#"
              className="hidden rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-ink-soft lg:inline-block"
            >
              Criar conta
            </a>

            {/* Hambúrguer */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-coral-50 lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-cream-200 lg:hidden"
            >
              <div className="space-y-2 px-4 py-4">
                <div className="flex items-center gap-2 rounded-2xl border border-cream-200 bg-white px-4 py-2.5 text-ink-muted">
                  <Search className="h-4 w-4" />
                  <input
                    type="search"
                    placeholder="Buscar atividades..."
                    className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
                  />
                </div>
                <ul className="grid gap-1">
                  {NAV_LINKS.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-base font-semibold text-ink transition hover:bg-coral-50 hover:text-coral-600"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 pt-1">
                  <a
                    href="#"
                    className="flex-1 rounded-full border border-cream-200 px-4 py-3 text-center text-sm font-bold text-ink"
                  >
                    Entrar
                  </a>
                  <a
                    href="#"
                    className="flex-1 rounded-full bg-ink px-4 py-3 text-center text-sm font-bold text-white"
                  >
                    Criar conta
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
