import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, BookOpen, Briefcase, FolderOpen, Mail } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects and initial hash
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);

    // Initial scroll check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle navigation with direct scrolling
  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsMenuOpen(false);

    // Update URL
    const newUrl = sectionId === 'home'
      ? window.location.pathname + window.location.search
      : `#${sectionId}`;

    window.history.pushState({}, '', newUrl);

    // Handle home section
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Find the target element and scroll to it
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;

      // Use native smooth scroll with offset
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Manually adjust for header
      window.scrollBy(0, -headerHeight);
    }
  };
  const navItems = [
    { name: 'About', href: 'about', icon: User },
    { name: 'Journey', href: 'journey', icon: BookOpen },
    { name: 'Skills', href: 'skills', icon: Code },
    { name: 'Projects', href: 'projects', icon: FolderOpen },
    { name: 'Experience', href: 'experience', icon: Briefcase },
    { name: 'Contact', href: 'contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="relative group">
              <button
                onClick={(e) => scrollToSection('home', e)}
                className="focus:outline-none"
              >
                <img
                  src="/logo2.png"
                  alt="Home"
                  className={`h-10 w-10 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110 grayscale brightness-200`}
                />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex space-x-1 p-1 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => scrollToSection(item.href, e)}
                  className="relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 group text-gray-300 hover:text-white"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10"></div>
                  <item.icon className="h-4 w-4 relative z-10 transition-all duration-300 group-hover:text-cyan-400 group-hover:rotate-12" />
                  <span className="relative z-10 transition-all duration-300 group-hover:text-cyan-100">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              className="md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm border border-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ?
                <X className="h-6 w-6 text-cyan-400" /> :
                <Menu className="h-6 w-6 text-white" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10 bg-[#0c090d]/95 backdrop-blur-xl animate-in slide-in-from-top duration-300 rounded-b-2xl shadow-2xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => scrollToSection(item.href, e)}
                className="flex items-center space-x-3 py-4 px-6 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 mx-2 rounded-xl group"
              >
                <item.icon className="h-5 w-5 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110" />
                <span className="font-medium transition-all duration-300">{item.name}</span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;