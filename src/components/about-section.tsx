import { GraduationCap, MapPin, Calendar, Sparkles, Heart, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-surface relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 via-transparent to-portfolio-accent-light/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-portfolio-accent-light/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-portfolio-accent animate-pulse" />
              <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-portfolio-accent via-portfolio-accent-light to-portfolio-accent bg-clip-text text-transparent">
                About Me
              </h2>
              <Sparkles className="w-6 h-6 text-portfolio-accent-light animate-pulse delay-500" />
            </div>
            <p className="text-portfolio-text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Discover the journey, passion, and aspirations that drive my work
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Bio Content */}
            <div className="animate-slide-in">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Heart className="w-7 h-7 text-portfolio-accent animate-pulse" />
                    <h3 className="text-3xl font-bold text-portfolio-text">
                      My Story
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-lg text-portfolio-text-muted leading-relaxed">
                    <p className="relative pl-6">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-portfolio-accent rounded-full"></span>
                      I am a <span className="text-portfolio-accent font-semibold">passionate final-year engineering student</span> specializing in front-end development, 
                      with experience in building responsive websites and a keen interest in <span className="text-portfolio-accent-light font-semibold">full-stack 
                      development and AI technologies</span>.
                    </p>
                    
                    <p className="relative pl-6">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-portfolio-accent-light rounded-full"></span>
                      My goal is to begin my career as a <span className="text-portfolio-accent font-semibold">Software Engineer</span> in a challenging and 
                      growth-oriented environment where I can apply my technical skills, learn from 
                      industry experts, and contribute to <span className="text-portfolio-accent-light font-semibold">innovative solutions</span>.
                    </p>

                    <p className="relative pl-6">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-portfolio-accent rounded-full"></span>
                      I believe in <span className="text-portfolio-accent font-semibold">continuous learning</span> and staying updated with the latest technological 
                      trends. My journey has been marked by consistent academic excellence and active 
                      participation in <span className="text-portfolio-accent-light font-semibold">coding competitions and hackathons</span>.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-6 bg-gradient-to-r from-portfolio-accent/10 to-portfolio-accent-light/10 rounded-2xl border border-portfolio-accent/20">
                  <Target className="w-6 h-6 text-portfolio-accent flex-shrink-0" />
                  <p className="text-portfolio-text font-medium">
                    Currently seeking <span className="text-portfolio-accent font-bold">internship</span> and <span className="text-portfolio-accent-light font-bold">entry-level opportunities</span> to kickstart my career
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Education & Info Cards */}
            <div className="animate-slide-in delay-200">
              <div className="space-y-6">
                {/* Enhanced Education Card */}
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-light/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative portfolio-card backdrop-blur-sm border-2 border-portfolio-accent/20 group-hover:border-portfolio-accent/40 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-light/20 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-portfolio-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-portfolio-text mb-2 group-hover:text-portfolio-accent transition-colors">Education</h4>
                        <p className="text-portfolio-text font-semibold text-lg mb-1">
                          B.Tech (Computer Science & Engineering)
                        </p>
                        <p className="text-portfolio-text-muted">
                          AKTU, Lucknow
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Duration Card */}
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent-light/20 to-portfolio-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative portfolio-card backdrop-blur-sm border-2 border-portfolio-accent-light/20 group-hover:border-portfolio-accent-light/40 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-portfolio-accent-light/20 to-portfolio-accent/20 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-8 h-8 text-portfolio-accent-light" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-portfolio-text mb-2 group-hover:text-portfolio-accent-light transition-colors">Duration</h4>
                        <p className="text-portfolio-text font-semibold text-lg mb-1">2022 – 2026</p>
                        <p className="text-portfolio-text-muted">
                          Currently in Final Year
                        </p>
                        <div className="mt-3 w-full bg-portfolio-surface rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full w-4/5 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Location Card */}
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-light/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative portfolio-card backdrop-blur-sm border-2 border-portfolio-accent/20 group-hover:border-portfolio-accent/40 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-light/20 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-8 h-8 text-portfolio-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-portfolio-text mb-2 group-hover:text-portfolio-accent transition-colors">Location</h4>
                        <p className="text-portfolio-text font-semibold text-lg mb-1">Lucknow, India</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <p className="text-portfolio-text-muted">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;