import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HighlightBar } from "@/components/HighlightBar";
import { AboutSection } from "@/components/AboutSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prabinder Singh | AI Engineer & Product Builder</title>
        <meta
          name="description"
          content="Prabinder Singh - AI Engineer specializing in multi-modal AI systems, agentic intelligence, and data-driven products. Building impactful solutions with a startup mindset."
        />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning, Agentic AI, Data Systems, Product Builder, Full-Stack Developer"
        />
        <meta property="og:title" content="Prabinder Singh | AI Engineer & Product Builder" />
        <meta
          property="og:description"
          content="Building multi-modal AI systems, agentic intelligence, and data-driven products that create real-world impact."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prabindersingh.com" />
      </Helmet>

      <main className="relative">
        <Navbar />
        <HeroSection />
        <HighlightBar />
        <AboutSection />
        <AchievementsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
