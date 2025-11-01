import React from 'react';
import { Code, Database, Globe, Server, Wrench, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticlesBackground from './ParticlesBackground';

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
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Skills</span> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#1a0b1e] border border-purple-900/50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer hover:border-purple-500/50">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-900/50 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-800 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <category.icon className="h-6 w-6 text-purple-400 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white ml-3 group-hover:text-purple-400 transition-all duration-300">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-all duration-300">{skill.name}</span>
                      <span className="text-sm text-purple-300 group-hover:text-white group-hover:font-semibold transition-all duration-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 group-hover:h-3 transition-all duration-300 overflow-hidden relative">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:from-purple-600 group-hover:to-purple-700 relative overflow-hidden"
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