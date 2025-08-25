import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Handle scroll to hash on initial load and navigation
  useEffect(() => {
    const scrollToElement = (hash: string) => {
      const element = document.getElementById(hash);
      if (!element) return false;

      const headerHeight = 80;
      
      // Use native smooth scroll with offset
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Manually adjust for header
      window.scrollBy(0, -headerHeight);
      return true;
    };

    const scrollToHash = () => {
      const hash = window.location.hash.substring(1);
      if (!hash) return;

      // Try to scroll immediately
      if (!scrollToElement(hash)) {
        // If element not found, try again after a short delay
        const retryInterval = setInterval(() => {
          if (scrollToElement(hash)) {
            clearInterval(retryInterval);
          }
        }, 100);

        // Stop trying after 2 seconds
        setTimeout(() => clearInterval(retryInterval), 2000);
      }
    };

    // Set up event listeners
    window.addEventListener('load', scrollToHash);
    window.addEventListener('hashchange', scrollToHash);
    
    // Initial check
    scrollToHash();
    
    // Clean up
    return () => {
      window.removeEventListener('load', scrollToHash);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
        
        {/* Divider with decorative element */}
        <div className="relative py-3 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-2 text-[10px] text-purple-600 bg-white dark:bg-gray-900 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800">
              Journey
            </div>
          </div>
        </div>
        
        <Journey />
      </section>

      {/* Divider between Journey and Skills */}
      <div className="relative py-3 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-2 text-[10px] text-blue-600 bg-white dark:bg-gray-900 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
            Skills & Expertise
          </div>
        </div>
      </div>

      <section id="skills">
        <Skills />
      </section>

      {/* Divider between Skills and Projects */}
      <div className="relative py-3 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-2 text-[10px] text-orange-600 bg-white dark:bg-gray-900 dark:text-orange-300 rounded-full border border-orange-200 dark:border-orange-800">
            Featured Work
          </div>
        </div>
      </div>

      <section id="projects">
        <Projects />
      </section>

      {/* Divider between Projects and Experience */}
      <div className="relative py-3 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-2 text-[10px] text-teal-600 bg-white dark:bg-gray-900 dark:text-teal-300 rounded-full border border-teal-200 dark:border-teal-800">
            Professional Experience
          </div>
        </div>
      </div>

      <section id="experience">
        <Experience />
      </section>

      {/* Divider between Experience and Contact */}
      <div className="relative py-3 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-2 text-[10px] text-pink-600 bg-white dark:bg-gray-900 dark:text-pink-300 rounded-full border border-pink-200 dark:border-pink-800">
            Get In Touch
          </div>
        </div>
      </div>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;