import { motion } from "framer-motion";
import { Database, LineChart, Code, Cloud, Brain, LucideIcon } from "lucide-react";

interface Skill {
  category: string;
  items: string[];
  icon: LucideIcon;
}

export function Skills() {
  const skills: Skill[] = [
    {
      category: "Data Technologies",
      items: ["Hadoop", "Spark", "Snowflake", "Cassandra"],
      icon: Database,
    },
    {
      category: "Analytics & Visualization",
      items: ["Power BI", "Tableau", "Excel", "Statistical Analysis"],
      icon: LineChart,
    },
    {
      category: "Programming Languages",
      items: ["Python", "R", "SQL", "Java", "Scala", "Perl"],
      icon: Code,
    },
    {
      category: "Cloud Platforms",
      items: ["Azure", "AWS", "Cloud Computing", "DataBricks"],
      icon: Cloud,
    },
    {
      category: "Machine Learning",
      items: ["Regression", "Classification", "Time Series Analysis", "Data Mining"],
      icon: Brain,
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
    <section id="skills" className="py-20 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-light mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-dark-300/30 backdrop-blur-sm rounded-xl p-6 hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-secondary-500/10">
                  <skill.icon size={24} className="text-secondary-400" />
                </div>
                <h3 className="text-xl font-bold text-light">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 bg-dark-200/50 text-primary-200 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
