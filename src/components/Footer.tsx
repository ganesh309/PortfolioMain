import React from 'react';
import { Code, Heart, ArrowUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${isDark ? 'bg-black' : 'bg-gray-900'} text-white py-12 relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="group flex items-center">
                <Code className="h-8 w-8 text-blue-400 group-hover:text-blue-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                <span className="ml-2 text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">Your Portfolio</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed hover:text-gray-200 transition-all duration-300">
              PHP Developer passionate about creating robust web applications and solving complex problems through clean, efficient code.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-all duration-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white hover:translate-x-2 hover:text-blue-400 transition-all duration-300 inline-block">About</a></li>
              <li><a href="#journey" className="text-gray-300 hover:text-white hover:translate-x-2 hover:text-blue-400 transition-all duration-300 inline-block">Journey</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white hover:translate-x-2 hover:text-blue-400 transition-all duration-300 inline-block">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white hover:translate-x-2 hover:text-blue-400 transition-all duration-300 inline-block">Projects</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white hover:translate-x-2 hover:text-blue-400 transition-all duration-300 inline-block">Experience</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white hover:translate-x-2 hover:text-blue-400 transition-all duration-300 inline-block">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-all duration-300">Let's Connect</h3>
            <p className="text-gray-300 mb-4 hover:text-gray-200 transition-all duration-300">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <a 
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-lg px-6 py-2 rounded-lg transition-all duration-300 inline-block group"
            >
              <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">Get In Touch</span>
            </a>
          </div>
        </div>

        <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-800'} mt-12 pt-8 flex flex-col md:flex-row justify-between items-center`}>
          <div className="flex items-center text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-2 hover:scale-125 hover:text-red-400 transition-all duration-300 animate-pulse" />
            <span>by Your Name</span>
          </div>
          <div className="text-gray-300 hover:text-gray-200 transition-all duration-300">
            <span>© 2024 All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-blue-600 hover:bg-blue-700 hover:scale-110 hover:rotate-12 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl group"
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6 group-hover:scale-110 transition-all duration-300" />
      </button>
    </footer>
  );
};

export default Footer;