import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: "Academic Guidance System (MentorMate)",
      description: "A Laravel-based web application designed to facilitate seamless mentorship between faculty members and students. It helps institutions assign mentors to students—especially those with academic challenges—and provides a structured way to monitor student progress, facilitate communication, and maintain mentorship records.",
      image: "/mentormentee.png",
      technologies: ["Laravel 9", "MySQL", "Bootstrap", "jQuery", "PHP"],
      features: [
        "🔐 Admin Authentication (Email/Password)",
        "🌍 Dynamic Address Selection (Country/State/District)",
        "📉 Data Visualization for Attendance",
        "📉 Automatic Mentee Assignment (Low SGPA)",
        "🧑‍🏫 Mentor Assignment & Reassignment",
        "📋 Mentor & Mentee Management",
        "📤 Secure Credential Storage (SHA-256)",
        "📬 Email-based Password Reset (OTP)",
        "🔍 Advanced Search & Filtering",
        "📊 Dashboard Analytics"
      ],
      github: "https://github.com/ganesh309/Academic_Guidance_System",
      live: "https://www.loom.com/share/736c22df4aaf4b5ab00648e1dd1d9d70?sid=ba24b1df-17aa-4055-9bc1-5a323da8dc20",
      date: "2025"
    },
    {
      title: "University Management System",
      description: "An integrated platform built with Laravel to simplify student enrollment, financial tracking, and administrative tasks. It provides multi-step registration, hierarchical address mapping, advanced search, fee scheduling, and secure authentication with optional two-factor verification for enhanced security.",
      image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "CSS"],
      features: [
        "👥 User & Role-based Access Control",
        "🎓 Student Enrollment & Management",
        "🏛️ College & Department Management",
        "💰 Fee Structure & Payment Processing",
        "📚 Subject Allocation & Management",
        "📊 Marks Entry & Result Publication",
        "⏰ Automated Due & Late Fee Calculation",
        "🔍 Advanced Search & Reporting",
        "📧 Forgot Password with OTP & Reset Link",
        "🖼️ Image Upload with Cropping",
        "📈 Department-wise Data Visualization"
      ],
      github: "https://github.com/ganesh309/University_Management_System",
      live: "https://www.loom.com/share/87ea23ec7387480a88d0e58837b497d4?sid=53e029f0-90fd-466c-8e2d-ba68e6dd1cc7",
      date: "2025"
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
    <section 
      id="projects" 
      className={`py-20 ${isDark ? 'bg-gray-900' : ''}`}
      style={!isDark ? {
        background: 'linear-gradient(90deg, #fbf5f3 0%, #fbeeea 25%, #c3b2fc 60%, #805dfd 100%)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Featured Projects
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            A collection of my recent work and contributions
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