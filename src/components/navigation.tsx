import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/50d80157-3da7-41ac-9421-dc4ddba51200.png';
    link.download = 'Anushka_Dwivedi_Resume.png';
    link.click();
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-portfolio-surface/95 backdrop-blur-md portfolio-shadow' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold portfolio-gradient bg-clip-text text-transparent">
            Anushka Dwivedi
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Resume Preview Popover */}
            <div className="relative group">
              <Button
                variant="outline"
                size="sm"
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              
              {/* Resume Preview Box - appears on hover */}
              <div className="absolute top-full right-0 mt-2 w-72 bg-portfolio-surface border border-portfolio-accent/20 rounded-2xl p-4 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="text-center mb-3">
                  <h3 className="text-sm font-semibold text-portfolio-text mb-1">My Resume</h3>
                  <p className="text-xs text-portfolio-text-muted">Click to download</p>
                </div>
                
                {/* Resume Preview */}
                <div 
                  className="relative cursor-pointer mb-3 overflow-hidden rounded-lg border border-portfolio-accent/30 hover:border-portfolio-accent/60 transition-all duration-300"
                  onClick={handleDownloadResume}
                >
                  <img 
                    src="/lovable-uploads/50d80157-3da7-41ac-9421-dc4ddba51200.png" 
                    alt="Anushka Dwivedi Resume Preview" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-portfolio-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-portfolio-accent/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Click to Download
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <Button
                  onClick={handleDownloadResume}
                  className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white"
                  size="sm"
                >
                  <Download className="w-3 h-3 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-lg bg-portfolio-surface border border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center space-x-3 pt-3 border-t border-border">
                {/* Resume Preview for Mobile */}
                <div className="relative group flex-1">
                  <Button
                    onClick={handleDownloadResume}
                    variant="outline"
                    size="sm"
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;