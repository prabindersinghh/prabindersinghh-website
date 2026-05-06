import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp, Database, BarChart, Users, Megaphone, Rocket } from "lucide-react";

const experiences = [
  {
    icon: Rocket,
    company: "Leorit.ai",
    role: "Founder & CEO",
    period: "May 2025 – Present",
    description: "Architected Leorit Manufacturer OS — SaaS order management for garment manufacturers in Ludhiana, Tirupur & Ahmedabad. Built on React 18 + TypeScript + Vite + shadcn/ui + Supabase with a Three.js 3D mockup engine, 32 DB migrations, 10-stage production tracking, and a multi-role system across Buyer/Manufacturer/Admin.",
  },
  {
    icon: TrendingUp,
    company: "SyntX by OrangeCat",
    role: "Product & Growth Strategist (Part-Time)",
    period: "Sep – Oct 2025",
    description: "Built automated tracking systems with Google Sheets + n8n for conversion optimization. Aligned user behavior data with feature development.",
  },
  {
    icon: Database,
    company: "RemoteStar",
    role: "Business Development & Data Systems Intern",
    period: "Jul – Sep 2025",
    description: "Built automation workflows enabling one-click prospect calling — reduced manual work by 70%. Analyzed engagement data for high-conversion patterns.",
  },
  {
    icon: BarChart,
    company: "Metvy Pvt Ltd",
    role: "Business Development Intern",
    period: "Jun – Jul 2025",
    description: "Led a team of 3 for targeted outreach. Built data insight models to improve lead quality and client engagement.",
  },
  {
    icon: Megaphone,
    company: "Glyptika Studios LLP",
    role: "Marketing Executive",
    period: "Jan – Apr 2025",
    description: "Designed branding strategies, ran market research, and applied insights to product positioning and campaigns.",
  },
  {
    icon: Users,
    company: "Thapar University Clubs",
    role: "Marketing & Communication Specialist",
    period: "2024 – Present",
    description: "Led PR, outreach, and communications for TEDx, Virsa, and SAR. Supported event planning with data-backed decisions.",
  },
  {
    icon: Briefcase,
    company: "CollabSphere",
    role: "Founder",
    period: "2024",
    description: "Built a 72-member ecosystem; ₹90,000 in projects secured in week one.",
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
              {index !== experiences.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-px bg-border" />
              )}

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
