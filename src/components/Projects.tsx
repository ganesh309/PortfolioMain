import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag, Lock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticlesBackground from './ParticlesBackground';

const Projects = () => {
  useTheme();

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
      image: "/universitymanagementsystem.png",
      imageFit: "object-contain bg-black/20",
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
      title: "Portfolio Website",
      description: "A modern, interactive developer portfolio built with React, TypeScript, and Tailwind CSS. Features a custom AI chatbot (G-Insight) powered by StepFun API and RAG architecture for intelligent interaction.",
      image: "/portfolioProject-image.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "StepFun API"],
      features: ["AI Chatbot with RAG", "Glassmorphism UI", "Responsive Design", "Smart Search"],
      github: "https://github.com/ganesh309/PortfolioMain",
      live: "https://ganeshghorai.in/",
      date: "2026"
    },
    {
      title: "Gangasagar Tourism",
      description: "A comprehensive tourism website dedicated to Gangasagar Island. It allows tourists to book cars and hotels, view famous places, and access essential travel information. This project focuses on providing a user-friendly interface for travelers planning their visit to the pilgrimage site.",
      image: "/Tourism.png",
      technologies: ["TypeScript", "JavaScript", "HTML", "CSS"],
      features: ["Car Booking", "Hotel Booking", "Places to Visit", "Travel Information"],
      github: "", // Confidential
      live: "https://www.gangasagardham.com/",
      date: "2023"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 min-h-screen relative overflow-hidden bg-[rgb(12,9,13)]"
    >
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            A collection of my recent work and contributions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[rgb(54,40,61)]/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48 sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${(project as any).imageFit || 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c090d] via-[#0c090d]/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.date}
                </div>
              </div>

              <div className="p-6 md:p-8 relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors relative z-10">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300 relative z-10">
                  {project.description}
                </p>

                <div className="space-y-4 mb-8 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-900/20 text-cyan-300 text-xs font-medium border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors shadow-[0_0_5px_rgba(6,182,212,0.1)]">
                        <Tag className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <span key={i} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5 hover:border-purple-500/30 transition-colors">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 4 && (
                      <span className="text-xs text-gray-500 px-2 py-1">+ {project.features.length - 4} more</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-10">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-white/5 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 group/btn border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:text-cyan-400" />
                      Code
                    </a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center px-4 py-2 bg-white/5 text-gray-500 rounded-xl font-medium border border-white/5 cursor-not-allowed">
                      <Lock className="w-4 h-4 mr-2" />
                      Confidential
                    </div>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-[#133f7a] text-white rounded-xl font-medium hover:bg-[#1a529e] transition-all duration-300 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;