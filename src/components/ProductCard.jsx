import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Heart, Plus, FileText, Baby } from "lucide-react"
import CoverArt from "./CoverArt"
import { themeOf } from "../lib/themes"
import { popIn } from "../lib/motion"
import { useCart } from "../context/CartContext"

const formatBRL = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

export default function ProductCard({ material }) {
  const t = themeOf(material.color)
  const { addItem } = useCart()
  const [fav, setFav] = useState(false)

  return (
    <motion.article
      variants={popIn}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-soft"
    >
      {/* Capa */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <CoverArt
          cover={material.cover}
          color={material.color}
          className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Badge */}
        {material.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink shadow-sm backdrop-blur">
            {material.badge}
          </span>
        )}

        {/* Favoritar */}
        <button
          type="button"
          onClick={() => setFav((v) => !v)}
          aria-label={fav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          aria-pressed={fav}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-ink-soft shadow-sm backdrop-blur transition hover:scale-110 hover:text-coral-500"
        >
          <Heart
            className="h-4.5 w-4.5"
            strokeWidth={2.2}
            fill={fav ? "currentColor" : "none"}
            color={fav ? "#FF6B6B" : "currentColor"}
          />
        </button>

        {/* Chip de páginas */}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-ink/75 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          <FileText className="h-3.5 w-3.5" /> PDF · {material.pages} pág.
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${t.chip}`}>
            {material.category}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-bold text-ink">
            <Star className="h-4 w-4 fill-sunny-500 text-sunny-500" />
            {material.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}
            <span className="font-medium text-ink-muted">({material.reviews})</span>
          </span>
        </div>

        <h3 className="mb-2 line-clamp-2 text-base font-semibold leading-snug text-ink">
          {material.title}
        </h3>

        <p className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted">
          <Baby className="h-4 w-4" /> {material.age}
        </p>

        {/* Preço + ação */}
        <div className="mt-auto flex items-end justify-between gap-2">
          <div className="leading-none">
            {material.oldPrice && (
              <span className="block text-xs font-semibold text-ink-muted line-through">
                {formatBRL(material.oldPrice)}
              </span>
            )}
            <span className="text-xl font-extrabold text-ink">
              {formatBRL(material.price)}
            </span>
          </div>

          <motion.button
            type="button"
            onClick={() => addItem(material)}
            whileTap={{ scale: 0.92 }}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-bold text-white shadow-sm transition ${t.solid}`}
          >
            <Plus className="h-4 w-4" strokeWidth={2.6} />
            Adicionar
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
