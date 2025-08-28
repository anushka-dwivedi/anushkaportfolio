import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:anushkadwivedi2428@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anushkadwivedi2428@gmail.com",
      href: "mailto:anushkadwivedi2428@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8467969907",
      href: "tel:+918467969907"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anushka–dwivedi",
      href: "https://linkedin.com/in/anushka–dwivedi"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/anushka-dwivedi",
      href: "https://github.com/anushka-dwivedi"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-portfolio-text-muted text-lg">
              Ready to discuss opportunities or collaborate on projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-8 text-portfolio-text">
                Get in Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const isClickable = info.href !== "#";
                  
                  const content = (
                    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-portfolio-surface transition-colors">
                      <div className="p-3 rounded-lg bg-portfolio-accent/10">
                        <IconComponent className="w-5 h-5 text-portfolio-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-portfolio-text-muted font-medium">
                          {info.label}
                        </p>
                        <p className={`text-portfolio-text ${isClickable ? 'hover:text-portfolio-accent cursor-pointer' : ''}`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  return isClickable ? (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Quick Contact Note */}
              <div className="portfolio-card bg-portfolio-accent/5">
                <p className="text-portfolio-text-muted text-sm leading-relaxed">
                  <span className="font-semibold text-portfolio-accent">Open to Opportunities:</span>
                  {" "}I'm actively seeking internships and entry-level Software Engineer positions. 
                  Feel free to reach out for collaborations, job opportunities, or just to connect!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in delay-200">
              <h3 className="text-2xl font-semibold mb-8 text-portfolio-text">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full portfolio-gradient hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;