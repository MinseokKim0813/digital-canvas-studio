import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Neural Network Visualizer",
    description:
      "An interactive web application that visualizes neural network architectures and training processes in real-time. Built with React and TensorFlow.js for browser-based machine learning.",
    tech: ["React", "TensorFlow.js", "D3.js", "TypeScript"],
    github: "#",
    external: "#",
    image: "gradient-1",
  },
  {
    title: "Distributed Systems Framework",
    description:
      "A lightweight framework for building distributed applications with built-in consensus algorithms, fault tolerance, and horizontal scaling capabilities.",
    tech: ["Rust", "gRPC", "Raft", "Docker"],
    github: "#",
    external: "#",
    image: "gradient-2",
  },
  {
    title: "NLP Research Toolkit",
    description:
      "A comprehensive toolkit for natural language processing research, featuring pre-trained models, data preprocessing pipelines, and evaluation metrics.",
    tech: ["Python", "PyTorch", "Transformers", "FastAPI"],
    github: "#",
    external: "#",
    image: "gradient-3",
  },
];

const otherProjects = [
  {
    title: "Code Review Bot",
    description: "An AI-powered GitHub bot that provides intelligent code review suggestions and catches potential bugs.",
    tech: ["Python", "GPT-4", "GitHub API"],
    github: "#",
  },
  {
    title: "Real-time Collaboration",
    description: "A collaborative code editor with real-time synchronization using CRDTs and WebSockets.",
    tech: ["TypeScript", "Y.js", "WebSocket"],
    github: "#",
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive visualizations for common algorithms and data structures for educational purposes.",
    tech: ["React", "Canvas API", "Framer Motion"],
    github: "#",
    external: "#",
  },
  {
    title: "Dev Portfolio CLI",
    description: "A command-line tool to generate and deploy developer portfolios from a simple config file.",
    tech: ["Node.js", "Ink", "Vercel API"],
    github: "#",
  },
  {
    title: "Smart Home Hub",
    description: "IoT dashboard for managing smart home devices with voice control and automation rules.",
    tech: ["React", "MQTT", "Node.js"],
    github: "#",
    external: "#",
  },
  {
    title: "Research Paper Summarizer",
    description: "ML-powered tool that generates concise summaries of academic research papers.",
    tech: ["Python", "BERT", "Streamlit"],
    github: "#",
  },
];

const gradientClasses: Record<string, string> = {
  "gradient-1": "from-primary/20 to-accent/20",
  "gradient-2": "from-syntax-keyword/20 to-primary/20",
  "gradient-3": "from-accent/20 to-syntax-string/20",
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project image/gradient */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div
                    className={`aspect-video rounded-lg bg-gradient-to-br ${
                      gradientClasses[project.image]
                    } border border-border overflow-hidden relative group`}
                  >
                    <div className="absolute inset-0 bg-grid opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-4xl text-foreground/20">
                        {"{...}"}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                      <a
                        href={project.github}
                        className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={project.external}
                        className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div
                  className={`md:col-span-6 ${
                    index % 2 === 1
                      ? "md:order-1 md:col-start-1"
                      : "md:col-start-6"
                  } md:row-start-1`}
                >
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    <a href={project.external}>{project.title}</a>
                  </h3>
                  <div className="bg-card border border-border rounded-lg p-6 mb-4 shadow-lg">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="bg-card border border-border rounded-lg p-6 card-hover group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="w-10 h-10 text-primary" />
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="External Link"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
