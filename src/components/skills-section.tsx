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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/5 via-transparent to-portfolio-accent-light/5"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-portfolio-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-portfolio-accent-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-portfolio-accent via-portfolio-accent-light to-portfolio-accent bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-portfolio-text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Technologies I work with and constantly learning to build amazing solutions
            </p>
            <div className="mt-6 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-portfolio-accent-light rounded-full animate-bounce delay-200"></div>
              <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-bounce delay-400"></div>
            </div>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/30 to-portfolio-accent-light/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-105"></div>
                  
                  {/* Card */}
                  <div className="relative h-full portfolio-card backdrop-blur-sm border-2 border-portfolio-accent/10 group-hover:border-portfolio-accent/30 transition-all duration-500 group-hover:transform group-hover:scale-105">
                    <div className="text-center h-full flex flex-col">
                      {/* Enhanced Icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent to-portfolio-accent-light rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-light/20 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                            <IconComponent className="w-10 h-10 text-portfolio-accent group-hover:text-white transition-colors" />
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Skill Name */}
                      <h3 className="text-2xl font-bold mb-4 text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                        {skill.name}
                      </h3>

                      {/* Enhanced Description */}
                      <p className="text-portfolio-text-muted leading-relaxed mb-6 flex-grow">
                        {skill.description}
                      </p>

                      {/* Enhanced Skill Progress */}
                      <div className="mt-auto">
                        <div className="h-2 bg-portfolio-surface rounded-full overflow-hidden mb-3">
                          <div 
                            className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"
                          ></div>
                        </div>
                        
                        {/* Floating particles */}
                        <div className="relative h-4">
                          <div className="absolute left-2 top-1 w-1 h-1 bg-portfolio-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity delay-300"></div>
                          <div className="absolute right-4 top-0 w-1.5 h-1.5 bg-portfolio-accent-light rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity delay-500"></div>
                          <div className="absolute left-1/2 top-2 w-1 h-1 bg-portfolio-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity delay-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Additional Skills Note */}
          <div className="mt-20 text-center animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-light/20 rounded-3xl blur-xl"></div>
              <div className="relative portfolio-card backdrop-blur-sm border-2 border-portfolio-accent/20 inline-block px-12 py-8">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-portfolio-accent rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-portfolio-accent-light rounded-full animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-portfolio-accent rounded-full animate-pulse delay-600"></div>
                </div>
                <p className="text-portfolio-text-muted text-lg">
                  <span className="text-portfolio-accent font-bold bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light bg-clip-text text-transparent">Always Learning:</span> 
                  {" "}Continuously expanding my skillset with new technologies and frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;