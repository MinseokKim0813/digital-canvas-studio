import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const featuredProjects = [
  {
    title: "Brainlot",
    subtitle: "Infinite Scroll Learning Platform",
    tech: ["Backend", "Mobile App", "Typescript", "Database"],
    highlights: [
      "Co-founded and launched an iOS application with over 300 downloads, featuring an infinite vertical scrolling interface that automatically transforms user-uploaded documents into a continuous stream of interactive, gamified multiple choice quizzes.",
      "Engineered the endless quizz generation pipeline in the background to support continuous scrolling, alongside a flexible inference architecture that allows users to toggle between cloud-based and offline local LLMs.",
      "Selected for the university startup incubator to accelerate product growth with professional guidance, validating the platform's potential and uniqueness in the market.",
    ],
    github: undefined,
    external: "https://apps.apple.com/kr/app/brainlot/id6754814263?l=en-GB",
    image: "gradient-1",
    imageSrc: "brainlot-preview.png",
  },
  {
    title: "Foodify",
    subtitle: "Social Platform for Trending Restaurants",
    tech: [
      "Backend",
      "Web App",
      "JavaScript (React)",
      "Python",
      "Web Scraping",
      "Database",
    ],
    highlights: [
      "Built a social platform where users can swipe to discover trending restaurants, like and share lists, and explore popular recommendations.",
      "Made it easy for users to connect over shared taste while helping small businesses get discovered through social media-like experience.",
      "Built the frontend with React, scraped data from Yelp and Google Maps, and managed the data using Firebase.",
    ],
    github: undefined,
    external: "https://foodify.cc",
    image: "gradient-2",
    imageSrc: "foodify-preview.png",
  },
  {
    title: "SenseFit",
    subtitle: "Automatic Cursor Sensitivity Adjust Tool",
    tech: ["Software Engineering", "Python", "PyQt5", "pytest"],
    highlights: [
      "Developed a desktop application that tracks real-time cursor data and analyzes movement patterns to calculate and suggest optimal mouse sensitivity (DPI) for users.",
      "Engineered complex analysis algorithms to identify and quantify suboptimal behaviors, including complex cursor movement patterns to generate data-driven recommendations.",
      "Ensured high reliability by achieving over 90% unit and system test coverage using pytest.",
    ],
    github: "https://github.com/MinseokKim0813/Sense_Fit",
    external: "https://github.com/MinseokKim0813/Sense_Fit",
    image: "gradient-3",
    imageSrc: "sensefit-preview.png",
  },
  {
    title: "DeepGenre",
    subtitle: "Deep Learning Model for Movie Genre Classifier",
    tech: ["Machine Learning", "Computer Vision", "Pytorch", "Python"],
    highlights: [
      "Developed a multi-label CNN model to predict movie genres across 28 distinct classes based on the movie poster.",
      "Achieved 59.98% precision, outperforming by 16.8 times against the random baseline precision of 3.5% and confirming robust transfer learning capabilities in complex visual recognition tasks.",
      "Eliminated predictive bias prevalent in other models stemming from movie titles by utilizing OCR and in-painting to remove text, ensuring classification relied solely on visual artwork rather than linguistic clues.",
    ],
    github: "https://github.com/MinseokKim0813/DeepGenre",
    external: "https://github.com/MinseokKim0813/DeepGenre",
    image: "gradient-4",
    imageSrc: "deepgenre-preview.png",
  },
  {
    title: "GenderAr",
    subtitle: "Arabic Name Gender Classification (Research report)",
    tech: ["Machine Learning", "NLP", "Transformers", "Python"],
    highlights: [
      "Developed a novel hybrid gender classifier for Arabic names by combining two custom-trained models: a morphological analyzer leveraging specific linguistic rules and a fine-tuned Transformer for deep learning inference.",
      "Achieved 91.68% accuracy, outperforming the baseline by successfully integrating linguistic rules with deep learning inference.",
      "Implemented and evaluated three distinct classification methodologies: Morphological Analyzer Model (Logistic Regression), Semantic Analyzer Model (Word Embeddings), Deep Learning Model (Fine-tuning Transformer), and a Hybrid Cascade system.",
    ],
    github: "https://github.com/MinseokKim0813/GenderAr",
    external: "https://drive.google.com/file/d/12Fqo6CqU5zPI6X3DGB6CRB2hLpGwGlxB/view",
    image: "gradient-5",
    imageSrc: "genderar-preview.png",
  },
  {
    title: "MathTextor",
    subtitle: "Humanizing Mathematical Typesetting (Research report)",
    tech: ["Full Stack", "Web App", "Human-Computer Interaction", "Javascript"],
    highlights: [
      "Developed a context-aware web interface with LLMs that dynamically predicts and suggests mathematical symbols based on problem context, eliminating the need for LaTeX memorization.",
      "Conducted a user study with 24 participants, demonstrating that the system reduced typesetting time by 38.6% for novice users compared to standard LaTeX editors.",
      "Optimized user experience by building an LLM inference pipeline with 72.9% F1 score, yielding a 4.57/7 usability score through the application of HCI design principles.",
    ],
    github: "https://github.com/MinseokKim0813/MathTextor",
    external: "https://drive.google.com/file/d/1sMfhqQK3Pa2jVjlNYSmCbQ5T4j-dNu1X/view?usp=sharing",
    image: "gradient-6",
    imageSrc: "mathtextor-preview.png",
  },
  {
    title: "TrendMap",
    subtitle: "Real-Time Media Attention Analyzer",
    tech: ["Data Analysis", "Web Scraping", "Python"],
    highlights: [
      "Built a tool that tracks media mentions of top American companies, analyzing trends across industries and states.",
      "It identifies sectors and regions receiving the most attention, offering insights for informed investment decisions and market analysis.",
    ],
    github: "https://github.com/MinseokKim0813/TrendMap",
    external: "https://github.com/MinseokKim0813/TrendMap",
    image: "gradient-7",
  },
  {
    title: "FundMonitor",
    subtitle: "Crowdfunding Campaign Data Scraper & Analyzer",
    tech: ["Data Analysis", "Web Scraping", "Python"],
    highlights: [
      "Developed a web scraper tool to extract and analyze real-time data from crowdfunding platforms, providing insights into funding progress across various categories and regions.",
      "Identified global funding trends and underfunded sectors to facilitate optimized corporate social responsibility strategies, targeted investments, and product innovation opportunities.",
    ],
    github: "https://github.com/MinseokKim0813/FundMonitor",
    external: "https://github.com/MinseokKim0813/FundMonitor",
    image: "gradient-8",
    imageSrc: "fundmonitor-preview.png",
  },
];

