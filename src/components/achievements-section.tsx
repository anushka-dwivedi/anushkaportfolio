import { Trophy, Award, Star, Users } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Felicitation by Hon'ble CM Yogi Adityanath",
      description: "Secured 7th rank in Lucknow (Class 12 Board Exams)",
      reward: "₹25,000 and books",
      icon: Award,
      category: "Academic Excellence"
    },
    {
      id: 2,
      title: "Reliance Foundation Undergraduate Scholarship",
      description: "Merit-based scholarship recipient during B.Tech",
      reward: "₹50,000 annually",
      icon: Trophy,
      category: "Scholarship"
    },
    {
      id: 3,
      title: "Coding Ninjas Premier League",
      description: "Achieved All India Rank 294 in competitive programming",
      reward: "AIR 294",
      icon: Star,
      category: "Programming"
    },
    {
      id: 4,
      title: "Smart India Hackathon Selection",
      description: "Selected at college level for prestigious national hackathon",
      reward: "College Level Selection",
      icon: Users,
      category: "Innovation"
    }
  ];

  const getIconColor = (category: string) => {
    switch (category) {
      case 'Academic Excellence':
        return 'text-blue-500';
      case 'Scholarship':
        return 'text-green-500';
      case 'Programming':
        return 'text-purple-500';
      case 'Innovation':
        return 'text-orange-500';
      default:
        return 'text-portfolio-accent';
    }
  };

  const getBackgroundColor = (category: string) => {
    switch (category) {
      case 'Academic Excellence':
        return 'bg-blue-500/10';
      case 'Scholarship':
        return 'bg-green-500/10';
      case 'Programming':
        return 'bg-purple-500/10';
      case 'Innovation':
        return 'bg-orange-500/10';
      default:
        return 'bg-portfolio-accent/10';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <p className="text-portfolio-text-muted text-lg">
              Milestones that reflect dedication and continuous learning
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className="portfolio-card group animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-3 rounded-xl ${getBackgroundColor(achievement.category)} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${getIconColor(achievement.category)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-semibold uppercase tracking-wide ${getIconColor(achievement.category)}`}>
                          {achievement.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <p className="text-portfolio-text-muted leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Reward/Recognition */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm text-portfolio-text-muted font-medium">
                        Recognition:
                      </span>
                      <span className="text-sm font-semibold text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">
                        {achievement.reward}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Recognition */}
          <div className="mt-16 animate-fade-up">
            <div className="portfolio-card text-center">
              <h3 className="text-xl font-semibold text-portfolio-text mb-4">
                Other Notable Participations
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-portfolio-text-muted">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-portfolio-accent" />
                  <span>Multiple Hackathons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-portfolio-accent" />
                  <span>Khelo India Dance Competition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-portfolio-accent" />
                  <span>Coding Competitions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;