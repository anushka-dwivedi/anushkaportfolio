import { GraduationCap, Briefcase, BookOpen, Trophy, Calendar, Sparkles, Rocket, Clock } from "lucide-react";

const TimelineSection = () => {
  const timelineItems = [
    {
      id: 1,
      year: "2022 - 2026",
      title: "B.Tech Computer Science & Engineering",
      subtitle: "AKTU, Lucknow",
      description: "Pursuing Bachelor's degree with focus on software development, data structures, algorithms, and modern web technologies.",
      icon: GraduationCap,
      type: "education"
    },
    {
      id: 2,
      year: "2024",
      title: "Internship - Yuga Yatra",
      subtitle: "Technology Role",
      description: "Gained hands-on experience in real-world software development projects and enhanced technical skills.",
      icon: Briefcase,
      type: "work"
    },
    {
      id: 3,
      year: "Apr - May 2024",
      title: "Web Development Training",
      subtitle: "Softpro India",
      description: "Intensive training program covering modern web development technologies, frameworks, and best practices.",
      icon: BookOpen,
      type: "training"
    },
    {
      id: 4,
      year: "2024",
      title: "Smart India Hackathon",
      subtitle: "College Level Selection",
      description: "Successfully selected at college level for the prestigious Smart India Hackathon competition.",
      icon: Trophy,
      type: "achievement"
    },
    {
      id: 5,
      year: "Ongoing",
      title: "Hackathons & Competitions",
      subtitle: "Multiple Participations",
      description: "Active participation in coding competitions including Coding Ninjas Premier League (AIR 294) and various hackathons.",
      icon: Trophy,
      type: "achievement"
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'text-blue-500';
      case 'work':
        return 'text-green-500';
      case 'training':
        return 'text-purple-500';
      case 'achievement':
        return 'text-yellow-500';
      default:
        return 'text-portfolio-accent';
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500/10';
      case 'work':
        return 'bg-green-500/10';
      case 'training':
        return 'bg-purple-500/10';
      case 'achievement':
        return 'bg-yellow-500/10';
      default:
        return 'bg-portfolio-accent/10';
    }
  };

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 via-transparent to-portfolio-accent-light/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-portfolio-accent-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Rocket className="w-8 h-8 text-portfolio-accent animate-bounce" />
              <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-portfolio-accent via-portfolio-accent-light to-portfolio-accent bg-clip-text text-transparent">
                My Journey
              </h2>
              <Sparkles className="w-8 h-8 text-portfolio-accent-light animate-pulse" />
            </div>
            <p className="text-portfolio-text-muted text-xl max-w-3xl mx-auto leading-relaxed">
              Key milestones in my educational and professional development journey
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2 text-portfolio-accent">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Progress Timeline</span>
            </div>
          </div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-portfolio-accent via-portfolio-accent-light to-portfolio-accent transform md:-translate-x-0.5 rounded-full shadow-lg"></div>

            {/* Enhanced Timeline items */}
            <div className="space-y-16">
              {timelineItems.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={item.id}
                    className={`relative flex items-center animate-slide-in group ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Enhanced Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                      <div className="relative">
                        {/* Outer glow ring */}
                        <div className={`absolute inset-0 w-20 h-20 ${getBackgroundColor(item.type)} rounded-full opacity-60 group-hover:opacity-100 blur-lg animate-pulse`}></div>
                        
                        {/* Main dot */}
                        <div className={`relative w-20 h-20 rounded-full ${getBackgroundColor(item.type)} flex items-center justify-center border-4 border-white shadow-2xl group-hover:scale-110 transition-all duration-500 backdrop-blur-sm`}>
                          <IconComponent className={`w-10 h-10 ${getIconColor(item.type)} group-hover:scale-110 transition-transform`} />
                        </div>
                        
                        {/* Floating particles */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-portfolio-accent rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-portfolio-accent-light rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-100"></div>
                      </div>
                    </div>

                    {/* Enhanced Content */}
                    <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${isEven ? 'md:pr-20' : 'md:pl-20'}`}>
                      <div className="relative group">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-light/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                        
                        {/* Card */}
                        <div className="relative portfolio-card backdrop-blur-sm border-2 border-portfolio-accent/10 group-hover:border-portfolio-accent/30 transition-all duration-500 group-hover:scale-105">
                          {/* Enhanced Year badge */}
                          <div className="flex items-center mb-6">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full blur-md opacity-60"></div>
                              <div className="relative flex items-center space-x-2 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-light/20 px-6 py-3 rounded-full border border-portfolio-accent/30 backdrop-blur-sm">
                                <Calendar className="w-5 h-5 text-portfolio-accent" />
                                <span className="font-bold text-portfolio-accent">
                                  {item.year}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Title and subtitle */}
                          <h3 className="text-2xl md:text-3xl font-bold text-portfolio-text mb-3 group-hover:text-portfolio-accent transition-colors">
                            {item.title}
                          </h3>
                          <h4 className="text-portfolio-accent font-bold text-lg mb-6 flex items-center space-x-2">
                            <span>{item.subtitle}</span>
                            <Sparkles className="w-4 h-4 animate-pulse" />
                          </h4>

                          {/* Enhanced Description */}
                          <p className="text-portfolio-text-muted leading-relaxed text-lg">
                            {item.description}
                          </p>
                          
                          {/* Progress indicator */}
                          <div className="mt-6 h-2 bg-portfolio-surface rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Future goals */}
          <div className="mt-24 text-center animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-light/20 rounded-3xl blur-xl"></div>
              <div className="relative portfolio-card backdrop-blur-sm border-2 border-portfolio-accent/20 inline-block px-12 py-10">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Rocket className="w-8 h-8 text-portfolio-accent animate-bounce" />
                  <h3 className="text-2xl font-bold text-portfolio-text">
                    Looking Forward
                  </h3>
                  <Sparkles className="w-8 h-8 text-portfolio-accent-light animate-pulse" />
                </div>
                <p className="text-portfolio-text-muted text-lg max-w-md mx-auto">
                  Seeking opportunities to grow as a <span className="text-portfolio-accent font-semibold">Software Engineer</span> and contribute to 
                  <span className="text-portfolio-accent-light font-semibold"> innovative projects</span> that make a difference
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-portfolio-accent-light rounded-full animate-bounce delay-200"></div>
                  <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-bounce delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;