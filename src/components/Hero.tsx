import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const FloatingShapes = () => {
  const shapes = [
    { size: "w-64 h-64", color: "bg-secondary-900/10", blur: "blur-3xl", left: "10%", top: "20%" },
    { size: "w-96 h-96", color: "bg-primary-900/10", blur: "blur-3xl", left: "60%", top: "10%" },
    { size: "w-72 h-72", color: "bg-secondary-800/10", blur: "blur-3xl", left: "30%", top: "50%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.color} ${shape.blur} rounded-full`}
          initial={{ x: shape.left, y: shape.top }}
          animate={{
            y: [shape.top, `calc(${shape.top} + 30px)`, shape.top],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('/images/code-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
      <motion.div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-100 to-dark-200" />
      <FloatingShapes />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-6xl font-bold text-light mb-6">
            Hi, I'm <span className="text-secondary-400">Mohi</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-primary-200 mb-8"
        >
          Data Enthusiast | Graduate Student at UIUC | Ex - Data Engineer @ BlackRock
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
            className="px-6 py-3 bg-secondary-600 text-light rounded-lg hover:bg-secondary-700 transition-colors"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 border-2 border-secondary-500 text-light rounded-lg hover:bg-secondary-500/10 transition-colors"
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
