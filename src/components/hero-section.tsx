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
    link.href = '/lovable-uploads/50d80157-3da7-41ac-9421-dc4ddba51200.png';
    link.download = 'Anushka_Dwivedi_Resume.png';
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
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Ultra-modern layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 via-portfolio-accent-light/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-portfolio-accent/5 to-portfolio-accent-light/15"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-portfolio-accent/5 via-transparent to-portfolio-accent-light/10"></div>
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-portfolio-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-portfolio-accent-light/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-portfolio-accent/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      {/* Dynamic grid pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--portfolio-accent))_1px,_transparent_0)] [background-size:40px_40px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-up max-w-5xl mx-auto">
          {/* Ultra-modern Profile Image Section */}
          <div className="mb-8 sm:mb-12 flex justify-center">
            <div className="relative group">
              {/* Animated outer rings */}
              <div className="absolute -inset-6 bg-gradient-to-r from-portfolio-accent via-portfolio-accent-light to-portfolio-accent rounded-full blur-2xl opacity-40 group-hover:opacity-60 animate-spin" style={{
              animationDuration: '8s'
            }}></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-accent-light to-portfolio-accent rounded-full blur-xl opacity-50 group-hover:opacity-70 animate-pulse"></div>
              
              {/* Main image container with enhanced styling */}
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 mx-auto">
                  <img src="/lovable-uploads/1c90c6c9-9fa9-44b5-9432-f055696d20f1.png" alt="Anushka Dwivedi - Software Engineering Student" className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl" />
                </div>
                
                {/* Enhanced decorative elements */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-portfolio-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" />
                </div>
                
                {/* Responsive floating particles */}
                <div className="absolute -top-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-portfolio-accent-light rounded-full animate-ping delay-300"></div>
                <div className="absolute -bottom-2 -left-2 sm:-left-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-portfolio-accent rounded-full animate-ping delay-700"></div>
                <div className="absolute -bottom-1 -right-2 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4 bg-portfolio-accent-light/60 rounded-full animate-pulse delay-1000"></div>
                
                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse">
                  <div className="absolute inset-1 bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ultra-modern Main heading */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-none">
              <span className="bg-gradient-to-r from-portfolio-accent via-portfolio-accent-light to-portfolio-accent bg-clip-text text-transparent animate-pulse block">
                Hello, I'm
              </span>
              <span className="portfolio-gradient bg-clip-text text-transparent block mt-2">
                Anushka Dwivedi
              </span>
            </h1>
            
            {/* Ultra-modern Typing animation */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-portfolio-text-muted mb-6 sm:mb-8 h-8 sm:h-10 md:h-12 flex items-center justify-center">
              <span className="typing-cursor font-mono bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light bg-clip-text text-transparent">
                {displayText}
              </span>
            </div>
          </div>

          {/* Enhanced responsive description */}
          <p className="text-base sm:text-lg md:text-xl text-portfolio-text-muted max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-4">
            Final-year Computer Science Engineering student passionate about creating 
            <span className="text-portfolio-accent font-medium"> innovative web solutions</span> and 
            exploring <span className="text-portfolio-accent-light font-medium">cutting-edge technologies</span>.
          </p>

          {/* Ultra-modern Resume Preview Box */}
          <div className="mb-8 sm:mb-12">
            <div className="max-w-md mx-auto bg-portfolio-surface/50 backdrop-blur-sm border border-portfolio-accent/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-portfolio-text mb-2">My Resume</h3>
                <p className="text-sm text-portfolio-text-muted">Click to view or download</p>
              </div>
              
              {/* Resume Preview */}
              <div 
                className="relative cursor-pointer mb-4 overflow-hidden rounded-lg border-2 border-portfolio-accent/30 hover:border-portfolio-accent/60 transition-all duration-300"
                onClick={handleDownloadResume}
              >
                <img 
                  src="/lovable-uploads/50d80157-3da7-41ac-9421-dc4ddba51200.png" 
                  alt="Anushka Dwivedi Resume Preview" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-portfolio-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-portfolio-accent/90 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Click to Download
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={handleDownloadResume}
                  className="flex-1 bg-portfolio-accent hover:bg-portfolio-accent/90 text-white"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="flex-1 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                  size="sm"
                >
                  View Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Ultra-modern Scroll indicator */}
          <div className="animate-bounce hidden sm:block">
            <button onClick={scrollToAbout} className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 group">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-xs sm:text-sm font-medium opacity-60 group-hover:opacity-100">Scroll to explore</span>
                <div className="relative">
                  
                  <div className="absolute inset-0 bg-portfolio-accent/20 rounded-full blur-sm group-hover:bg-portfolio-accent/40 transition-all"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Ultra-modern floating elements - responsive */}
      <div className="hidden lg:block absolute top-20 left-20 w-24 h-24 bg-portfolio-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="hidden lg:block absolute bottom-32 right-20 w-40 h-40 bg-portfolio-accent-light/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="hidden md:block absolute top-1/2 left-4 lg:left-10 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-portfolio-accent/30 to-portfolio-accent-light/20 rounded-full blur-lg animate-pulse delay-500"></div>
      <div className="hidden sm:block absolute top-1/4 right-8 lg:right-1/4 w-6 h-6 lg:w-8 lg:h-8 bg-portfolio-accent/40 rounded-full blur-md animate-pulse delay-300"></div>
      
      {/* Mobile-specific floating elements */}
      <div className="sm:hidden absolute top-10 right-4 w-8 h-8 bg-portfolio-accent/20 rounded-full blur-md animate-pulse"></div>
      <div className="sm:hidden absolute bottom-20 left-4 w-12 h-12 bg-portfolio-accent-light/15 rounded-full blur-lg animate-pulse delay-700"></div>
    </section>;
};
export default HeroSection;