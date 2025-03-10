const experiences = [
  {
    company: "BlackRock",
    logo: "/images/blackrock_logo.png",
    role: "Associate - Data Engineer - II",
    duration: "Jan 2024 - July 2024",
    description: `Worked in data engineering, cloud computing, and AI-driven analytics, utilizing Snowflake, 
        Power BI, Apache Kafka, Cassandra, IBM CPLEX, and big data optimization techniques.`,
  },
  {
    company: "BlackRock",
    logo: "/images/blackrock_logo.png",
    role: "Analyst - Data Engineer - I",
    duration: "Jun 2021 - Dec 2023",
    description: `Focused on large-scale data processing, risk analytics, and data pipeline optimization 
      using Spark, Scala, Hadoop, Azure Cloud, Cassandra, Solr, and scripting languages like Perl.`,
  },
  {
    company: "BlackRock",
    logo: "/images/blackrock_logo.png",
    role: "Intern - Software Engineer",
    duration: "Jan 2021 - Jun 2021",
    description: `Gained experience in financial analytics, cloud migration, and data integration,
       working with Microsoft Azure and risk modeling tools.`,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow w-full"
            >
              <div className="p-6 text-left">
                <img src={exp.logo} alt={exp.company} className="w-32 h-10 object-contain mb-4" />
                <h4 className="text-lg text-gray-700 mb-2">{exp.role}</h4>
                <p className="text-gray-600 mb-4">{exp.duration}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
