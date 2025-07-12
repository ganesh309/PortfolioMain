import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl transition-all duration-500 hover:scale-110 hover:rotate-12 group bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/30 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 h-6 w-6 text-yellow-500 transition-all duration-500 group-hover:rotate-180 ${
            isDark ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 h-6 w-6 text-blue-400 transition-all duration-500 group-hover:rotate-180 ${
            isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'
          }`} 
        />
      </div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl blur-md transition-all duration-500 ${
        isDark 
          ? 'bg-blue-400/20 group-hover:bg-blue-400/40' 
          : 'bg-yellow-400/20 group-hover:bg-yellow-400/40'
      }`}></div>
    </button>
  );
};

export default ThemeToggle;