import React from 'react';
import ParticlesBackground from './ParticlesBackground';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgb(0 0 0) 0%, rgb(26 11 30) 25%, rgb(0 0 0) 60%, rgb(0 0 0) 100%)'
      }}
    >
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Me</span></h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300">
            Get to know the person behind the code
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image with floating bubbles */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 group">
              {/* Floating Bubbles - Custom blur */}
              <div className="absolute -top-6 -left-4 w-12 h-12 rounded-full bg-purple-500/70 animate-float-1" style={{ '--tw-blur': 'blur(1.5px)' } as React.CSSProperties}></div>
              <div className="absolute -bottom-4 -right-6 w-16 h-16 rounded-full bg-blue-400/60 animate-float-2" style={{ '--tw-blur': 'blur(1.5px)' } as React.CSSProperties}></div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 rounded-full bg-indigo-400/70 animate-float-3" style={{ '--tw-blur': 'blur(1.5px)' } as React.CSSProperties}></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur-xl animate-pulse"></div>
              
              {/* Main circular image container */}
              <div className="relative w-full h-full rounded-full border-4 border-white/20 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] hover:scale-105">
                <img 
                  src="/about3.png" 
                  alt="Ganesh Ghorai"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping-slow"></div>
              <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-ping-slower"></div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-3/4 ml-0 md:ml-8">
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a Backend Developer with 1 year of hands-on experience specializing in PHP and Laravel. I've successfully built 2 major projects focused on creating robust, scalable, and efficient backend systems.
              </p>
              
              <p>
                I have solid experience working with MySQL, JavaScript, React, Docker, and n8n, which helps me build full-fledged web applications that integrate seamlessly across different services.
              </p>
              
              <p>
                Although my core strength lies in backend development, I'm also passionate about frontend development, exploring modern tools and frameworks to create smooth, interactive user experiences.
              </p>
              
              <p>
                I'm driven by solving real-world problems with clean, maintainable code and a focus on performance, security, and user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;