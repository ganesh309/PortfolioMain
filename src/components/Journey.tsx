import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Journey = () => {
  const { isDark } = useTheme();

  const education = [
    {
      icon: GraduationCap,
      title: "Bachelor's in Computer Science",
      institution: "Your University",
      period: "2018 - 2022",
      description: "Focused on software engineering principles, algorithms, and web development technologies.",
      achievements: ["Dean's List", "Best Project Award", "3.8 GPA"]
    },
    {
      icon: Award,
      title: "PHP Certification",
      institution: "Zend Technologies",
      period: "2021",
      description: "Certified PHP Developer with expertise in modern PHP practices and frameworks.",
      achievements: ["95% Score", "Advanced Level"]
    },
    {
      icon: BookOpen,
      title: "Web Development Bootcamp",
      institution: "Online Academy",
      period: "2020",
      description: "Intensive full-stack development course covering modern web technologies.",
      achievements: ["Top 10% Graduate", "Final Project Excellence"]
    }
  ];

  return (
    <section id="journey" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>My Journey</h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
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
                <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-lg shadow-lg border hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'} rounded-lg group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      <item.icon className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} group-hover:text-white transition-all duration-300`} />
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-all duration-300`}>{item.title}</h3>
                      <p className={`${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium group-hover:text-purple-600 transition-all duration-300`}>{item.institution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-block ${isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'} text-sm px-3 py-1 rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300`}>
                      {item.period}
                    </span>
                  </div>
                  
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300`}>{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, i) => (
                      <span key={i} className={`inline-block ${isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'} text-xs px-2 py-1 rounded-full group-hover:bg-green-600 group-hover:text-white group-hover:scale-105 transition-all duration-300`}>
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