import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">PRABINDER SINGH</h3>
            <p className="text-background/70 text-sm">
              AI Engineer • Building the future, one model at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/prabindersinghh" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/prabinder-singh-6856a431a/" },
              { icon: Mail, href: "mailto:prabindersinghh@gmail.com" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-background/20 text-background/70 hover:text-background hover:border-background transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-background/20 text-background/70 hover:text-background hover:border-background transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Prabinder Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
