import { ExternalLink, Github, Sparkles, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website (Amazon Clone)",
      description: "Responsive homepage replicating Amazon's navigation, banners, and product sections using HTML & CSS. Features include responsive design, modern UI elements, and smooth user interactions.",
      image: "/project-ecommerce.jpg",
      liveUrl: "https://anushkadwivedi0187.github.io/Webproject/",
      githubUrl: "https://github.com/anushkadwivedi0187/Webproject",
      technologies: ["HTML", "CSS", "Responsive Design"]
    },
    {
      id: 2,
      title: "Adventure Website",
      description: "Travel-themed responsive website featuring interactive galleries, smooth hover effects, and seamless scrolling. Showcases destinations with immersive user experience design.",
      image: "/project-adventure.jpg",
      liveUrl: "https://anushkadwivedi0187.github.io/Adventure-Website/",
      githubUrl: "https://github.com/anushkadwivedi0187/Adventure-Website",
      technologies: ["HTML", "CSS", "JavaScript", "Animations"]
    }
  ];

  const handleLiveProject = (url: string) => {
    window.open(url, '_blank');
  };

  const handleGithubProject = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-portfolio-surface relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-portfolio-accent/5 via-transparent to-portfolio-accent-light/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-portfolio-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-accent-light/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Star className="w-8 h-8 text-portfolio-accent animate-spin" />
              <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-portfolio-accent via-portfolio-accent-light to-portfolio-accent bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <Star className="w-8 h-8 text-portfolio-accent-light animate-spin" />
            </div>
            <p className="text-portfolio-text-muted text-xl max-w-3xl mx-auto leading-relaxed">
              Showcasing my best work and technical achievements with modern web technologies
            </p>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-up ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Enhanced Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} group`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-portfolio-accent/40 to-portfolio-accent-light/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                    
                    <div className="relative aspect-video bg-gradient-to-br from-portfolio-accent/20 via-portfolio-accent-light/20 to-portfolio-accent/20 flex items-center justify-center border-2 border-portfolio-accent/20 rounded-3xl backdrop-blur-sm overflow-hidden group-hover:scale-105 transition-all duration-500">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--portfolio-accent))_1px,_transparent_0)] [background-size:30px_30px]"></div>
                      
                      <div className="relative text-center p-10 z-10">
                        <div className="mb-6">
                          <div className="relative inline-flex">
                            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent to-portfolio-accent-light rounded-2xl blur-lg opacity-80"></div>
                            <div className="relative w-20 h-20 bg-gradient-to-br from-portfolio-accent/30 to-portfolio-accent-light/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                              <Eye className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        </div>
                        <p className="text-white/80 font-medium">
                          Interactive Project Preview
                        </p>
                        <div className="mt-4 flex justify-center space-x-2">
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-200"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-400"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/95 to-portfolio-accent-light/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-3xl backdrop-blur-sm">
                      <div className="text-center p-8">
                        <h3 className="text-white font-bold text-2xl mb-6">
                          {project.title}
                        </h3>
                        <div className="flex flex-col space-y-4">
                          <Button
                            onClick={() => handleLiveProject(project.liveUrl)}
                            variant="outline"
                            className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-portfolio-accent backdrop-blur-sm transition-all duration-300"
                            size="lg"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Live Demo
                          </Button>
                          <Button
                            onClick={() => handleGithubProject(project.githubUrl)}
                            variant="outline"
                            className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-portfolio-accent backdrop-blur-sm transition-all duration-300"
                            size="lg"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            View Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-8">
                    <div className="relative">
                      {/* Floating decoration */}
                      <div className="absolute -left-6 top-0">
                        <Sparkles className="w-6 h-6 text-portfolio-accent animate-pulse" />
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-text">
                        {project.title}
                      </h3>
                      <p className="text-portfolio-text-muted leading-relaxed text-xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Enhanced Technologies */}
                    <div>
                      <h4 className="text-sm font-bold text-portfolio-accent mb-4 uppercase tracking-wider flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>Technologies Used</span>
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="relative group"
                            style={{ animationDelay: `${techIndex * 100}ms` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                            <span className="relative px-6 py-3 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-light/20 text-portfolio-accent rounded-full font-semibold border border-portfolio-accent/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                              {tech}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Button
                        onClick={() => handleLiveProject(project.liveUrl)}
                        className="portfolio-gradient hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        size="lg"
                      >
                        <ExternalLink className="w-5 h-5 mr-3" />
                        View Live Project
                      </Button>
                      <Button
                        onClick={() => handleGithubProject(project.githubUrl)}
                        variant="outline"
                        size="lg"
                        className="border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5"
                      >
                        <Github className="w-5 h-5 mr-3" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-24 animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-light/20 rounded-3xl blur-xl"></div>
              <div className="relative portfolio-card backdrop-blur-sm border-2 border-portfolio-accent/20 inline-block px-12 py-10">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Github className="w-8 h-8 text-portfolio-accent animate-pulse" />
                  <h3 className="text-2xl font-bold text-portfolio-text">Explore More Projects</h3>
                  <Github className="w-8 h-8 text-portfolio-accent-light animate-pulse delay-300" />
                </div>
                <p className="text-portfolio-text-muted mb-8 text-lg max-w-md mx-auto">
                  Interested in seeing more of my work and coding journey?
                </p>
                <Button
                  onClick={() => window.open('https://github.com/anushka-dwivedi', '_blank')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5 group"
                >
                  <Github className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  View All Projects on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;