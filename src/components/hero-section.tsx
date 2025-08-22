import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Sparkles } from "lucide-react";
const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const phrases = ["Aspiring Developer", "Tech Enthusiast", "Frontend Developer", "Problem Solver"];
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
        setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
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
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 via-portfolio-accent-light/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-portfolio-accent/5 to-portfolio-accent-light/15"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--portfolio-accent))_1px,_transparent_0)] [background-size:40px_40px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-up">
          {/* Enhanced Profile Image Section */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full blur-xl opacity-60 group-hover:opacity-80 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative">
                <img src="/lovable-uploads/1c90c6c9-9fa9-44b5-9432-f055696d20f1.png" alt="Anushka Dwivedi - Software Engineering Student" className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-xl transition-all duration-500 group-hover:scale-105" />
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-portfolio-accent rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white animate-pulse" />
                </div>
                
                {/* Floating particles */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-portfolio-accent-light rounded-full animate-ping delay-300"></div>
                <div className="absolute -bottom-2 -left-3 w-2 h-2 bg-portfolio-accent rounded-full animate-ping delay-700"></div>
                <div className="absolute -bottom-1 -right-3 w-4 h-4 bg-portfolio-accent-light/60 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Main heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-portfolio-accent via-portfolio-accent-light to-portfolio-accent bg-clip-text text-transparent animate-pulse">
                Hello, I'm
              </span>
              <br />
              <span className="portfolio-gradient bg-clip-text text-transparent">
                Anushka Dwivedi
              </span>
            </h1>
            
            {/* Enhanced Typing animation */}
            <div className="text-2xl md:text-3xl font-medium text-portfolio-text-muted mb-8 h-12 flex items-center justify-center">
              <span className="typing-cursor font-mono bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light bg-clip-text text-transparent">
                {displayText}
              </span>
            </div>
          </div>

          {/* Enhanced description */}
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Final-year Computer Science Engineering student passionate about creating 
            <span className="text-portfolio-accent font-medium"> innovative web solutions</span> and 
            exploring <span className="text-portfolio-accent-light font-medium">cutting-edge technologies</span>.
          </p>

          {/* Enhanced Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button onClick={handleDownloadResume} size="lg" className="portfolio-gradient hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 px-8 py-4 text-lg font-semibold">
              <Download className="w-5 h-5 mr-3" />
              Download Resume
            </Button>
            
            <Button onClick={scrollToAbout} variant="outline" size="lg" className="border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300 px-8 py-4 text-lg font-medium backdrop-blur-sm bg-white/5">
              Learn More About Me
            </Button>
          </div>

          {/* Enhanced Scroll indicator */}
          <div className="animate-bounce">
            <button onClick={scrollToAbout} className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 group">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium opacity-60 group-hover:opacity-100">Scroll to explore</span>
                <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-portfolio-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-portfolio-accent-light/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-portfolio-accent/30 to-portfolio-accent-light/20 rounded-full blur-lg animate-pulse delay-500"></div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-portfolio-accent/40 rounded-full blur-md animate-pulse delay-300"></div>
    </section>;
};
export default HeroSection;