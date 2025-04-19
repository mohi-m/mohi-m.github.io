import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Cigarette Policy Analysis",
    description:
      "Developed predictive models using ARIMA and Logistic Regression on 150k+ rows of e-cigarette legislation data in R, achieving 8% MAPE in forecasting policy stringency trends and 80% classification accuracy in identifying high-risk regions for policy violations. Visualized actionable insights with ggplot2 to support public health improvements.",
    image: "/images/Arima_proj.png",
    github: "https://github.com/mohi-m/E-Cigarette_Regulations_Analysis",
    demoLink: "#",
    tags: ["R", "Time-Series Analysis", "ARIMA", "Logistic Regression", "ggplot2"],
    highlights: ["8% MAPE in forecasting", "80% classification accuracy", "150k+ rows analyzed"],
  },
  {
    title: "Energy and Emissions Analysis",
    description:
      "Processed and analyzed the Economist Intelligence Unit's Energy dataset (2000–2024) using Tableau Prep, enabling structured insights into emissions and energy consumption. Designed interactive Tableau dashboards to compare renewable and non-renewable energy adoption, showcasing energy transitions across major economies.",
    image: "/images/tableau_proj.png",
    github: "https://github.com/mohi-m",
    demoLink: "#",
    tags: ["Tableau", "Tableau Prep", "ETL", "Data Analysis", "Visualization"],
    highlights: ["24 years of data", "Interactive dashboards", "Global analysis"],
  },
  {
    title: "SignBridge: Speech-to-ISL/ASL Gesture Conversion",
    description:
      "Developed a real-time speech-to-sign language converter that translates spoken language into ISL and ASL gestures using an intuitive interface, with fallback mechanisms to display alphabet images for unrecognized words.",
    image: "/images/SignBridge_proj.png",
    github: "https://github.com/mohi-m/SignBridge",
    demoLink: "#",
    tags: ["Python", "Tkinter", "Speech Recognition", "Gesture Recognition", "Accessibility"],
    highlights: ["Real-time translation", "Multiple sign languages", "Fallback system"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-dark-100 to-dark-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-light mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-dark-300/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Image Section */}
                <motion.div
                  className="relative h-64 md:h-full rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
                </motion.div>

                {/* Content Section */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-light mb-4 group-hover:text-secondary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-200 mb-6 line-clamp-4">{project.description}</p>

                    {/* Highlights */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="bg-dark-200/50 p-3 rounded-lg text-center">
                          <p className="text-secondary-300 text-sm font-medium">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-dark-200/50 text-secondary-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary-600 text-light rounded-lg hover:bg-secondary-700 transition-colors"
                    >
                      <Github size={20} />
                      View Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-secondary-500 text-light rounded-lg hover:bg-secondary-500/10 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
