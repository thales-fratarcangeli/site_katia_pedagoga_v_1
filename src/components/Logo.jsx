import { BookOpen } from "lucide-react"

export default function Logo({ compact = false }) {
  return (
    <a href="#inicio" className="group flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-warm shadow-coral transition-transform duration-300 group-hover:-rotate-6">
        <BookOpen className="h-5 w-5 text-white" strokeWidth={2.4} />
      </span>
      {!compact && (
        <span className="font-display text-lg leading-none">
          <span className="font-bold text-ink">Katia</span>{" "}
          <span className="font-semibold text-coral-500">Pedagógica</span>
        </span>
      )}
    </a>
  )
}
