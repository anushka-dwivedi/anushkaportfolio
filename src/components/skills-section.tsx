import { Code2, Database, FileSpreadsheet, Brain, Globe, Server } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "C++",
      icon: Code2,
      description: "Object-oriented programming and data structures"
    },
    {
      name: "SQL",
      icon: Database,
      description: "Database design and query optimization"
    },
    {
      name: "Excel",
      icon: FileSpreadsheet,
      description: "Data analysis and business intelligence"
    },
    {
      name: "Python",
      icon: Brain,
      description: "Programming and AI/ML applications"
    },
    {
      name: "Full Stack Development",
      icon: Globe,
      description: "End-to-end web application development"
    },
    {
      name: "React.js",
      icon: Server,
      description: "Modern frontend framework and component-based UI"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-portfolio-text-muted text-lg">
              Technologies I work with and constantly learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="portfolio-card group cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-full bg-portfolio-accent/10 group-hover:bg-portfolio-accent/20 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-8 h-8 text-portfolio-accent" />
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-xl font-semibold mb-3 text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-portfolio-text-muted text-sm leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Skill bar animation */}
                    <div className="mt-4 h-1 bg-portfolio-surface rounded-full overflow-hidden">
                      <div 
                        className="h-full portfolio-gradient rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-16 text-center animate-fade-up">
            <div className="portfolio-card inline-block">
              <p className="text-portfolio-text-muted">
                <span className="text-portfolio-accent font-semibold">Always Learning:</span> 
                {" "}Continuously expanding my skillset with new technologies and frameworks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;