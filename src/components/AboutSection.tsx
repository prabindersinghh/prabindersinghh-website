import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Layers, Sparkles } from "lucide-react";

const skills = [
  "Python", "TypeScript", "React", "Node.js", "TensorFlow", "PyTorch",
  "LangChain", "RAG Systems", "Vector Databases", "FAISS", "Pinecone",
  "GPT-4", "Claude", "LLaMA", "Computer Vision", "NLP", "Firebase",
  "Supabase", "PostgreSQL", "Docker", "AWS", "GCP"
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
            I blend AI engineering, data systems, and product execution to build impactful solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With experience spanning startups and technical leadership, I specialize in creating 
            multi-modal AI systems, agentic intelligence, and full-stack products. My approach 
            combines deep technical expertise with a strong product mindset, ensuring every 
            solution delivers real-world value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Background Card */}
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
                { icon: Sparkles, text: "Engineering student with a passion for AI/ML" },
                { icon: Code2, text: "Built production AI systems handling real users" },
                { icon: Cpu, text: "Experience with startups from 0→1 product launches" },
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

          {/* Skills Card */}
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
