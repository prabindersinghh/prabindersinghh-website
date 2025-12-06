import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "prabindersinghh@gmail.com",
    href: "mailto:prabindersinghh@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Prabinder Singh",
    href: "https://www.linkedin.com/in/prabinder-singh-6856a431a/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/prabindersinghh",
    href: "https://github.com/prabindersinghh",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Contact
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Build Something Amazing
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something innovative.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 card-shadow"
          >
            <div className="grid gap-6 mb-8">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-card">
                      <link.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium text-foreground">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.a>
              ))}
            </div>

            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
