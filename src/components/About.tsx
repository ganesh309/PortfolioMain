import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section 
      id="about" 
      className={`py-20 ${isDark ? 'bg-gray-900' : ''}`}
      style={!isDark ? {
        background: 'linear-gradient(90deg, #fbf5f3 0%, #fbeeea 25%, #c3b2fc 60%, #805dfd 100%)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>About Me</h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center items-start">
            <div className="relative w-4/5 sm:w-2/3 md:w-5/6 max-w-lg group">
              {/* Background gradient layers - matching home page style */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${
                isDark 
                  ? 'from-blue-500/30 via-purple-500/20 to-pink-500/20' 
                  : 'from-blue-300/40 via-purple-200/30 to-pink-200/30'
              } rounded-3xl transform rotate-3 scale-105 -z-10 blur-sm`}></div>
              <div className={`absolute inset-0 bg-gradient-to-tr ${
                isDark 
                  ? 'from-blue-500/20 via-purple-500/15 to-pink-500/15' 
                  : 'from-blue-200/30 via-purple-100/20 to-pink-100/20'
              } rounded-3xl transform -rotate-3 scale-105 -z-10 blur-sm`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${
                isDark 
                  ? 'from-blue-500/10 via-purple-500/10 to-pink-500/10' 
                  : 'from-blue-100/20 via-purple-50/10 to-pink-50/10'
              } rounded-3xl transform rotate-12 scale-105 -z-10`}></div>
              
              {/* Main image with border and shadow */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/20">
                <img 
                  src="/about3.png" 
                  alt="Ganesh Ghorai"
                  className="w-full h-auto transition-all duration-500 transform group-hover:scale-105"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                    transition: 'all 0.5s ease-out',
                    willChange: 'transform, box-shadow, filter'
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
                  }}
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className={`p-6 sm:p-8 rounded-2xl ${isDark ? 'bg-gray-800/40 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm shadow-lg'}`}>
              <h3 className={`text-3xl font-bold mb-6 relative inline-block ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                My Story
                <span className={`absolute bottom-0 left-0 w-1/3 h-1 rounded-full ${
                  isDark ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'
                }`}></span>
              </h3>
              
              <div className={`space-y-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className="relative pl-6 border-l-2 border-blue-400/30">
                  <div className={`absolute w-4 h-4 rounded-full -left-2 top-1.5 ${
                    isDark ? 'bg-blue-400' : 'bg-blue-500'
                  }`}></div>
                  <p className="text-lg">
                    I started my journey in technology when I began my B.Tech in Computer Science and Engineering with a specialization in Cyber Security. During the early years, I worked on a few projects in the field of cyber security, which gave me a solid foundation in problem-solving and secure systems.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-purple-400/30">
                  <div className={`absolute w-4 h-4 rounded-full -left-2 top-1.5 ${
                    isDark ? 'bg-purple-400' : 'bg-purple-500'
                  }`}></div>
                  <p>
                    By the time I reached my 3rd year, I discovered my real passion—<span className={`font-medium ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>web development</span>. I dove deep into this field, experimenting, learning, and building projects that helped me grow as a developer. Over time, I found my focus in <span className={`font-medium ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>PHP</span> and chose <span className={`font-medium ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>Laravel</span> as my primary framework.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-indigo-400/30">
                  <div className={`absolute w-4 h-4 rounded-full -left-2 top-1.5 ${
                    isDark ? 'bg-indigo-400' : 'bg-indigo-500'
                  }`}></div>
                  <p>
                    Since then, I've built <span className={`font-medium ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>two major projects</span> with Laravel, gaining hands-on experience in developing robust, scalable web applications. Every project I take on is not just about writing code but about learning, improving, and creating solutions that make an impact.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-pink-400/30">
                  <div className={`absolute w-4 h-4 rounded-full -left-2 top-1.5 ${
                    isDark ? 'bg-pink-400' : 'bg-pink-500'
                  }`}></div>
                  <p>
                    Outside of coding, I'm always exploring new technologies, experimenting with fresh ideas, and pushing myself to become a better developer every day.
                  </p>
                </div>
              </div>
              
              <div className={`mt-8 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className={`text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  "Turning ideas into reality, one line of code at a time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;