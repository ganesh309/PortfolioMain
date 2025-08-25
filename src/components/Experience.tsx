import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
      className={`py-20 ${isDark ? 'bg-gray-900' : ''}`}
      style={!isDark ? {
        background: 'linear-gradient(90deg, #fbf5f3 0%, #fbeeea 25%, #c3b2fc 60%, #805dfd 100%)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
            Work Experience
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My Professional <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'}`}>Journey</span>
          </h2>
          <div className={`h-1 w-24 bg-gradient-to-r ${isDark ? 'from-blue-500 to-purple-500' : 'from-blue-400 to-purple-400'} mx-auto mb-6 rounded-full`}></div>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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
                <div className={`p-8 rounded-2xl relative z-10 transition-all duration-300 group hover:shadow-2xl ${
                  isDark 
                    ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/30' 
                    : 'bg-white border border-gray-100 hover:border-blue-100'
                }`}>
                  {/* Role and Company */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </div>
                      <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title}
                      </h3>
                      <p className={`text-lg font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        @ {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end space-y-1">
                      <div className={`flex items-center ${isDark ? 'text-blue-300' : 'text-blue-600'} font-medium`}>
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                    {exp.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold mb-3 flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className={`w-4 h-0.5 mr-2 ${isDark ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start group">
                          <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            isDark ? 'bg-blue-400' : 'bg-blue-500'
                          }`}></span>
                          <span className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed border-gray-200 dark:border-gray-700">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
                          isDark 
                            ? 'bg-gray-700/50 text-blue-300 hover:bg-blue-900/50' 
                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Connection line between dots */}
                {index < experiences.length - 1 && (
                  <div className={`absolute left-4 md:left-1/2 w-0.5 h-8 -bottom-8 z-0 ${
                    isDark ? 'bg-gradient-to-b from-blue-400/20 to-transparent' : 'bg-gradient-to-b from-blue-400/20 to-transparent'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className={`absolute -left-10 top-1/4 w-32 h-32 rounded-full opacity-20 blur-3xl ${
            isDark ? 'bg-blue-500' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute -right-10 bottom-1/4 w-40 h-40 rounded-full opacity-20 blur-3xl ${
            isDark ? 'bg-purple-500' : 'bg-blue-300'
          }`}></div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;