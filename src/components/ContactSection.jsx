import { motion } from 'framer-motion'
import { Globe, Link2, Mail } from 'lucide-react'
import { contacts } from '../data/portfolioData'
import { SectionTitle } from './SectionTitle'

const links = [
  {
    label: 'Email',
    href: `mailto:${contacts.email}`,
    display: contacts.email,
    icon: Mail,
  },
  {
    label: 'GitHub',
    href: contacts.github,
    display: contacts.github,
    icon: Link2,
  },
  {
    label: 'LinkedIn',
    href: contacts.linkedin,
    display: contacts.linkedin,
    icon: Globe,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="section-shell py-16 md:py-24">
      <SectionTitle
        overline="Contact"
        title="Let’s Build Something Meaningful"
        subtitle="Open to internships, impactful collaborations, and builder communities where strong engineering meets creative execution."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {links.map((link, index) => {
          const Icon = link.icon
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-2xl p-5"
            >
              <Icon className="mb-3 text-fuchsia-200 transition group-hover:text-pink-200" />
              <p className="font-display text-xl font-semibold text-white">
                {link.label}
              </p>
              <p className="mt-2 break-all text-sm text-slate-300">{link.display}</p>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
