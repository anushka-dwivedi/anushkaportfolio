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
    // This will create a download link for resume.pdf
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Anushka_Dwivedi_Resume.pdf';
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
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="sm"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            
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
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  size="sm"
                  className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white flex-1"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                
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