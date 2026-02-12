import RevealOnScroll from './RevealOnScroll';
import EnergyCanvas from './EnergyCanvas';

const About = () => {
  return (
    <section
      id="about"
      className="pt-20 pb-20 text-white relative overflow-hidden"
      style={{ backgroundColor: 'rgb(12 9 13)' }}
    >
      {/* Animated Energy Background */}
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        <EnergyCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight font-display">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-gradient-x">Me</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-4 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get to know the person behind the code
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image with floating bubbles */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
              {/* Floating Bubbles - Adjusted colors to Cyan/Blue */}
              <div className="absolute -top-6 -left-4 w-12 h-12 rounded-full bg-cyan-500/30 animate-float-1 blur-sm border border-cyan-400/30"></div>
              <div className="absolute -bottom-4 -right-6 w-16 h-16 rounded-full bg-purple-500/30 animate-float-2 blur-sm border border-purple-400/30"></div>

              {/* Back Glow - Cyan/Blue */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-600 opacity-40 blur-2xl animate-pulse"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  transition: 'all 0.5s ease'
                }}
              ></div>

              {/* Animated Border/Ring - Cyan */}
              <div
                className="absolute inset-[-4px] border-2 border-cyan-400/50 animate-spin-slow"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  transition: 'all 0.5s ease',
                  animationDuration: '10s'
                }}
              ></div>

              {/* Main Image Container - Blob Shape */}
              <div
                className="relative w-full h-full overflow-hidden border-4 border-cyan-400/80 shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.6)]"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                }}
              >
                {/* Inner Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent z-10 pointer-events-none"></div>

                <img
                  src="/about3.png"
                  alt="Ganesh Ghorai"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-3/4 ml-0 md:ml-8">
            <RevealOnScroll>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl">
                <p>
                  Hi, I am <span className="text-cyan-400 font-semibold">Ganesh Ghorai</span>, a dedicated <span className="text-purple-400 font-semibold">Computer Science Engineer</span> and <span className="text-cyan-400 font-semibold">Backend Developer</span> based in Kolkata. With 1 year of hands-on experience, I specialize in building high-performance web applications using <span className="text-white">PHP</span>, <span className="text-white">Laravel</span>, and <span className="text-white">React</span>.
                </p>

                <p>
                  I have solid experience working with <span className="text-purple-400">PHP, MySQL, JavaScript, React, Docker, and n8n</span>, which helps me build full-fledged web applications that integrate seamlessly across different services.
                </p>

                <p>
                  Although my core strength lies in backend development, I'm also passionate about <span className="text-cyan-400">frontend development</span>, exploring modern tools and frameworks to create smooth, interactive user experiences.
                </p>

                <p className="border-l-4 border-purple-500 pl-4 italic text-gray-400">
                  I'm driven by solving real-world problems with clean, maintainable code and a focus on performance, security, and user satisfaction.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;