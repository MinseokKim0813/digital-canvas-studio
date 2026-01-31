import { motion } from "framer-motion";
import { Code2, Database, Brain, Terminal } from "lucide-react";

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Java", "C++", "Rust"],
    icon: Code2,
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "Django", "TensorFlow", "PyTorch"],
    icon: Terminal,
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    icon: Database,
  },
  {
    category: "AI/ML",
    items: ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"],
    icon: Brain,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
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
            <span className="text-primary font-mono">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="font-mono text-sm mb-4">
                  <span className="syntax-comment">{"/* Bio */"}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a Computer Science student and researcher passionate about pushing the boundaries 
                  of what's possible with technology. My journey began with a curiosity for how things 
                  work and has evolved into a deep commitment to creating impactful software solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently, I'm focused on machine learning research and full-stack development, 
                  working on projects that bridge the gap between cutting-edge research and practical applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me contributing to open-source projects, 
                  reading research papers, or exploring new technologies.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years Coding</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-accent">20+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-syntax-string">10+</p>
                  <p className="text-sm text-muted-foreground">Publications</p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-card border border-border rounded-lg p-4 card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <skillGroup.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-mono font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
