import { motion } from 'framer-motion'

const blobs = [
  'left-[8%] top-[10%] h-56 w-56 bg-fuchsia-500/20',
  'right-[10%] top-[18%] h-72 w-72 bg-blue-500/20',
  'left-[30%] bottom-[6%] h-64 w-64 bg-pink-500/15',
]

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {blobs.map((classes, index) => (
        <motion.div
          key={classes}
          animate={{
            y: [0, -25, 0],
            x: [0, index % 2 === 0 ? 14 : -14, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full blur-3xl ${classes}`}
        />
      ))}
    </div>
  )
}
