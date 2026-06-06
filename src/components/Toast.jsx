import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, X, ShoppingCart } from "lucide-react"
import CoverArt from "./CoverArt"
import { useCart } from "../context/CartContext"

export default function Toast() {
  const { toast, dismissToast } = useCart()

  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-[60] flex justify-center sm:inset-x-auto sm:right-6 sm:justify-end">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
            className="pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-2xl border border-cream-200 bg-white p-3 shadow-card"
          >
            <div className="h-14 w-12 shrink-0 overflow-hidden rounded-xl">
              <CoverArt
                cover={toast.material.cover}
                color={toast.material.color}
                className="h-full w-full"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
                <CheckCircle2 className="h-4 w-4 text-mint-500" />
                Adicionado ao carrinho
              </p>
              <p className="truncate text-sm text-ink-muted">{toast.material.title}</p>
            </div>
            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full gradient-warm px-3.5 py-2 text-xs font-bold text-white"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              Carrinho
            </button>
            <button
              type="button"
              onClick={dismissToast}
              aria-label="Fechar"
              className="shrink-0 rounded-full p-1 text-ink-muted transition hover:bg-cream-100 hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
