import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticlesBackground from './ParticlesBackground';

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
      className="py-20 min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(26, 11, 30) 25%, rgb(27, 16, 31) 60%, rgb(0, 0, 0) 100%)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1a0b1e] border border-purple-900/50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer hover:border-purple-500/50">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-purple-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-200 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Calendar className="h-4 w-4 inline mr-1" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-all duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-100 transition-all duration-300">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="inline-block bg-purple-900/50 text-purple-200 text-xs px-2 py-1 rounded-full group-hover:bg-purple-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                        <Tag className="h-3 w-3 inline mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="inline-block bg-gray-800/70 text-gray-300 text-xs px-2 py-1 rounded-full group-hover:bg-purple-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-purple-900/80 text-white rounded-lg hover:bg-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn border border-purple-700/50 hover:border-purple-500"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-all duration-300" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn border border-purple-500/50"
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