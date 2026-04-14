import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { achievements } from '../data/portfolioData'
import { SectionTitle } from './SectionTitle'

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell py-16 md:py-24">
      <SectionTitle
        overline="Achievements"
        title="Awards & Recognition"
        subtitle="Competition wins, hackathon placements, and leadership recognition across prestigious platforms."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-yellow-400/10 via-pink-400/10 to-fuchsia-400/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10">
              <Award className="mb-4 text-yellow-300" size={28} />
              <h3 className="font-display text-lg font-bold text-white">
                {achievement.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{achievement.category}</p>
              <div className="mt-4 inline-flex rounded-lg border border-yellow-300/30 bg-yellow-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-100">
                {achievement.badge}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
