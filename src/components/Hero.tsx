import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className={`min-h-screen flex items-center justify-center ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'
    } text-white relative overflow-hidden pt-20`}>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 relative group">
              <img 
                src="/path-to-your-photo.jpg" 
                alt="Your Name - PHP Developer"
                className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-white/60 group-hover:shadow-3xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Your Name
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            PHP Developer & Web Enthusiast
          </p>
          
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating robust web applications and solving complex problems through clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl group">
              <Download className="h-5 w-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span>Download CV</span>
            </button>
            <button 
              onClick={scrollToProjects}
              className="border-2 border-white/30 hover:bg-white/10 hover:scale-105 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl group"
            >
              <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">View Projects</span>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="p-4 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl group">
              <Github className="h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            </a>
            <a href="#" className="p-4 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl group">
              <Linkedin className="h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            </a>
            <a href="#" className="p-4 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl group">
              <Mail className="h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;