const gradientClasses: Record<string, string> = {
  "gradient-1": "from-primary/20 to-accent/20",
  "gradient-2": "from-syntax-keyword/20 to-primary/20",
  "gradient-3": "from-accent/20 to-syntax-string/20",
  "gradient-4": "from-primary/20 to-accent/20",
  "gradient-5": "from-syntax-keyword/20 to-primary/20",
  "gradient-6": "from-accent/20 to-syntax-string/20",
  "gradient-7": "from-primary/20 to-accent/20",
  "gradient-8": "from-syntax-keyword/20 to-primary/20",
};

export const Projects = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

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
                className="relative grid md:grid-cols-12 gap-4 items-start"
              >
                <div
                  className={`flex flex-col gap-6 ${
                    index % 2 === 0 ? "md:col-span-7" : "md:col-span-7 md:col-start-6"
                  }`}
                >
                {/* Project image/gradient */}
                <div className="w-full">
                  <div
                    className={`aspect-video rounded-lg border border-border overflow-hidden relative group ${
                      project.imageSrc && !imageErrors[project.title]
                        ? "bg-muted"
                        : `bg-gradient-to-br ${gradientClasses[project.image]}`
                    }`}
                  >
                    {project.imageSrc && !imageErrors[project.title] ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${project.imageSrc}`}
                        alt={`${project.title} preview`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [project.title]: true,
                          }))
                        }
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-grid opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-mono text-4xl text-foreground/20">
                            {"{...}"}
                          </span>
                        </div>
                      </>
                    )}
{(project.github?.trim() || project.external?.trim()) && (
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                      {project.github?.trim() && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                      {project.external?.trim() &&
                        project.external !== project.github && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="External Link"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <div className="w-full">
                  <p className="text-primary font-mono text-sm mb-2">
                    Featured Project
                  </p>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold hover:text-primary transition-colors">
                      {project.external?.trim() || project.github?.trim() ? (
                        <a
                          href={
                            project.external?.trim() || project.github?.trim()
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm text-muted-foreground mt-1 font-mono break-all">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 mb-4 shadow-lg">
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                      {project.highlights.map((point, i) => (
                        <li key={i} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="flex flex-wrap gap-3 font-mono text-sm text-muted-foreground">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
