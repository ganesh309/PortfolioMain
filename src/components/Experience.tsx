import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticlesBackground from './ParticlesBackground';

const Experience = () => {
  useTheme();

  const experiences = [
    {
      type: "internship",
      title: "PHP Developer Intern",
      company: "DCG Data-Core Systems (India) Pvt. Ltd.",
      location: "Onsite",
      period: "Jan 2025 - Jun 2025",
      description: "Project: University Management System (Admin, College & Student Portal)",
      achievements: [
        "Developed and maintained multiple modules including User Management, Student Master, College & Department Master",
        "Implemented Role-based Login and Fee Structure Management systems",
        "Built fees payment system with due calculation and late fine logic",
        "Developed subject allocation and result publication features",
        "Ensured smooth integration of backend with user interfaces"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "CSS"]
    },
    {
      type: "internship",
      title: "Cyber Security Intern",
      company: "Webel",
      location: "Onsite",
      period: "Jun 2024 - Jul 2024",
      description: "Worked on network and application security implementations",
      achievements: [
        "Configured firewall rules for enhanced network security",
        "Implemented HTTPS for secure communication channels",
        "Installed and managed SSL/TLS certificates",
        "Ensured data encryption and secure transmission"
      ],
      technologies: ["Kali Linux Tools", "Firewall Configuration", "SSL/TLS", "Network Security"]
    },
    {
      type: "internship",
      title: "Cyber Security Intern",
      company: "AiLabs",
      location: "Onsite",
      period: "Jul 2023 - Sept 2023",
      description: "Focused on web application security and penetration testing",
      achievements: [
        "Conducted comprehensive web application penetration testing",
        "Identified and resolved security vulnerabilities",
        "Performed security assessments using industry-standard tools",
        "Documented findings and implemented security fixes"
      ],
      technologies: ["Metasploit", "BurpSuite", "Nmap", "OWASP ZAP", "Kali Linux"]
    },
    {
      type: "internship",
      title: "Web Development Intern",
      company: "Octanet",
      location: "Remote",
      period: "Dec 2022 - Feb 2023",
      description: "Frontend development and web design",
      achievements: [
        "Designed and implemented a responsive landing page",
        "Added interactive functionality to enhance user experience",
        "Ensured cross-browser compatibility",
        "Optimized website performance"
      ],
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 min-h-screen relative overflow-hidden"
      style={{ backgroundColor: 'rgb(12 9 13)' }}
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
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            A timeline of my professional growth and key experiences
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-[#1a0b1e] z-20 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                  }`}>
                  <div className="bg-[rgb(54,40,61)]/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-blue-500/30 transition-all duration-300 group">

                    <div className="flex flex-col mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </span>
                        <div className="flex items-center text-gray-400 text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {exp.period}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-medium text-sm flex items-center mt-1">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {exp.company}
                        <span className="mx-2 text-gray-600">|</span>
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                      </p>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 italic border-l-2 border-purple-500/50 pl-3">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded hover:bg-white/10 transition-colors border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;