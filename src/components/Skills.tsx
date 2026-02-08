import { motion } from "framer-motion";
import { Database, LineChart, Code, Cloud, Brain, LucideIcon, Wrench } from "lucide-react";

interface Skill {
  category: string;
  items: string[];
  icon: LucideIcon;
}

export function Skills() {
  const skills: Skill[] = [
    {
      category: "Data Technologies",
      items: ["Hadoop", "Spark", "Airflow", "Hive"],
      icon: Database,
    },
    {
      category: "Analytics & Visualization",
      items: ["PowerBI", "Tableau", "Matplotlib"],
      icon: LineChart,
    },
    {
      category: "Programming Languages",
      items: ["Python", "R", "SQL", "Java", "Scala", "JavaScript"],
      icon: Code,
    },
    {
      category: "Cloud Platforms and Databases",
      items: ["Azure", "AWS", "Snowflake", "PostgreSQL", "MongoDB", "Neo4j"],
      icon: Cloud,
    },
    {
      category: "Machine Learning",
      items: ["scikitLearn", "TensorFlow", "PyTorch", "OpenCV", "HuggingFace"],
      icon: Brain,
    },
    {
      category: "Other Tools",
      items: ["Git", "Docker", "Kubernetes"],
      icon: Wrench,
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0.5, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center text-light mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-dark-300/60 backdrop-blur-sm rounded-xl p-6 hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-secondary-500/10">
                  <skill.icon size={24} className="text-secondary-400" />
                </div>
                <h3 className="text-xl font-bold text-light">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-7 items-center">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 relative group">
                    <img
                      src={`/images/skills/${item.toLowerCase().replace(/\s+/g, "-")}.png`}
                      alt={item}
                      className="w-20 h-20 object-contain group-hover:scale-150 transition-transform duration-200"
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-dark-300 text-light text-xs rounded-md px-2 py-1 shadow-lg">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
