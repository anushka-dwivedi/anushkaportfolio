import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    "Aspiring Developer",
    "Tech Enthusiast",
    "Frontend Developer",
    "Problem Solver"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentPhraseIndex, isTyping]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Anushka_Dwivedi_Resume.pdf';
    link.click();
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/10 via-transparent to-portfolio-accent-light/5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Anushka Dwivedi"
                className="w-32 h-32 rounded-full object-cover border-4 border-portfolio-accent shadow-2xl animate-pulse-glow"
              />
              <div className="absolute inset-0 rounded-full bg-portfolio-accent/20 animate-ping"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 portfolio-gradient bg-clip-text text-transparent">
            Hello, I'm Anushka Dwivedi
          </h1>

          {/* Typing animation */}
          <div className="text-xl md:text-2xl text-portfolio-text-muted mb-8 h-8">
            <span className="typing-cursor">{displayText}</span>
          </div>

          {/* Brief description */}
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Final-year Computer Science Engineering student passionate about creating 
            innovative web solutions and exploring cutting-edge technologies.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="portfolio-gradient hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <button 
              onClick={scrollToAbout}
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-portfolio-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-portfolio-accent-light/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;