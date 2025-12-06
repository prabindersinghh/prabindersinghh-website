import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, Shield, Brain, ShoppingBag, FileText, Heart, Sparkles, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Shield,
    title: "TruthShield Pro",
    subtitle: "Multi-Modal AI Forensics Engine",
    description: "Advanced deepfake detection system using ViT for images, Wav2Vec2 for audio, LLaMA for text analysis, and FAISS for vector similarity search.",
    tags: ["ViT", "Wav2Vec2", "LLaMA", "FAISS", "PyTorch"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Brain,
    title: "CyberSentinel",
    subtitle: "Hybrid Agentic IDS",
    description: "Intelligent intrusion detection system achieving <2s MITM detection with UEBA analysis and multi-agent threat response.",
    tags: ["Agentic AI", "UEBA", "Security", "Real-time"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: ShoppingBag,
    title: "Leorit Bulk AI",
    subtitle: "B2B Apparel Automation",
    description: "AI-powered B2B platform for bulk apparel orders with intelligent pricing, inventory management, and 2000+ sales executed.",
    tags: ["AI Automation", "E-commerce", "B2B", "Analytics"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: FileText,
    title: "ProcurenAI",
    subtitle: "Multi-Agent RFP Automation",
    description: "Intelligent RFP processing system with multi-agent architecture for automated proposal analysis and vendor matching.",
    tags: ["Multi-Agent", "NLP", "Automation", "LangChain"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Heart,
    title: "MediFlow Vita",
    subtitle: "Connected Healthcare AI",
    description: "Healthcare platform integrating AI for patient monitoring, predictive diagnostics, and care coordination. Hackathon finalist.",
    tags: ["Healthcare", "ML", "IoT", "Prediction"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Sparkles,
    title: "SkillSpark",
    subtitle: "Career Identity OS",
    description: "Full-stack career development platform with personalized learning paths, skill tracking, and AI-powered recommendations.",
    tags: ["React", "Firebase", "AI", "Full-Stack"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Shirt,
    title: "NEEDLE",
    subtitle: "Gen Z Fashion AI",
    description: "AI-powered fashion personalization platform with virtual try-on prototype for Gen Z consumers.",
    tags: ["Computer Vision", "Personalization", "AR", "Fashion"],
    color: "from-foreground/5 to-foreground/10",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Projects
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured Work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-card border border-border rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className={`w-full h-40 rounded-xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300`}>
                <project.icon className="h-12 w-12 text-foreground/30" />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-card border border-border rounded-3xl p-8 max-w-2xl w-full card-shadow max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 rounded-2xl bg-secondary">
                <selectedProject.icon className="h-8 w-8 text-foreground" />
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="h-6 w-6 text-muted-foreground" />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
            <p className="text-muted-foreground mb-4">{selectedProject.subtitle}</p>
            <p className="text-foreground mb-6">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="hero">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
              <Button variant="hero-outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
