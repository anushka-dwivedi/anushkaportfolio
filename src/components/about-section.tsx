import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-portfolio-text-muted text-lg">
              Get to know more about my background and aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Bio Content */}
            <div className="animate-slide-in">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-portfolio-text">
                My Story
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-portfolio-text-muted leading-relaxed text-sm sm:text-base">
                <p>
                  I am a passionate final-year engineering student specializing in front-end development, 
                  with experience in building responsive websites and a keen interest in full-stack 
                  development and AI technologies.
                </p>
                
                <p>
                  My goal is to begin my career as a Software Engineer in a challenging and 
                  growth-oriented environment where I can apply my technical skills, learn from 
                  industry experts, support organizational growth and enhance personal and 
                  professional skills.
                </p>

                <p>
                  I believe in continuous learning and staying updated with the latest technological 
                  trends. My journey has been marked by consistent academic excellence and active 
                  participation in coding competitions and hackathons.
                </p>
              </div>
            </div>

            {/* Education & Info Cards */}
            <div className="animate-slide-in delay-200">
              <div className="space-y-4 sm:space-y-6">
                {/* Education Card */}
                <div className="portfolio-card">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-portfolio-accent/10">
                      <GraduationCap className="w-6 h-6 text-portfolio-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-text mb-1">Education</h4>
                      <p className="text-portfolio-text-muted font-medium">
                        B.Tech (Computer Science & Engineering)
                      </p>
                      <p className="text-sm text-portfolio-text-muted">
                        AKTU, Lucknow
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duration Card */}
                <div className="portfolio-card">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-portfolio-accent/10">
                      <Calendar className="w-6 h-6 text-portfolio-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-text mb-1">Duration</h4>
                      <p className="text-portfolio-text-muted">2022 – 2026</p>
                      <p className="text-sm text-portfolio-text-muted">
                        Currently in Final Year
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="portfolio-card">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-portfolio-accent/10">
                      <MapPin className="w-6 h-6 text-portfolio-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-text mb-1">Location</h4>
                      <p className="text-portfolio-text-muted">Lucknow, India</p>
                      <p className="text-sm text-portfolio-text-muted">
                        Available for opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;