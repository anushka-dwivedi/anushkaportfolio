import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import TimelineSection from "@/components/timeline-section";
import AchievementsSection from "@/components/achievements-section";
import CertificatesSection from "@/components/certificates-section";
import ContactSection from "@/components/contact-section";
import ResumeSection from "@/components/resume-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <AchievementsSection />
      <CertificatesSection />
      <ContactSection />
      <ResumeSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-portfolio-surface border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-portfolio-text-muted">
            © 2024 Anushka Dwivedi. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
