import { MapPin, Mail, Phone, Download } from 'lucide-react';
import Hero3D from './Hero3D';
import Typewriter from './Typewriter';


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



  return (
    <section className="min-h-screen relative pt-20 overflow-hidden">
      {/* 3D Background */}
      <Hero3D />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent dark:via-black/50 dark:to-black/80 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="dark:bg-[#1a0b1e]/60 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(124,58,237,0.1)] ring-1 ring-white/10 dark:ring-white/5 w-full mb-12 border border-white/5 hover:border-purple-500/30 transition-all duration-500">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Column - Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
              <p className="text-cyan-400 text-2xl md:text-3xl mb-1 font-medium font-display tracking-wide">
                Hi, My Name is,
              </p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white font-display">
                Ganesh <Typewriter text="Ghorai" className="inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#4986c6e3]" />
              </h1>

              <p className="text-xl md:text-2xl mb-4 text-gray-300 font-medium font-display">
                Computer Science Engineer | <span className="text-purple-400">Backend Developer</span>
              </p>

              <div className="flex items-center gap-3 mb-8 text-gray-400 font-display text-base md:text-lg bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span>
                  PHP Developer at <span className="text-cyan-400 font-semibold">AiHello</span> <span className="text-gray-500 mx-1">|</span> Amazon Ecommerce Automation
                </span>
              </div>

              <div className="space-y-3 mb-8 text-gray-300">
                <div className="flex items-center font-display group">
                  <MapPin className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                  <span>Kolkata, West Bengal, India</span>
                </div>
                <div className="flex items-center group">
                  <Mail className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                  <a href="mailto:ganeshghorai444@gmail.com" className="hover:text-cyan-300 transition-colors font-display">
                    ganeshghorai444@gmail.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <Phone className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                  <a href="tel:+918967228774" className="hover:text-cyan-300 transition-colors font-display">
                    +91 89672 28774
                  </a>
                </div>
              </div>

              <p className="text-lg mb-8 text-gray-400 leading-relaxed border-l-4 border-purple-500/50 pl-4">
                B.Tech in Computer Science & Engineering (Cyber Security) | 2021-2025 | CGPA: <span className="text-cyan-400 font-bold">8.49</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/Ganesh Ghorai-CV .pdf"
                  download="Ganesh_Ghorai_CV.pdf"
                  className="bg-[#133f7a] hover:bg-[#1a529e] hover:scale-105 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 group w-full sm:w-auto"
                >
                  <Download className="h-5 w-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  <span>Download Resume</span>
                </a>
                <button
                  onClick={scrollToProjects}
                  className="relative px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 group w-full sm:w-auto overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                  <div className="absolute inset-0 border-2 border-purple-500/30 rounded-lg group-hover:border-purple-400/60 transition-colors"></div>
                  <span className="relative group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">View Projects</span>
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
                  <img src="/github.png" alt="GitHub" className="h-12 w-12 group-hover:rotate-12 transition-all duration-300 mb-1 opacity-80 group-hover:opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ganesh-ghorai-482407243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-0 hover:scale-110 transition-all duration-300 group"
                  aria-label="LinkedIn Profile"
                >
                  <img src="/linkedin.png" alt="LinkedIn" className="h-16 w-16 group-hover:rotate-12 transition-all duration-300 opacity-80 group-hover:opacity-100 drop-shadow-[0_0_10px_rgba(0,119,181,0.5)]" />
                </a>
                <a
                  href="mailto:ganeshghorai444@gmail.com"
                  className="p-0 hover:scale-110 transition-all duration-300 group"
                  aria-label="Email Me"
                >
                  <img src="/gmail.png" alt="Gmail" className="h-16 w-16 group-hover:rotate-12 transition-all duration-300 opacity-80 group-hover:opacity-100 drop-shadow-[0_0_10px_rgba(234,67,53,0.5)]" />
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mt-8 lg:mt-0 lg:pl-12">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl relative group">
                {/* Glowing blobs behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-700 to-white/50 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>

                <div
                  className="absolute inset-0 rounded-2xl transform rotate-6 scale-105 -z-10 border border-white/5"
                  style={{
                    background: 'linear-gradient(to top right, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.1))'
                  }}
                ></div>
                <div
                  className="absolute inset-0 rounded-2xl transform -rotate-6 scale-105 -z-10 border border-white/5"
                  style={{
                    background: 'linear-gradient(to top right, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.05))'
                  }}
                ></div>
                <img
                  src="/portfoliomain1.png"
                  alt="Ganesh Ghorai - Portfolio"
                  className="w-full h-auto rounded-2xl transform transition-all duration-500 hover:scale-105 object-cover relative z-10 border border-white/20 shadow-2xl"
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