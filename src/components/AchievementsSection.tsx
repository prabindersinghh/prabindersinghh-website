import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, Award, Star, Medal, FileText, Cloud, GraduationCap, Shield } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "3rd Place + Innovation Award",
    subtitle: "AI for Sustainability Hackathon 2026",
    description: "Canadian University Dubai · CIVITAS-INTEL",
  },
  {
    icon: Shield,
    title: "Top 12 National Finalist",
    subtitle: "Secure Bharat: AI & Cybersecurity Summit 2026",
    description: "ISB Mohali · Punjab Police × CyberPeace Foundation",
  },
  {
    icon: Medal,
    title: "3rd Place",
    subtitle: "BIOS Hackathon 2025",
    description: "IEEE × CSED Thapar · TruthShield Pro",
  },
  {
    icon: Trophy,
    title: "3rd Place",
    subtitle: "Agentic AI Hackathon 2025",
    description: "University of Ulster, UK · CyberSentinel",
  },
  {
    icon: Star,
    title: "Finalist",
    subtitle: "PNB Cybersecurity Hackathon 2026",
    description: "Live Jury VC Session · QuantumSight",
  },
  {
    icon: Star,
    title: "Finalist",
    subtitle: "Indo–Israel Intl Hackathon 2025",
    description: "MediFlow Vita",
  },
  {
    icon: FileText,
    title: "Research Paper",
    subtitle: "RAG-ST",
    description: "Under review · IEEE ICAIB 2025",
  },
  {
    icon: Cloud,
    title: "Ambassador",
    subtitle: "Google Gemini Student Ambassador",
    description: "Cloud adoption & dev workshops",
  },
  {
    icon: Award,
    title: "Merged PR",
    subtitle: "CNCF Kubeflow SDK #402",
    description: "polling_interval validation across 3 backends",
  },
  {
    icon: GraduationCap,
    title: "Global Cohort",
    subtitle: "McKinsey Forward Program",
    description: "Leadership & digital transformation",
  },
];

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Achievements
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Recognition & Milestones
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: 8, suffix: "+", label: "Hackathons" },
            { value: 4, suffix: "", label: "Podium / Awards" },
            { value: 5, suffix: "+", label: "OSS Projects" },
            { value: 1, suffix: "", label: "Research Paper" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-2xl card-shadow"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-secondary w-fit mb-4">
                <achievement.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{achievement.title}</h3>
              <p className="text-sm font-medium text-foreground mb-1">{achievement.subtitle}</p>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
