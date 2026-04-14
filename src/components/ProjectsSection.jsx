import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'
import { SectionTitle } from './SectionTitle'

function ProjectCard({ project, index }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), {
    stiffness: 180,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), {
    stiffness: 180,
    damping: 18,
  })

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5

    x.set(relativeX)
    y.set(relativeY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ scale: 1.025 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group glass relative overflow-hidden rounded-2xl p-6"
    >
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-fuchsia-400/20 via-blue-400/20 to-pink-400/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <h3 className="font-display text-2xl font-bold text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-blue-300/35 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-pink-300/70 hover:bg-pink-400/10"
          >
            <ArrowUpRight size={16} />
            GitHub Repo
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-16 md:py-24">
      <SectionTitle
        overline="Projects"
        title="Flagship Work"
        subtitle="A curated set of production-focused projects solving real user and domain problems."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
