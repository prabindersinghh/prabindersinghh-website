import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp, Database, BarChart, Users, Megaphone } from "lucide-react";

const experiences = [
  {
    icon: TrendingUp,
    company: "SyntX",
    role: "Product & Growth Strategist",
    period: "2024",
    description: "Led product strategy and growth initiatives for AI-focused startup.",
  },
  {
    icon: Database,
    company: "RemoteStar",
    role: "Automation & Data Intern",
    period: "2024",
    description: "Built automation workflows and data pipelines for remote work solutions.",
  },
  {
    icon: BarChart,
    company: "Metvy",
    role: "BD + Insight Intern",
    period: "2023",
    description: "Drove business development and market insights for networking platform.",
  },
  {
    icon: Megaphone,
    company: "Glyptika",
    role: "Marketing Strategist",
    period: "2023",
    description: "Developed marketing strategies for creative technology company.",
  },
  {
    icon: Briefcase,
    company: "Leorit India",
    role: "B2B Growth + Analytics",
    period: "2023",
    description: "Led B2B growth initiatives and pricing analytics, achieving 2000+ sales.",
  },
  {
    icon: Users,
    company: "Thapar University Clubs",
    role: "Comms + Growth",
    period: "2022-Present",
    description: "Leadership roles in multiple technical and entrepreneurship clubs.",
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Experience
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            My Journey
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-px bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-card border-2 border-foreground flex items-center justify-center">
                <exp.icon className="h-4 w-4 text-foreground" />
              </div>

              <motion.div
                whileHover={{ x: 10 }}
                className="ml-8 bg-card border border-border rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground font-medium mb-2">{exp.role}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
