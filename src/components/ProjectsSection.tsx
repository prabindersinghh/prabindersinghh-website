import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, Shield, Brain, FileText, Heart, Sparkles, Activity, Building2, FlaskConical, Boxes, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Boxes,
    title: "Kubeflow OTel PoC",
    subtitle: "OpenTelemetry SDK Instrumentation",
    description: "Working PoC with centralized telemetry.py, per-iteration child spans, and verified OTel JSON output. Pre-work for GSoC 2026 Project #7 with the CNCF Kubeflow community.",
    tags: ["OpenTelemetry", "Kubeflow", "CNCF", "Python", "Observability"],
    github: "https://github.com/prabindersinghh/kubeflow-otel-poc",
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Lock,
    title: "opensec-intelligence",
    subtitle: "Agentic Security Analysis Pipeline",
    description: "Published npm package v3.0.1 in TypeScript. Four-agent sequential pipeline — Scanner → Analyst → Consensus → Fixer — running locally via Ollama with optional cloud hybrid mode.",
    tags: ["Agentic AI", "TypeScript", "Ollama", "Security", "npm"],
    github: "https://github.com/prabindersinghh/opensec-intelligence",
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Shield,
    title: "TruthShield Pro",
    subtitle: "Multi-Modal AI Forensics Engine",
    description: "ViT visual forensics, Wav2Vec2 + ECAPA-TDNN voice clone detection, LLaMA3 text forensics, and diffusion artifact fingerprinting. Cross-Modal Consistency Engine + FAISS provenance graphs with explainability.",
    tags: ["ViT", "Wav2Vec2", "LLaMA3", "FAISS", "Multi-Modal"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Brain,
    title: "CyberSentinel",
    subtitle: "Hybrid Agentic Intrusion Detection",
    description: "Hybrid IDS combining rules + ML anomaly detection (92%+ accuracy), NLP phishing engine, and UEBA drift analysis. Raspberry Pi edge gateway with sub-2s IoT/Wi-Fi threat blocking.",
    tags: ["Agentic AI", "UEBA", "Edge ML", "IDS"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Lock,
    title: "QuantumSight",
    subtitle: "AI-Augmented Cryptographic Intelligence",
    description: "HNDL quantum threat defense: CBOM generation, 0–1000 Cyber Rating, Gemini 2.5 Flash AI migration plans. FastAPI + React 18 + Docker. Live jury VC session at PNB Cybersecurity Hackathon.",
    tags: ["FastAPI", "Gemini 2.5", "PQC", "Docker"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Building2,
    title: "CIVITAS-INTEL",
    subtitle: "Urban Decision Intelligence Engine",
    description: "Distributed multi-agent platform for AI-driven city management. 3rd Place + Innovation Award at AI for Sustainability Hackathon, Canadian University Dubai.",
    tags: ["Multi-Agent", "Urban AI", "Distributed Systems"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: FlaskConical,
    title: "RAG-ST",
    subtitle: "Retrieval-Augmented DL for Spatial Transcriptomics",
    description: "9-stage pipeline: EfficientNet + FAISS patch retrieval + MLP gene expression prediction with PCA / t-SNE / UMAP interpretability. Paper under review at IEEE ICAIB 2025.",
    tags: ["RAG", "EfficientNet", "FAISS", "Bioinformatics", "Research"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Activity,
    title: "Leorit Manufacturer OS",
    subtitle: "SaaS Order Management for Garment Manufacturers",
    description: "Full-stack platform on React 18 + TypeScript + Vite + shadcn/ui + Supabase with a Three.js 3D mockup engine, 32 DB migrations, 10-stage production tracking, multi-role system across 4 order types.",
    tags: ["React 18", "Supabase", "Three.js", "SaaS"],
    live: "https://leorit.xyz",
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: FileText,
    title: "ProcurenAI",
    subtitle: "Multi-Agent RFP Automation",
    description: "Multi-agent RFP processing platform for automated proposal analysis and vendor matching. Finalist at Vibestate / ByteWars 2025, Derby UK.",
    tags: ["Multi-Agent", "NLP", "LangChain", "Automation"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Heart,
    title: "MediFlow Vita",
    subtitle: "Connected Healthcare AI",
    description: "Healthcare platform integrating AI for patient monitoring, predictive diagnostics, and care coordination. Finalist at Indo–Israel International Hackathon 2025.",
    tags: ["Healthcare", "ML", "IoT", "Prediction"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    icon: Sparkles,
    title: "FairHire360",
    subtitle: "Bias-Aware Hiring Intelligence",
    description: "AI-driven hiring intelligence platform addressing bias and fairness in recruitment workflows. Finalist at Sabka AI 2026, TIET-UQ.",
    tags: ["Fairness", "ML", "HR Tech"],
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
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
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
                aria-label="Close"
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
            {(selectedProject.github || selectedProject.live) && (
              <div className="flex flex-wrap gap-4">
                {selectedProject.github && (
                  <Button variant="hero" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject.live && (
                  <Button variant="hero-outline" asChild>
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
