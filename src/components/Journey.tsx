import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticlesBackground from './ParticlesBackground';

const Journey = () => {
  const { isDark } = useTheme();

  const education = [
    {
      icon: GraduationCap,
      title: "Secondary Examination",
      institution: "Mabarakpur A. M. Sc. High School",
      period: "2019",
      description: "Completed secondary education with strong academic performance.",
      achievements: ["84.14%", "Academic Excellence", "Science & Mathematics Focus"]
    },
    {
      icon: GraduationCap,
      title: "Higher Secondary Examination",
      institution: "Mabarakpur A. M. Sc. High School",
      period: "2019 – 2021",
      description: "Focused on the Science stream with a strong foundation in Physics, Chemistry, and Mathematics.",
      achievements: ["87.6%", "Science Stream"]
    },
    {
      icon: GraduationCap,
      title: "B.Tech in Computer Science & Engineering (Cyber Security Specialization)",
      institution: "The Neotia University",
      period: "2021 – 2025",
      description: "In-depth study of computer science, software engineering, cybersecurity principles and Web Development.",
      achievements: ["Current GPA: 8.49", "Cyber Security Projects", "Web Development Projects"]
    }
  ];

  return (
    <section 
      id="journey" 
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
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Journey</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The educational path that shaped my development career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full ${isDark ? 'bg-blue-800' : 'bg-blue-200'}`}></div>

          {education.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}>
              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 ${isDark ? 'border-gray-900' : 'border-white'} shadow-lg z-10`}></div>

              {/* Content */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="bg-[#170a1b] border border-purple-900/50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-900/50 rounded-lg group-hover:bg-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <item.icon className="h-6 w-6 text-purple-400 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-all duration-300">{item.title}</h3>
                      <p className="text-purple-300 font-medium group-hover:text-purple-200 transition-all duration-300">{item.institution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-900/50 text-purple-200 text-sm px-3 py-1 rounded-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-800 group-hover:text-white transition-all duration-300">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-100 transition-all duration-300">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, i) => (
                      <span key={i} className="inline-block bg-purple-900/50 text-purple-300 text-xs px-2 py-1 rounded-full group-hover:bg-purple-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;