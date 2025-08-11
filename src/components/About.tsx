import { motion } from "framer-motion";

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section id="about" className="py-20 bg-black text-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-light mb-12">About Me</h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.h3 {...fadeInUp} className="text-3xl font-bold text-secondary-400 mb-6 text-center">
              Turning data into decisions
            </motion.h3>
            <motion.p {...fadeInUp} className="text-xl text-primary-200 leading-relaxed text-center mb-8">
              I'm a <span className="font-semibold text-secondary-400">Data Engineer</span> with 3+ years of experience
              at
              <span className="font-semibold text-secondary-400"> BlackRock</span>, now sharpening my skills in{" "}
              <span className="font-semibold text-secondary-400">Data Science </span>
              through a Master's at <span className="font-semibold text-secondary-400">UIUC</span>.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.p {...fadeInUp} className="text-xl text-primary-200 leading-relaxed text-center mb-8">
              My interests lie in Machine Learning, LLMs, and building Scalable Systems that make data more useful. I'm
              currently exploring topics like <span className="text-secondary-400">LLM Alignment</span> and
              <span className="text-secondary-400"> Causal Inferences</span>, and always enjoy working on projects that
              blend research and real-world impact.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
