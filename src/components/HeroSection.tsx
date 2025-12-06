import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-background overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse-subtle" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground tracking-tight leading-[0.9] mb-6"
            >
              PRABINDER
              <br />
              <span className="text-gradient">SINGH</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {["AI Engineer", "Data Systems", "Agentic AI", "Product Builder"].map((tag, index) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Building multi-modal AI systems, agentic intelligence, and data-driven products that create real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/prabindersinghh", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/prabinder-singh-6856a431a/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:prabindersinghh@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full border-2 border-border text-muted-foreground hover:text-foreground hover:border-foreground hover:bg-secondary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-secondary border border-border overflow-hidden card-shadow"
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ transform: "rotate(3deg)" }}
              >
                <img 
                  src={profilePhoto} 
                  alt="Prabinder Singh - AI Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-foreground z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 border-foreground bg-background z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
