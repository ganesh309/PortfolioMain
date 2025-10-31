import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, BookOpen, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark } = useTheme();

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="relative group">
              <button 
                onClick={(e) => scrollToSection('home', e)}
                className="focus:outline-none"
              >
                <img 
                  src="/logo2.png" 
                  alt="Home" 
                  className={`h-10 w-10 transition-all duration-300 ${
                    isScrolled ? (isDark ? 'opacity-90' : 'opacity-90') : 'opacity-90'
                  } group-hover:rotate-12 group-hover:scale-110`} 
                />
              </button>
            </div>
          </div>

          {/* Desktop Navigation and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => scrollToSection(item.href, e)}
                className="relative flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 group text-white/90 hover:text-white hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <item.icon className="h-4 w-4 relative z-10 transition-all duration-300 group-hover:rotate-12" />
                <span className="relative z-10 transition-all duration-300">{item.name}</span>
              </a>
            ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
            className="md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-180 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 hover:border-white/40"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 transition-transform duration-300" /> : 
              <Menu className="h-6 w-6 transition-transform duration-300" />
            }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-white/10 bg-black/80 backdrop-blur-xl animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => scrollToSection(item.href, e)}
                className="flex items-center space-x-3 py-4 px-6 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-xl mx-4 mb-2 w-auto text-left group"
              >
                <item.icon className="h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
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