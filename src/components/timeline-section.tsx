import { GraduationCap, Briefcase, BookOpen, Trophy, Calendar } from "lucide-react";

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
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-portfolio-text-muted text-lg">
              Key milestones in my educational and professional development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-portfolio-accent/20 transform md:-translate-x-0.5"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={item.id}
                    className={`relative flex items-center animate-slide-in ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-16 h-16 rounded-full ${getBackgroundColor(item.type)} flex items-center justify-center border-4 border-portfolio-bg`}>
                        <IconComponent className={`w-8 h-8 ${getIconColor(item.type)}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div className="portfolio-card">
                        {/* Year badge */}
                        <div className="flex items-center mb-4">
                          <Calendar className="w-4 h-4 text-portfolio-accent mr-2" />
                          <span className="text-sm font-semibold text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>

                        {/* Title and subtitle */}
                        <h3 className="text-xl font-bold text-portfolio-text mb-2">
                          {item.title}
                        </h3>
                        <h4 className="text-portfolio-accent font-semibold mb-4">
                          {item.subtitle}
                        </h4>

                        {/* Description */}
                        <p className="text-portfolio-text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Future goals */}
          <div className="mt-16 text-center animate-fade-up">
            <div className="portfolio-card inline-block">
              <h3 className="text-lg font-semibold text-portfolio-text mb-2">
                Looking Forward
              </h3>
              <p className="text-portfolio-text-muted">
                Seeking opportunities to grow as a Software Engineer and contribute to innovative projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;