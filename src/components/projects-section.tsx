import { ExternalLink, Github } from "lucide-react";
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
    <section id="projects" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-portfolio-text-muted text-lg">
              Showcasing some of my best work and technical achievements
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-8 items-center animate-fade-up ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group overflow-hidden rounded-xl portfolio-shadow-elevated">
                    <div className="aspect-video bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-light/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-portfolio-accent/20 flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-portfolio-accent" />
                        </div>
                        <p className="text-portfolio-text-muted text-sm">
                          Project Screenshot
                        </p>
                      </div>
                    </div>
                    
                    {/* Enhanced interactive overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/95 to-portfolio-accent-light/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 px-4">
                          {project.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4">
                          <Button
                            onClick={() => handleLiveProject(project.liveUrl)}
                            variant="outline"
                            size="sm"
                            className="border-white text-white hover:bg-white hover:text-portfolio-accent transition-all duration-300 hover:scale-105"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                          <Button
                            onClick={() => handleGithubProject(project.githubUrl)}
                            variant="outline"
                            size="sm"
                            className="border-white text-white hover:bg-white hover:text-portfolio-accent transition-all duration-300 hover:scale-105"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-portfolio-text">
                        {project.title}
                      </h3>
                      <p className="text-portfolio-text-muted leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-portfolio-accent mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced responsive Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                      <Button
                        onClick={() => handleLiveProject(project.liveUrl)}
                        className="portfolio-gradient hover:opacity-90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Project
                      </Button>
                      <Button
                        onClick={() => handleGithubProject(project.githubUrl)}
                        variant="outline"
                        className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
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
                Interested in seeing more of my work?
              </p>
              <Button
                onClick={() => window.open('https://github.com/anushka-dwivedi', '_blank')}
                variant="outline"
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;