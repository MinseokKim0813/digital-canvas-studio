import { motion } from "framer-motion";
import { FileText, ExternalLink, BookOpen, FlaskConical } from "lucide-react";

const currentResearchActivity = {
  role: "Research Assistant",
  lab: "eBRAIN Lab",
  institution: "NYU Abu Dhabi",
  topic: "LLM Jailbreaks for Security",
};

export const publications = [
  {
    title:
      "Gender Identification of Arabic Names: A Comparative Analysis of Morphological, Semantic and Deep Learning Approaches",
    venue: "Research Paper",
    year: "—",
    authors: ["Minseok Kim"],
    abstract:
      "A novel hybrid gender classifier for Arabic names combining a morphological analyzer with linguistic rules and a fine-tuned Transformer, achieving 91.68% accuracy and outperforming the baseline by integrating linguistic rules with deep learning inference.",
    link: "https://drive.google.com/file/d/12Fqo6CqU5zPI6X3DGB6CRB2hLpGwGlxB/view?usp=sharing",
    type: "Research Paper",
  },
  {
    title: "MathTextor: Humanizing Mathematical Typesetting for Undergraduate Students",
    venue: "Research Paper",
    year: "—",
    authors: ["Minseok Kim"],
    advisors:
      "Advised by: Moumena Chaqfeh (moumena@nyu.edu), Steven Euijong Whang (swhang@kaist.ac.kr)",
    abstract:
      "A context-aware web interface with LLMs that dynamically predicts and suggests mathematical symbols based on problem context. A user study with 24 participants showed a 38.6% reduction in typesetting time for novice users; the system achieved 72.9% F1 score and 4.57/7 usability.",
    link: "https://drive.google.com/file/d/1sMfhqQK3Pa2jVjlNYSmCbQ5T4j-dNu1X/view?usp=sharing",
    type: "Research Paper",
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
    title: "Human Computer Interaction",
    description: "User-centered design, usability evaluation, and interactive systems",
  },
  {
    title: "LLM Security",
    description: "Prompt injection, model robustness, and safe deployment of language models",
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
              Research
            </h3>
            <div className="space-y-6">
              {/* eBRAIN Lab — first under // Research */}
              <motion.article
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-card border border-border rounded-lg p-6 card-hover flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary mb-2">
                    Current
                  </span>
                  <h4 className="text-lg font-bold text-primary">
                    {currentResearchActivity.lab}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {currentResearchActivity.role} at {currentResearchActivity.institution}
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    &ldquo;{currentResearchActivity.topic}&rdquo;
                  </p>
                </div>
              </motion.article>
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
                      {"advisors" in pub && pub.advisors && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {pub.advisors}
                        </p>
                      )}
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
