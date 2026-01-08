import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Modal component for full-size image
function ImageModal({
  isOpen,
  image,
  title,
  onClose,
}: {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt={title} className="w-full h-full object-contain rounded-lg" />
      </motion.div>
    </motion.div>
  );
}

const projects = [
  {
    title: "🎓 UIUC Semester Planner",
    description: [
      "Designed and developed a production-ready full-stack web application, implementing RESTful APIs, schema validation, authentication, and cloud deployment to support personalized academic planning workflows.",
      "Built an AI-assisted recommendation pipeline integrating GPT-5.2 to generate and rank career-aligned course pathways, orchestrated via backend services and persisted in MongoDB for scalable, repeatable recommendations.",
    ],
    image: "/images/projects/uiuc_semester_planner.png",
    github: "https://github.com/mohi-m/UIUC_Semester_Planner",
    tags: ["Python", "FastAPI", "TypeScript", "React", "MongoDB", "Firebase Auth", "OpenAI", "Render"],
  },
  {
    title: "💰 FinStream-AI",
    description: [
      "Engineered a production-grade AWS ETL pipeline (Airflow) to ingest, validate, and store US stock market data with idempotent tasks, data quality checks, and holiday-aware scheduling, ensuring reliable, zero-duplication loads.",
      "Delivered integrated ML forecasting (LSTM) with MLflow tracking and a React + FastAPI analytics app for interactive charts and portfolio risk metrics; implemented automated deployment using CI/CD on GitHub Actions.",
    ],
    image: "/images/projects/finstream_ai.png",
    github: "https://github.com/mohi-m/FinStream-AI",
    tags: ["Python", "AWS", "Apache Airflow", "PostgreSQL", "MLflow", "Docker", "FastAPI", "React", "GitHub Actions"],
  },
  {
    title: "🐘 Postgres Cluster Monitor",
    description: [
      "Built async REST API with multi-node health checks, connection pooling, and latency diagnostics; implemented pgBouncer proxy with round-robin load balancing across read replicas.",
      "Developed real-time React dashboard with live status monitoring and integrated Locust-powered load testing UI; containerized full stack with Docker Compose for reproducible multi-environment deployments.",
    ],
    image: "/images/projects/postgres-cluster-monitor.png",
    github: "https://github.com/mohi-m/Postgres-Cluster-Monitor",
    tags: ["Python", "Azure", "FastAPI", "pgBouncer", "Locust", "Docker", "PostgreSQL", "React"],
  },
  {
    title: "🔐 Chat PII Anonymizer",
    description: [
      "Developed a tool to anonymize PII from Character.ai chat logs, enabling ethical analysis of AI interactions with children.",
      "Integrated spaCy NER, regex-based detection, and Presidio with a Tkinter GUI and evaluation metrics (precision, recall, F1-score) for accurate and user-friendly anonymization.",
    ],
    image: "/images/projects/chat_pii_anonymizer.png",
    github: "https://github.com/mohi-m/chat-pii-anonymizer",
    tags: ["Python", "spaCy", "Presidio", "Regex", "Faker", "Tkinter", "scikit-learn", "Logging"],
  },
  {
    title: "😷 Face Mask Detection using CNN & OpenCV",
    description: [
      "Built a CNN-based image classifier to detect face masks with 90%+ validation accuracy, trained on preprocessed grayscale images.",
      "Deployed real-time detection using OpenCV and Haar cascades with live webcam inference and labeled bounding box overlays.",
    ],
    image: "/images/projects/face_mask_detection.png",
    github: "https://github.com/mohi-m/face-mask-detection",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "Haar Cascade"],
  },
  {
    title: "🌍 Energy Generation Overview in Top Economies",
    description: [
      "Cleaned and preprocessed the EIU Energy dataset (2000–2024) using Tableau Prep to enable structured analysis.",
      "Built interactive dashboards in Tableau to visualize energy consumption, emissions, and renewable vs. non-renewable transitions across top global economies.",
    ],
    image: "/images/projects/tableau_proj.png",
    github: "https://github.com/mohi-m/energy-dashboard",
    tags: ["Tableau", "Tableau Prep", "ETL"],
  },
  {
    title: "💻 Personal Portfolio Website",
    description: [
      "Designed and developed a modern, responsive portfolio using React, TypeScript, and TailwindCSS with smooth Framer Motion animations and dark mode support.",
      "Set up automated CI/CD with GitHub Actions for seamless deployment to GitHub Pages.",
    ],
    image: "/images/projects/portfolio_website.png",
    github: "https://github.com/mohi-m/mohi-m.github.io",
    tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite", "GitHub Actions"],
  },
  {
    title: "🚭 E-Cigarette Policy Analysis",
    description: [
      "Built predictive models on 150k+ rows of e-cigarette legislation data, achieving 8% MAPE in forecasting policy stringency and 80% accuracy in identifying high-risk regions.",
      "Created data visualizations with ggplot2 to highlight trends and support public health decision-making.",
    ],
    image: "/images/projects/Arima_proj.png",
    github: "https://github.com/mohi-m/E-Cigarette_Regulations_Analysis",
    tags: ["R", "Time-Series Analysis", "ARIMA", "Logistic Regression", "ggplot2"],
  },
  {
    title: "🤟 SignBridge: Speech-to-ISL/ASL Gesture Conversion",
    description: [
      "Created a real-time speech-to-sign language converter that translates spoken English into ISL and ASL gestures using a user-friendly interface.",
      "Implemented fallback logic to display alphabet images for unrecognized words, ensuring robust and inclusive communication support.",
    ],
    image: "/images/projects/SignBridge_proj.png",
    github: "https://github.com/mohi-m/SignBridge",
    tags: ["Python", "Tkinter", "Speech Recognition", "Gesture Recognition", "Accessibility"],
  },
];

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold text-center text-light mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.2, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                opacity: { duration: 0.5 },
                x: { duration: 0.2 },
                ease: "easeIn",
              }}
              className="group relative bg-dark-300/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-500"
            >
              <div className="grid md:grid-cols-[400px_1fr] gap-4 p-4">
                {/* Image Section */}
                <motion.div
                  className="relative h-32 w-full md:h-[275px] rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage({ url: project.image, title: project.title })}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
                </motion.div>

                {/* Content Section */}
                <div className="flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-light mb-3 group-hover:text-secondary-400 transition-colors">
                      {project.title}
                    </h3>
                    <ul className="list-disc text-primary-200 mb-4 pl-5 space-y-1.5 text-sm">
                      {project.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary-600/20 text-secondary-300 rounded-full text-sm font-medium border border-secondary-500/30 hover:bg-secondary-600/30 transition-colors"
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
                      className="flex items-center gap-2 px-4 py-1.5 bg-secondary-600 text-light rounded-lg hover:bg-secondary-700 transition-colors text-sm"
                    >
                      <Github size={18} />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            isOpen={true}
            image={selectedImage.url}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
