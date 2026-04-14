import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          className="mx-auto mb-5 h-14 w-14 rounded-full border-2 border-fuchsia-300/40 border-t-fuchsia-300"
        />
        <p className="font-display text-lg tracking-[0.25em] text-white">
          PORTFOLIO INITIALIZING
        </p>
      </div>
    </motion.div>
  )
}
