import { motion } from 'framer-motion'

export function SectionTitle({ overline, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-300/90">
        {overline}
      </p>
      <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
        {subtitle}
      </p>
    </motion.div>
  )
}