import { motion } from "framer-motion";
import { Brain, Shield, Database, Rocket, Target, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Brain, text: "AI Engineer" },
  { icon: Shield, text: "Agentic AI Builder" },
  { icon: Database, text: "Data Systems" },
  { icon: Rocket, text: "Startup Mindset" },
  { icon: Target, text: "Product-Focused" },
  { icon: Lightbulb, text: "Research & Innovation" },
];

export const HighlightBar = () => {
  return (
    <section className="py-8 border-y border-border bg-secondary/50 overflow-hidden">
      <div className="flex animate-marquee">
        {[...highlights, ...highlights].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 px-8 whitespace-nowrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <item.icon className="h-5 w-5 text-foreground" />
            <span className="text-sm font-medium text-foreground">{item.text}</span>
            <span className="text-muted-foreground">•</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
