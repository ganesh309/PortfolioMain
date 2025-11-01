import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticlesBackground from './ParticlesBackground';

const Experience = () => {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sectionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
      period: "Jun 2023 - Jul 2023",
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
      style={{
        background: 'linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(26, 11, 30) 25%, rgb(27, 16, 31) 60%, rgb(0, 0, 0) 100%)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"></span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional growth and key experiences
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-4 md:left-1/2 h-full w-0.5 ${isDark ? 'bg-gradient-to-b from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-b from-blue-400/20 to-purple-400/20'}`}></div>
          
          {/* Animated dot */}
          <div 
            className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full flex items-center justify-center z-20 transition-all duration-500 ease-out ${isDark ? 'bg-gray-800' : 'bg-white'} border-4 ${isDark ? 'border-blue-400' : 'border-blue-500'} shadow-lg shadow-blue-500/20`}
            style={{
              top: `calc(${activeIndex * 100}% + ${activeIndex * 2.5}rem + 2rem)`,
              marginLeft: '-1rem',
              transform: 'translateY(-50%)',
              opacity: 1
            }}
          >
            <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-500'} animate-pulse`}></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                ref={el => sectionRefs.current[index] = el}
                key={index} 
                className={`relative pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-12' : 'md:pl-1/2 md:pl-12'}`}
              >
                <div className="p-8 rounded-2xl relative z-10 transition-all duration-300 group hover:shadow-2xl bg-[#1a0b1e]/80 backdrop-blur-sm border border-purple-900/50 hover:border-purple-500/30">
                  {/* Role and Company */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-purple-900/50 text-purple-300">
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </div>
                      <h3 className="text-2xl font-bold mb-1 text-white">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-purple-400">
                        @ {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end space-y-1">
                      <div className="flex items-center text-purple-300 font-medium">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 flex items-center text-gray-300">
                      <span className="w-4 h-0.5 mr-2 bg-purple-400"></span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start group">
                          <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-purple-400"></span>
                          <span className="text-sm leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed border-purple-900/50">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs font-medium px-3 py-1.5 rounded-full transition-all bg-purple-900/50 text-purple-200 hover:bg-purple-800/70 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Connection line between dots */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-4 md:left-1/2 w-0.5 h-8 -bottom-8 z-0 bg-gradient-to-b from-purple-500/20 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -left-10 top-1/4 w-32 h-32 rounded-full opacity-20 blur-3xl bg-purple-500/30"></div>
          <div className="absolute -right-10 bottom-1/4 w-40 h-40 rounded-full opacity-20 blur-3xl bg-blue-500/30"></div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;