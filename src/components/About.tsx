import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-light mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-300/30 backdrop-blur-sm rounded-xl p-8 hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300"
        >
          <p className="text-primary-200 text-lg leading-relaxed mb-6">
            I am a Data Engineer and Information Management professional with a strong background in developing
            efficient data solutions and analytics frameworks. Currently pursuing a Master of Science in Information
            Management with a concentration in Data Science at the University of Illinois Urbana-Champaign, I bring over
            3 years of industry experience from BlackRock, where I worked on cutting-edge data engineering projects.
          </p>
          <p className="text-primary-200 text-lg leading-relaxed mb-6">
            My passion lies in leveraging data to drive insights and create impactful solutions. Throughout my career,
            I've developed expertise in building scalable data pipelines, implementing analytics frameworks, and
            optimizing data processing systems.
          </p>
          <p className="text-primary-200 text-lg leading-relaxed">
            I am constantly exploring new technologies and methodologies in the field of data engineering and analytics,
            aiming to stay at the forefront of industry developments and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
