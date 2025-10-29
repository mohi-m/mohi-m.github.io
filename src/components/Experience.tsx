import { motion } from "framer-motion";
import { Briefcase, Car, LucideIcon, School } from "lucide-react";

interface TimelineItem {
  type: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  icon: LucideIcon;
  logo: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const TimelineSection = ({ items }: TimelineSectionProps) => (
  <div className="mb-20">
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
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
                transition={{ duration: 0.8 }}
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark-300 border-2 border-secondary-400 flex items-center justify-center text-secondary-400"
              >
                <exp.icon size={16} />
              </motion.div>
            </div>

            <div className="md:col-span-11 bg-dark-300/30 backdrop-blur-sm rounded-xl p-6 hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/4">
                  <img src={exp.logo} alt={exp.company} className="w-full h-auto object-contain max-h-40" />
                </div>
                <div className="w-full md:w-3/4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-light">{exp.title}</h3>
                      <p className="text-secondary-300 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
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
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export function Experience() {
  const experiences: TimelineItem[] = [
    {
      type: "work",
      title: "Teaching Assistant",
      company: "School of Information Sciences (IS 525: Data Warehousing & BI)",
      location: "Champaign, IL",
      duration: "Aug 2025 - Present",
      description: [
        "Assisted in delivering graduate-level data warehousing course for 100+ students, providing technical support for ETL processes using Apache Airflow and SQL database management",
        "Guided students in big data technologies including Hadoop ecosystems, NoSQL databases, and modern data lake architectures",
      ],
      icon: School,
      logo: "/images/experience/iSchool.png",
    },
    {
      type: "work",
      title: "Research Assistant",
      company: "School of Information Sciences",
      location: "Champaign, IL",
      duration: "May 2025 - Present",
      description: [
        "Co-authored an HCI research paper (under review) titled “Unpacking Parent Concerns and Controls on Children’s Generative AI Tools,” involving large-scale qualitative analysis of over 450 Reddit posts using thematic content analysis and GPT-4o-assisted data filtering; findings inform design principles for family-centered GenAI systems.",
        "Leading ongoing research on LLM alignment and personalization in the context of child-AI interaction, specifically aligning chatbot behavior to mirror parental communication styles and values.",
        "Experimenting with test-time alignment techniques (e.g., sampling based and guided decoding) and automatic prompt engineering pipelines using the latest OpenAI models (GPT-5 and GPT-4o).",
      ],
      icon: School,
      logo: "/images/experience/iSchool.png",
    },
    {
      type: "work",
      title: "Software Engineer - II",
      company: "BlackRock",
      location: "Gurgaon, India",
      duration: "Jan 2024 - Jul 2024",
      description: [
        "Built an observability system with OpenTelemetry, Spark, Snowflake, and Power BI to monitor job performance and improve resource planning.",
        "Designed a Kafka-based event-driven service for generating 100+ portfolio proposals in parallel, enhancing system responsiveness.",
        "Published a blog on Spark optimizations that gained 1,500+ views and recognition in the data engineering community.",
      ],
      icon: Briefcase,
      logo: "/images/experience/blackrock_logo.png",
    },
    {
      type: "work",
      title: "Software Engineer - I",
      company: "BlackRock",
      location: "Gurgaon, India",
      duration: "Jul 2021 - Dec 2023",
      description: [
        "Optimized Spark jobs to analyze 180M+ securities in under an hour, cutting memory usage by 40%.",
        "Revamped Cassandra schema and TTL design, reducing frontend latency by 75% with zero-downtime migration.",
        "Automated Scala code formatting and CI checks, improving code quality and reducing review time by 33%.",
      ],
      icon: Briefcase,
      logo: "/images/experience/blackrock_logo.png",
    },
    {
      type: "work",
      title: "Software Engineer Intern",
      company: "BlackRock",
      location: "Gurgaon, India",
      duration: "Jan 2021 - Jun 2021",
      description: [
        "Built and integrated a factor-based attribution analysis tool into the Risk analytics platform, expanding insights for portfolio managers.",
        "Contributed to the cloud migration of client workloads to Microsoft Azure, streamlining deployment and improving scalability.",
      ],
      icon: Briefcase,
      logo: "/images/experience/blackrock_logo.png",
    },
    {
      type: "work",
      title: "Vehicle Dynamics & Data Acquisition Engineer",
      company: "Formula Manipal Electric",
      location: "Manipal, India",
      duration: "Oct 2017 - Dec 2020",
      description: [
        "Integrated advanced sensors into the racecar's data logger to improve driver feedback and validate performance models.",
        "Analyzed telemetry data in MATLAB to uncover parameter correlations and optimize electric vehicle dynamics.",
      ],
      icon: Car,
      logo: "/images/experience/FM_logo.jpg",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-light mb-12"
        >
          Experiences
        </motion.h2>

        <TimelineSection items={experiences} />
      </div>
    </section>
  );
}
