import { motion } from 'framer-motion'
import { ArrowDownToLine, Download, Sparkles } from 'lucide-react'
import { heroData } from '../data/portfolioData'

export function HeroSection() {
  return (
    <section id="hero" className="section-shell relative min-h-screen pt-28">
      <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-12">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-fuchsia-200"
        >
          <Sparkles size={14} />
          Futuristic Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display text-4xl font-extrabold leading-[1.03] text-white sm:text-5xl md:text-7xl"
        >
          {heroData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 text-lg font-semibold text-blue-200 md:text-2xl"
        >
          {heroData.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-6 max-w-3xl text-base text-slate-200 md:text-xl"
        >
          {heroData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
          >
            <ArrowDownToLine size={18} />
            View Projects
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-fuchsia-300/70 hover:bg-fuchsia-400/10"
          >
            <Download size={18} />
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
