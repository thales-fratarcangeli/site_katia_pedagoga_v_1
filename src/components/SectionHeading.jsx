import { motion } from "framer-motion"
import { fadeUp, viewport } from "../lib/motion"

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const isCenter = align === "center"
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={
        isCenter
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-coral-100 px-3.5 py-1.5 text-sm font-bold text-coral-600">
          {eyebrow}
        </span>
      )}
      <h2
        className="mt-4 font-display font-bold text-ink"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-lg text-ink-soft ${isCenter ? "mx-auto max-w-xl" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
