import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  const springX = useSpring(x, { stiffness: 100, damping: 20 })
  const springY = useSpring(y, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const moveCursor = (event) => {
      x.set(event.clientX - 120)
      y.set(event.clientY - 120)
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [x, y])

  return (
    <motion.div
      className="cursor-glow hidden md:block"
      style={{ x: springX, y: springY }}
    />
  )
}
