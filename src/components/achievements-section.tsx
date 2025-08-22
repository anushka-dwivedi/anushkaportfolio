import { Trophy, Award, Star, Users, Sparkles, Crown, Medal } from "lucide-react";

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
    <section id="achievements" className="py-20 bg-portfolio-surface relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/5 via-transparent to-portfolio-accent-light/5"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-portfolio-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-portfolio-accent-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Crown className="w-8 h-8 text-portfolio-accent animate-pulse" />
              <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-portfolio-accent via-portfolio-accent-light to-portfolio-accent bg-clip-text text-transparent">
                Achievements & Recognition
              </h2>
              <Medal className="w-8 h-8 text-portfolio-accent-light animate-bounce" />
            </div>
            <p className="text-portfolio-text-muted text-xl max-w-3xl mx-auto leading-relaxed">
              Milestones that reflect dedication, hard work, and continuous learning journey
            </p>
            <div className="mt-6 flex justify-center space-x-3">
              <Trophy className="w-6 h-6 text-portfolio-accent animate-pulse" />
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-portfolio-accent-light rounded-full animate-bounce delay-200"></div>
                <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-bounce delay-400"></div>
              </div>
              <Trophy className="w-6 h-6 text-portfolio-accent-light animate-pulse delay-300" />
            </div>
          </div>

          {/* Enhanced Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/30 to-portfolio-accent-light/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  
                  {/* Card */}
                  <div className="relative h-full portfolio-card backdrop-blur-sm border-2 border-portfolio-accent/10 group-hover:border-portfolio-accent/30 transition-all duration-500 group-hover:scale-105">
                    {/* Enhanced Header */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className="relative">
                        {/* Icon glow */}
                        <div className={`absolute inset-0 ${getBackgroundColor(achievement.category)} rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                        
                        {/* Icon container */}
                        <div className={`relative p-4 rounded-2xl ${getBackgroundColor(achievement.category)} group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/20`}>
                          <IconComponent className={`w-8 h-8 ${getIconColor(achievement.category)} group-hover:scale-110 transition-transform`} />
                        </div>
                        
                        {/* Floating sparkles */}
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Sparkles className="w-4 h-4 text-portfolio-accent animate-pulse" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs font-bold uppercase tracking-wider ${getIconColor(achievement.category)} bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-light/20 px-4 py-2 rounded-full border border-portfolio-accent/30`}>
                            {achievement.category}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors leading-tight">
                          {achievement.title}
                        </h3>
                      </div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="space-y-6">
                      <p className="text-portfolio-text-muted leading-relaxed text-lg">
                        {achievement.description}
                      </p>

                      {/* Enhanced Reward/Recognition */}
                      <div className="flex items-center justify-between pt-6 border-t border-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-light/20">
                        <span className="text-portfolio-text-muted font-semibold flex items-center space-x-2">
                          <Trophy className="w-4 h-4 text-portfolio-accent" />
                          <span>Recognition:</span>
                        </span>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full blur-md opacity-60"></div>
                          <span className="relative bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-light/20 text-portfolio-accent font-bold px-6 py-2 rounded-full border border-portfolio-accent/30 backdrop-blur-sm">
                            {achievement.reward}
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="h-2 bg-portfolio-surface rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Additional Recognition */}
          <div className="mt-20 animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-light/20 rounded-3xl blur-xl"></div>
              <div className="relative portfolio-card backdrop-blur-sm border-2 border-portfolio-accent/20 text-center px-12 py-10">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <Star className="w-8 h-8 text-portfolio-accent animate-spin" />
                  <h3 className="text-2xl md:text-3xl font-bold text-portfolio-text">
                    Other Notable Participations
                  </h3>
                  <Sparkles className="w-8 h-8 text-portfolio-accent-light animate-pulse" />
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-light/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
                      <div className="relative flex flex-col items-center space-y-4 p-6 rounded-2xl border border-portfolio-accent/20 group-hover:scale-105 transition-transform duration-300">
                        <Users className="w-12 h-12 text-portfolio-accent group-hover:animate-bounce" />
                        <span className="text-portfolio-text font-semibold text-lg">Multiple Hackathons</span>
                        <div className="w-full h-1 bg-portfolio-surface rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent-light/20 to-portfolio-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
                      <div className="relative flex flex-col items-center space-y-4 p-6 rounded-2xl border border-portfolio-accent/20 group-hover:scale-105 transition-transform duration-300">
                        <Trophy className="w-12 h-12 text-portfolio-accent-light group-hover:animate-bounce" />
                        <span className="text-portfolio-text font-semibold text-lg">Khelo India Dance Competition</span>
                        <div className="w-full h-1 bg-portfolio-surface rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-portfolio-accent-light to-portfolio-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-light/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
                      <div className="relative flex flex-col items-center space-y-4 p-6 rounded-2xl border border-portfolio-accent/20 group-hover:scale-105 transition-transform duration-300">
                        <Star className="w-12 h-12 text-portfolio-accent group-hover:animate-spin" />
                        <span className="text-portfolio-text font-semibold text-lg">Coding Competitions</span>
                        <div className="w-full h-1 bg-portfolio-surface rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
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

export default AchievementsSection;