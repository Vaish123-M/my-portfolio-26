import { motion } from 'framer-motion'
import { BriefcaseBusiness, CalendarDays } from 'lucide-react'
import { experienceEntries } from '../data/portfolioData'
import { SectionTitle } from './SectionTitle'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-16 md:py-24">
      <SectionTitle
        overline="Experience"
        title="Experience"
        subtitle="Internships and academic growth presented in a clean card layout for quick recruiter scanning."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {experienceEntries.map((entry, index) => (
          <motion.article
            key={`${entry.title}-${entry.period}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-400/10 via-blue-400/10 to-pink-400/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-100">
                <CalendarDays size={14} />
                {entry.period}
              </div>
              <BriefcaseBusiness className="mb-4 text-blue-200" size={28} />
              <h3 className="font-display text-xl font-bold text-white">
                {entry.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-blue-200">
                {entry.organization}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {entry.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
