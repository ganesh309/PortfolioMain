import React from 'react';
import { Code, Heart, Lightbulb, Target } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: Heart,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Always staying up-to-date with the latest technologies and best practices."
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that exceed expectations."
    }
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>About Me</h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 lg:hidden">
              <img 
                src="/path-to-your-about-photo.jpg" 
                alt="Your Name working"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              />
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>My Story</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
              I'm a passionate PHP developer with a love for creating web applications that make a difference. 
              My journey began with curiosity about how websites work, and it has evolved into a career dedicated 
              to building robust, scalable solutions.
            </p>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
              With experience in modern PHP frameworks like Laravel and Symfony, I specialize in backend development 
              while maintaining a strong understanding of frontend technologies. I believe in writing clean, 
              maintainable code and following best practices.
            </p>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-6">
            <div className="hidden lg:block">
              <img 
                src="/path-to-your-about-photo.jpg" 
                alt="Your Name working"
                className="w-full rounded-lg shadow-lg mb-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border`}>
                <div className="flex items-center mb-4">
                  <div className={`p-2 ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'} rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <highlight.icon className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} group-hover:text-white transition-all duration-300`} />
                  </div>
                  <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} ml-3 group-hover:text-blue-600 transition-all duration-300`}>{highlight.title}</h4>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300`}>{highlight.description}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;