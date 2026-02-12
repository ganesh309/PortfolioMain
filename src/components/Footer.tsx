import React from 'react';
import { Code, Heart } from 'lucide-react';

import ParticlesBackground from './ParticlesBackground';

const Footer = () => {

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="text-white py-12 relative overflow-hidden" style={{ backgroundColor: 'rgb(12 9 13)', position: 'relative' }}>
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full">
        <ParticlesBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="group flex items-center">
                <Code className="h-8 w-8 text-cyan-400 group-hover:text-purple-400 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                <span className="ml-2 text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">Ganesh Ghorai</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed hover:text-gray-200 transition-all duration-300">
              PHP Developer passionate about creating robust web applications and solving complex problems through clean, efficient code.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-cyan-400 transition-all duration-300">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Journey', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                    className="text-gray-300 hover:text-white hover:translate-x-2 hover:text-cyan-400 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-cyan-400 transition-all duration-300">Let's Connect</h3>
            <p className="text-gray-300 mb-4 hover:text-gray-200 transition-all duration-300">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-[#133f7a] hover:bg-[#133f7a]/90 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 px-6 py-2 rounded-lg transition-all duration-300 inline-block group"
            >
              <span className="text-white font-medium">Get In Touch</span>
            </a>
          </div>
        </div>

        <div className={`border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center`}>
          <div className="flex items-center text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-2 hover:scale-125 hover:text-red-400 transition-all duration-300 animate-pulse" />
            <span>by Ganesh</span>
          </div>
          <div className="text-gray-300 hover:text-gray-200 transition-all duration-300">
            <span>© 2025 All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;