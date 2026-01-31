import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    company: "Tech Company",
    role: "Software Engineering Intern",
    period: "Summer 2024",
    location: "San Francisco, CA",
    description: [
      "Developed and shipped features for a product used by millions of users",
      "Implemented performance optimizations that reduced load times by 40%",
      "Collaborated with cross-functional teams on a major product launch",
      "Technologies: React, TypeScript, GraphQL, Kubernetes",
    ],
  },
  {
    company: "Research Lab",
    role: "Graduate Research Assistant",
    period: "2023 - Present",
    location: "University",
    description: [
      "Conducting research on efficient machine learning models for edge devices",
      "Published 3 papers in top-tier venues (ICML, ACL, NeurIPS)",
      "Mentored undergraduate students on research methodology",
      "Technologies: PyTorch, CUDA, Distributed Computing",
    ],
  },
  {
    company: "Startup",
    role: "Full Stack Developer",
    period: "2022 - 2023",
    location: "Remote",
    description: [
      "Built core features for an AI-powered SaaS platform from scratch",
      "Designed and implemented RESTful APIs serving 100K+ daily requests",
      "Set up CI/CD pipelines and infrastructure on AWS",
      "Technologies: Node.js, PostgreSQL, Redis, Docker, AWS",
    ],
  },
  {
    company: "Open Source",
    role: "Core Contributor",
    period: "2021 - Present",
    location: "GitHub",
    description: [
      "Active contributor to major open source projects in the ML ecosystem",
      "Maintainer of a popular developer tool with 5K+ GitHub stars",
      "Organized community events and mentored new contributors",
      "Technologies: Python, Rust, TypeScript",
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
