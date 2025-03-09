import { Github } from "lucide-react";

const projects = [
  {
    title: "E-Cigarette Policy Analysis",
    description:
      "Developed predictive models using ARIMA and Logistic Regression on 150k+ rows of e-cigarette legislation data in R, achieving 8% MAPE in forecasting policy stringency trends and 80% classification accuracy in identifying high-risk regions for policy violations. Visualized actionable insights with ggplot2 to support public health improvements.",
    image: "/images/Arima_proj.png",
    github: "https://github.com/mohi-m/E-Cigarette_Regulations_Analysis",
    tags: ["R", "Time-Series Analysis", "ARIMA", "Logistic Regression"],
  },
  {
    title: "Energy and Emissions Analysis",
    description:
      "Processed and analyzed the Economist Intelligence Unit's Energy dataset (2000–2024) using Tableau Prep, enabling structured insights into emissions and energy consumption. Designed interactive Tableau dashboards to compare renewable and non-renewable energy adoption, showcasing energy transitions across major economies.",
    image: "/images/tableau_proj.png",
    github: "https://github.com/mohi-m",
    tags: ["Tableau", "Tableau Prep", "ETL"],
  },
  {
    title: "SignBridge: Speech-to-ISL/ASL Gesture Conversion",
    description:
      "Developed a real-time speech-to-sign language converter that translates spoken language into ISL and ASL gestures using an intuitive interface, with fallback mechanisms to display alphabet images for unrecognized words.",
    image: "/images/SignBridge_proj.png",
    github: "https://github.com/mohi-m/SignBridge",
    tags: ["Python", "Tkinter", "speech-recognition"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
