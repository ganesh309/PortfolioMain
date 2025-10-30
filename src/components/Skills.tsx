import React from 'react';
import { Code, Database, Globe, Server, Wrench, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "C", level: 80 },
        { name: "Java (OOP)", level: 85 },
        { name: "PHP", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Linux", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 }
      ]
    },
    {
      icon: Server,
      title: "Frameworks",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "React", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 ${isDark ? 'bg-gray-900' : ''}`}
      style={!isDark ? {
        background: 'linear-gradient(90deg, #fbf5f3 0%, #fbeeea 25%, #c3b2fc 60%, #805dfd 100%)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            My Skills & Expertise
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer border hover:border-blue-200`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'} rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  <category.icon className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} group-hover:text-white transition-all duration-300`} />
                </div>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} ml-3 group-hover:text-blue-600 transition-all duration-300`}>{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-300`}>{skill.name}</span>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} group-hover:text-blue-600 group-hover:font-semibold transition-all duration-300`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 group-hover:h-3 transition-all duration-300 overflow-hidden relative`}>
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:from-blue-600 group-hover:to-purple-700 relative overflow-hidden"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-wave"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add this to your global CSS or in a style tag
const waveKeyframes = `
  @keyframes wave {
    0% {
      transform: translateX(-100%) skew(20deg);
    }
    100% {
      transform: translateX(100%) skew(20deg);
    }
  }
`;

// Add the animation styles
const styleElement = document.createElement('style');
styleElement.textContent = `
  .animate-wave {
    animation: wave 1.5s ease-in-out infinite;
  }
  ${waveKeyframes}
`;

document.head.appendChild(styleElement);

export default Skills;