import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { skills } from '../data/portfolioData'

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-16 md:py-24">
      <SectionTitle
        overline="About"
        title="Engineering Ideas Into Real Products"
        subtitle="I am a computer engineering student and full stack developer who enjoys turning complexity into intuitive interfaces and measurable outcomes."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.article
            key={skill.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass rounded-2xl p-5"
          >
            <h3 className="font-display text-xl font-semibold text-white">
              {skill.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-fuchsia-300/25 bg-fuchsia-400/10 px-3 py-1 text-xs font-medium text-fuchsia-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
