import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    company: "XBTO Trading",
    role: "Software Engineering Intern",
    period: "Jun 2025 - Aug 2025",
    location: "New York, United States",
    description: [
      "Engineered and deployed a real-time performance monitoring system, leveraging Prometheus and Grafana to visualize competitor rankings and individual cryptocurrency scores.",
      "Maintained and debugged a core data pipeline ingesting purchased raw market data as Oracle team member, managing the deployment of distinct processing jobs to ensure data integrity and system reliability.",
      "Conducted data collection and analysis by web scraping competitor and asset performance data, providing key insights to improve external company rankings in cryptocurrency publishing.",
    ],
  },
  {
    company: "Swop Holdings",
    role: "Full Stack Developer",
    period: "Feb 2025 - May 2025",
    location: "Dubai, United Arab Emirates",
    description: [
      "Joined as a preseed-stage team member, contributing directly to mobile app product vision and VC investments.",
      "Migrated core data infrastructure from Firebase to AWS RDS, including database design, data migration, and refactoring backend endpoints.",
      "Managed data operations: cleaned and structured product data from onboarding partners and ensured accurate ingestion into the relational database.",
    ],
  },
  {
    company: "Liwa Capital",
    role: "Software Engineering Intern",
    period: "Apr 2024 - Jul 2024",
    location: "Abu Dhabi, United Arab Emirates",
    description: [
      "Developed an AI-powered software that eliminates the need to check hundreds of emails daily by processing emails, updating schedules, and grouping tasks, significantly enhancing team productivity.",
      "Integrated OpenAI's LLM for email processing for actionable task insights using Python.",
      "Automated secure workflows by incorporating Microsoft Graph API for seamless and secure data handling.",
    ],
  },
  {
    company: "IT BAND",
    role: "Back End Developer",
    period: "Aug 2021 - Oct 2021",
    location: "Daejeon, South Korea",
    description: [
      "Renovated the official website for the Korea Maritime Transportation Safety Authority, optimizing performance and modernizing the user experience (komsa.or.kr).",
      "Focused on optimization and debugging, reducing load times and resolving critical errors in the backend to improve performance and reliability.",
      "Refined backend systems using Java Spring framework, Oracle, HTML, and JavaScript.",
    ],
  },
];

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-300 relative ${
                    activeTab === index
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-0.5 md:w-0.5 bg-primary"
                    />
                  )}
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 min-h-[300px]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold">
                  {experiences[activeTab].role}{" "}
                  <span className="text-primary">@ {experiences[activeTab].company}</span>
                </h3>
                <p className="font-mono text-sm text-muted-foreground mt-1">
                  {experiences[activeTab].period} • {experiences[activeTab].location}
                </p>
                <ul className="mt-6 space-y-4">
                  {experiences[activeTab].description.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
