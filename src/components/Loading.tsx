import { motion } from "framer-motion";

export function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 mb-4 mx-auto"
        >
          <div className="w-full h-full rounded-full border-4 border-t-secondary-400 border-r-primary-400 border-b-secondary-400 border-l-primary-400 animate-spin" />
        </motion.div>
        <motion.h2
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-xl text-primary-200"
        >
          Loading...
        </motion.h2>
      </div>
    </motion.div>
  );
}
