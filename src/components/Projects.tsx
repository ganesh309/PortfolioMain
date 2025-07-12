import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Laravel, featuring user authentication, payment integration, order management, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Laravel", "MySQL", "Bootstrap", "Stripe API"],
      features: ["User Authentication", "Payment Gateway", "Order Management", "Admin Panel"],
      github: "#",
      live: "#",
      date: "2023"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, file sharing, and team collaboration features built with PHP and WebSocket.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "WebSocket", "MySQL", "JavaScript"],
      features: ["Real-time Updates", "File Sharing", "Team Collaboration", "Task Tracking"],
      github: "#",
      live: "#",
      date: "2023"
    },
    {
      title: "Blog Management System",
      description: "A content management system for bloggers with rich text editor, SEO optimization, and social media integration.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Symfony", "PostgreSQL", "Twig", "Redis"],
      features: ["Rich Text Editor", "SEO Optimization", "Social Integration", "Comment System"],
      github: "#",
      live: "#",
      date: "2022"
    },
    {
      title: "API Gateway Service",
      description: "A microservices API gateway with rate limiting, authentication, and request routing built with modern PHP architecture.",
      image: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "Docker", "Redis", "JWT"],
      features: ["Rate Limiting", "Authentication", "Request Routing", "Monitoring"],
      github: "#",
      live: "#",
      date: "2022"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Featured Projects</h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer border hover:border-blue-200`}>
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className={`absolute top-4 right-4 ${isDark ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300`}>
                  <Calendar className="h-4 w-4 inline mr-1" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-blue-600 transition-all duration-300`}>{project.title}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300`}>{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={`inline-block ${isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'} text-xs px-2 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300`}>
                        <Tag className="h-3 w-3 inline mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className={`inline-block ${isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'} text-xs px-2 py-1 rounded-full group-hover:bg-green-600 group-hover:text-white group-hover:scale-105 transition-all duration-300`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-all duration-300" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-all duration-300" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;