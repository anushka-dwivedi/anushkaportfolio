import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from "lucide-react";

const ResumeSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Anushka_Dwivedi_Resume.pdf';
    link.click();
  };

  const handleViewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-portfolio-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
            My Resume
          </h2>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            Download or view my complete resume to learn more about my experience, skills, and achievements.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-portfolio-surface border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-accent/10">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-portfolio-accent/10 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-portfolio-accent" />
              </div>
              <CardTitle className="text-xl font-semibold">Resume</CardTitle>
              <CardDescription className="text-portfolio-text-muted">
                Frontend Developer & Software Engineer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleViewResume}
                  variant="outline"
                  className="flex-1 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Online
                </Button>
                <Button 
                  onClick={handleDownloadResume}
                  className="flex-1 bg-portfolio-accent hover:bg-portfolio-accent/90 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
              <p className="text-sm text-portfolio-text-muted text-center">
                Updated regularly with latest experience and projects
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;