import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AboutSection } from './components/AboutSection'
import { AchievementsSection } from './components/AchievementsSection'
import { AnimatedBackground } from './components/AnimatedBackground'
import { ContactSection } from './components/ContactSection'
import { CursorGlow } from './components/CursorGlow'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { LoadingScreen } from './components/LoadingScreen'
import { ProjectsSection } from './components/ProjectsSection'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <AnimatedBackground />
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 pb-16"
        >
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <AchievementsSection />
          <ExperienceSection />
          <ContactSection />
        </motion.main>
      )}
    </>
  )
}

export default App
