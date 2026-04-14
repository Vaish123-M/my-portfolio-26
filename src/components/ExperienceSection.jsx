import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { experienceTimeline } from '../data/portfolioData'
import { SectionTitle } from './SectionTitle'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-16 md:py-24">
      <SectionTitle
        overline="Experience"
        title="Impact Timeline"
        subtitle="Internships, ambassador programs, and hackathon milestones that shaped execution speed and product thinking."
      />

      <div className="glass rounded-3xl p-6 md:p-10">
        <div className="relative ml-2 border-l border-fuchsia-300/30 pl-8">
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="relative mb-8"
            >
              <span className="absolute -left-[2.7rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-500/20 text-fuchsia-100">
                <Trophy size={14} />
              </span>
              <h3 className="text-lg font-semibold text-white">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
