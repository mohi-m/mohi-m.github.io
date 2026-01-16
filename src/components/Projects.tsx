import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          className="text-6xl font-bold text-center text-light mb-12"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
            <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView="auto"
            navigation
            pagination={{ clickable: true }}
            loop={false}
            className="!pb-16 group"
            >
            {projects.map((project, index) => (
              <SwiperSlide key={index} style={{ width: "auto", maxWidth: "400px" }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-gradient-to-br from-dark-300/40 to-dark-300/20 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-secondary-500/25 transition-all duration-500 border border-secondary-500/10"
                >
                  <div className="grid md:grid-rows-[1fr_1fr] gap-6 p-2 md:p-4 max-h-[400px] md:max-h-[600px]">
                    {/* Image Section */}
                    <motion.div
                      className="relative h-48 md:h-64 overflow-hidden cursor-pointer group/image"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                      onClick={() => setSelectedImage({ url: project.image, title: project.title })}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-fill rounded-xl group-hover/image:brightness-110 transition-all duration-500"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-light text-sm font-medium px-4 py-2 bg-black/50 rounded-lg backdrop-blur">
                          Click to expand
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-between space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <h3 className="text-xl md:text-2xl font-bold flex items-center justify-center text-light mb-4 group-hover:text-secondary-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        {/* ToDo: Add this in a modal window */}
                        {/* <ul className="list-disc text-primary-200 mb-4 pl-5 space-y-2 text-sm md:text-base">
                          {project.description.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul> */}
                      </motion.div>

                      {/* Tags */}
                      <motion.div
                        className="flex flex-wrap justify-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            whileHover={{ scale: 1.05, translateY: -2 }}
                            className="px-3 py-1.5 bg-gradient-to-r from-secondary-600/20 to-secondary-500/10 text-secondary-300 rounded-xl text-xs md:text-sm font-medium border border-secondary-500/30 hover:border-secondary-400/50 hover:bg-secondary-600/30 transition-all duration-300"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Links */}
                      <motion.div
                        className="flex justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <motion.a
                          whileHover={{ scale: 1.08, translateY: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary-600 to-secondary-700 text-light rounded-lg hover:from-secondary-700 hover:to-secondary-800 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-secondary-500/50"
                        >
                          <Github size={18} />
                          View Code
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom styling for navigation and pagination */}
          <style>{`
            .swiper-button-next,
            .swiper-button-prev {
              color: #60a5fa;
              background: rgba(15, 23, 42, 0.7);
              backdrop-filter: blur(20px);
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 1px solid rgba(96, 165, 250, 0.2);
              transition: all 0.3s ease;
              padding: 8px;
            }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background: rgba(15, 23, 42, 0.9);
              border-color: rgba(96, 165, 250, 0.5);
              box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 18px;
              font-weight: bold;
            }

            .swiper-pagination-bullet {
              background: rgba(96, 165, 250, 0.3);
              opacity: 0.6;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              transition: all 0.3s ease;
            }

            .swiper-pagination-bullet-active {
              background: #60a5fa;
              opacity: 1;
              width: 32px;
              border-radius: 5px;
              box-shadow: 0 0 15px rgba(96, 165, 250, 0.5);
            }

            .swiper {
              overflow: visible;
            }
          `}</style>
        </motion.div>
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
