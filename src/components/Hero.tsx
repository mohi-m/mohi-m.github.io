import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('/images/background/home_background.png')] bg-fixed bg-cover bg-center bg-no-repeat blur-sm brightness-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ y: backgroundY }}
        transition={{ duration: 0.8 }}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 bg-dark-bg/0 p-8 rounded-lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Hi, I'm <span className="text-secondary-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Mohi</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold text-white mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
        >
          Data Science @ UIUC | Ex - Data Engineer @ BlackRock
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-lg"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 border-2 border-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-500/10 transition-colors shadow-lg"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ArrowDown className="mx-auto text-primary-300" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
