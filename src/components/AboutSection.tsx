import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Layers, Sparkles } from "lucide-react";

const skills = [
  "Python", "PyTorch", "HuggingFace", "Vision Transformers", "Wav2Vec2",
  "LLMs", "RAG", "Agentic AI", "FAISS", "LangChain", "Multi-Modal Learning",
  "FastAPI", "Microservices", "Kubernetes", "Docker", "OpenTelemetry",
  "CNCF Ecosystem", "MLflow", "Kubeflow", "Metaflow",
  "TypeScript", "React 18", "Vite", "shadcn/ui", "Three.js",
  "Supabase", "PostgreSQL", "AWS", "GCP", "SQL",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            About Me
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            AI Engineer building multi-modal systems, agentic pipelines, and production ML platforms.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            B.Tech CSE (Business Systems) at Thapar Institute. Founder of Leorit.ai — an order management OS for garment manufacturers across India. Merged contributor to the CNCF Kubeflow SDK, with active PRs on Headlamp (kubernetes-sigs), MLflow, Metaflow, and OpenMined Syft. I ship research-grade pipelines and scalable AI products end-to-end.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-secondary">
                <Layers className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">My Background</h3>
            </div>
            <ul className="space-y-4">
              {[
                { icon: Sparkles, text: "B.Tech CSE (Business Systems), Thapar Institute · 94.2 percentile JEE Mains" },
                { icon: Code2, text: "Founder & CEO at Leorit.ai — SaaS OS for garment manufacturers" },
                { icon: Cpu, text: "Merged PR in CNCF Kubeflow SDK; active OSS across MLflow, Metaflow, Headlamp" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <item.icon className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-secondary">
                <Code2 className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Skills & Tooling</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.02 }}
                  className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
