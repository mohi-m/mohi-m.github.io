import { motion } from "framer-motion";
import { GraduationCap, LucideIcon } from "lucide-react";

interface TimelineItem {
  type: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  icon: LucideIcon;
}

interface TimelineSectionProps {
  items: TimelineItem[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const TimelineSection = ({ items }: TimelineSectionProps) => (
  <div className="mb-20">
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {items.map((exp, index) => (
        <motion.div key={index} variants={item} className="relative pl-8 md:pl-0">
          <div className="md:grid md:grid-cols-12 md:gap-4">
            <div className="hidden md:block md:col-span-1 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
                <div className="h-full w-0.5 bg-dark-400"></div>
              </div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark-300 border-2 border-secondary-400 flex items-center justify-center text-secondary-400"
              >
                <exp.icon size={16} />
              </motion.div>
            </div>

            <div className="md:col-span-11 bg-dark-300/30 backdrop-blur-sm rounded-xl p-6 hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-light">{exp.title}</h3>
                  <p className="text-secondary-300 font-semibold">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary-200">{exp.location}</p>
                  <p className="text-primary-300">{exp.duration}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-primary-200">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export function Education() {
  const education: TimelineItem[] = [
    {
      type: "education",
      title: "MS in Information Management",
      company: "University of Illinois Urbana-Champaign",
      location: "Illinois, USA",
      duration: "Aug 2023 - Present",
      description: [
        "Specializing in Data Science and Analytics",
        "Relevant Coursework: Data Mining, Statistical Learning, Machine Learning",
        "GPA: 3.9/4.0",
      ],
      icon: GraduationCap,
    },
    {
      type: "education",
      title: "B.Tech in Electronics & Communication",
      company: "Manipal Institute of Technology",
      location: "Manipal, India",
      duration: "Aug 2017 - Jul 2021",
      description: [
        "GPA: 3.56/4.0",
        "Specialization in Signal Processing and Communication",
        "Member of Formula Manipal Racing Team",
      ],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-light mb-12"
        >
          Education
        </motion.h2>

        <TimelineSection items={education} />
      </div>
    </section>
  );
}
