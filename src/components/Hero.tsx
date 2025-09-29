import { MapPin, Mail, Phone, Download } from 'lucide-react';
import Typewriter from './Typewriter';
import { useTheme } from '../contexts/ThemeContext';
import TechBackground from './TechBackground';

const Hero = () => {
  const scrollToProjects = (e?: React.MouseEvent) => {
    e?.preventDefault();
    
    // Update URL
    const newUrl = `${window.location.pathname}#projects`;
    window.history.pushState({}, '', newUrl);
    
    // Simple scroll to element
    const element = document.getElementById('projects');
    if (element) {
      const headerHeight = 80;
      
      // Use native smooth scroll
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Manually adjust for header
      window.scrollBy(0, -headerHeight);
    }
  };

  useTheme(); // Using theme context for potential future use

  return (
    <section className="min-h-screen relative pt-20">
      {/* 3D Tech Background */}
      <TechBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent dark:via-black/50 dark:to-black/80 pointer-events-none"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-8 md:p-12 shadow-2xl ring-1 ring-white/10 dark:ring-white/5 w-full mb-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Column - Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
              <p className="text-blue-400 text-2xl md:text-3xl mb-1 font-medium font-display">
                Hi, My Name is,
              </p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white font-display">
                Ganesh <Typewriter text="Ghorai" className="inline text-blue-300" />
              </h1>
              
              <p className="text-xl md:text-2xl mb-6 text-blue-100 font-medium font-display">
                Computer Science Engineer | Backend Developer
              </p>
              
              <div className="space-y-3 mb-8 text-blue-100">
                <div className="flex items-center font-display">
                  <MapPin className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                  <span>Kolkata, West Bengal, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                  <a href="mailto:ganeshghorai444@gmail.com" className="hover:text-white transition-colors font-display">
                    ganeshghorai444@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                  <a href="tel:+918967228774" className="hover:text-white transition-colors font-display">
                    +91 89672 28774
                  </a>
                </div>
              </div>
              
              <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                B.Tech in Computer Science & Engineering (Cyber Security) | 2021-2025 | CGPA: 8.49
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="/Ganesh Ghorai-CV .pdf" 
                  download="Ganesh_Ghorai_CV.pdf"
                  className="bg-blue-600 hover:bg-blue-500 hover:scale-105 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group w-full sm:w-auto"
                >
                  <Download className="h-5 w-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  <span>Download CV</span>
                </a>
                <button 
                  onClick={scrollToProjects}
                  className="border-2 border-white/30 hover:bg-white/10 hover:scale-105 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl group w-full sm:w-auto"
                >
                  <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">View Projects</span>
                </button>
              </div>

              <div className="flex space-x-6 items-end">
                <a 
                  href="https://github.com/ganesh309" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-0 hover:scale-110 transition-all duration-300 group"
                  aria-label="GitHub Profile"
                >
                  <img src="/github.png" alt="GitHub" className="h-12 w-12 group-hover:rotate-12 transition-all duration-300 mb-1" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ganesh-ghorai-482407243" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-0 hover:scale-110 transition-all duration-300 group"
                  aria-label="LinkedIn Profile"
                >
                  <img src="/linkedin.png" alt="LinkedIn" className="h-16 w-16 group-hover:rotate-12 transition-all duration-300" />
                </a>
                <a 
                  href="mailto:ganeshghorai444@gmail.com" 
                  className="p-0 hover:scale-110 transition-all duration-300 group"
                  aria-label="Email Me"
                >
                  <img src="/gmail.png" alt="Gmail" className="h-16 w-16 group-hover:rotate-12 transition-all duration-300" />
                </a>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mt-8 lg:mt-0 lg:pl-12">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-6 scale-105 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl transform -rotate-6 scale-105 -z-10"></div>
                <img 
                  src="/portfoliomain1.png" 
                  alt="Ganesh Ghorai - Portfolio"
                  className="w-full h-auto rounded-2xl transform transition-all duration-500 hover:scale-105 object-cover relative z-10 border-4 border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;