import { motion } from "framer-motion";
import { FileText, ExternalLink, BookOpen } from "lucide-react";

const publications = [
  {
    title: "Efficient Transformer Architectures for Edge Deployment",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2024",
    authors: ["Your Name", "Co-Author One", "Co-Author Two"],
    abstract:
      "We present a novel approach to compressing large transformer models for deployment on edge devices while maintaining competitive performance...",
    link: "#",
    type: "Conference",
  },
  {
    title: "Self-Supervised Learning for Low-Resource Languages",
    venue: "Annual Meeting of the ACL",
    year: "2023",
    authors: ["Your Name", "Co-Author Three"],
    abstract:
      "This paper introduces a self-supervised learning framework specifically designed for low-resource language understanding...",
    link: "#",
    type: "Conference",
  },
  {
    title: "A Survey on Federated Learning: Challenges and Opportunities",
    venue: "IEEE Transactions on Neural Networks",
    year: "2023",
    authors: ["Your Name", "Co-Author Four", "Co-Author Five"],
    abstract:
      "We provide a comprehensive survey of federated learning techniques, covering privacy-preserving mechanisms, communication efficiency...",
    link: "#",
    type: "Journal",
  },
];

const researchInterests = [
  {
    title: "Machine Learning",
    description: "Deep learning, neural architecture search, and model compression",
  },
  {
    title: "Natural Language Processing",
    description: "Transformers, multilingual models, and semantic understanding",
  },
  {
    title: "Distributed Systems",
    description: "Federated learning, edge computing, and system optimization",
  },
  {
    title: "Software Engineering",
    description: "Code generation, program synthesis, and developer tools",
  },
];

export const Research = () => {
  return (
    <section id="research" className="py-24">
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
            <span className="text-primary font-mono">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Research</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Research interests */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card border border-border rounded-lg p-5 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-mono font-semibold mb-2">{interest.title}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-mono">
              <span className="syntax-comment">{"// "}</span>
              Selected Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.article
                  key={pub.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-card border border-border rounded-lg p-6 card-hover group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary mb-2">
                            {pub.type}
                          </span>
                          <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                            {pub.title}
                          </h4>
                        </div>
                        <a
                          href={pub.link}
                          className="flex-shrink-0 p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="Read paper"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {pub.authors.join(", ")}
                      </p>
                      <p className="text-sm font-mono text-primary mt-1">
                        {pub.venue} • {pub.year}
                      </p>
                      <p className="text-muted-foreground mt-3 text-sm line-clamp-2">
                        {pub.abstract}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
