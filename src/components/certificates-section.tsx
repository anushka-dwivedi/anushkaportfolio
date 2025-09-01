import { Award, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificatesSection = () => {
  const certificates = [
    {
      id: 2,
      title: "Web Development Training Certificate",
      organization: "Softpro India",
      date: "Apr-May 2024",
      description: "Completed comprehensive web development training covering modern frameworks and best practices.",
      image: "/placeholder-cert.jpg",
      category: "Technical Training"
    }
  ];

  const handleViewCertificate = (image: string) => {
    window.open(image, '_blank');
  };

  return (
    <section id="certificates" className="py-20 bg-portfolio-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
              Certificates & Training
            </h2>
            <p className="text-portfolio-text-muted text-lg">
              Professional development and continuous learning achievements
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid gap-8 lg:gap-12">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className={`grid lg:grid-cols-2 gap-8 items-center animate-fade-up ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Certificate Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group overflow-hidden rounded-xl portfolio-shadow-elevated">
                    <div className="aspect-[4/3] bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent-light/10">
                      {certificate.image.includes('data:image') || certificate.image.includes('placeholder') ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-portfolio-accent/20 flex items-center justify-center">
                              <Award className="w-8 h-8 text-portfolio-accent" />
                            </div>
                            <p className="text-portfolio-text-muted text-sm">
                              Certificate Preview
                            </p>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-portfolio-accent/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-white font-semibold text-lg mb-4 px-4">
                          {certificate.title}
                        </h3>
                        <Button
                          onClick={() => handleViewCertificate(certificate.image)}
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-portfolio-accent"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">
                          {certificate.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-portfolio-text">
                        {certificate.title}
                      </h3>
                      <p className="text-portfolio-text-muted leading-relaxed text-lg">
                        {certificate.description}
                      </p>
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-portfolio-text-muted">
                        <MapPin className="w-4 h-4 text-portfolio-accent" />
                        <span>{certificate.organization}</span>
                      </div>
                      <div className="flex items-center gap-3 text-portfolio-text-muted">
                        <Calendar className="w-4 h-4 text-portfolio-accent" />
                        <span>{certificate.date}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Button
                        onClick={() => handleViewCertificate(certificate.image)}
                        className="portfolio-gradient hover:opacity-90"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-up">
            <div className="portfolio-card inline-block">
              <p className="text-portfolio-text-muted mb-4">
                Continuously expanding skills through professional development
              </p>
              <div className="flex items-center justify-center gap-2 text-portfolio-accent">
                <Award className="w-4 h-4" />
                <span className="font-medium">More certificates coming soon!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;