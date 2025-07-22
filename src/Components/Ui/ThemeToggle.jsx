import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../Context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-500 ease-in-out focus:outline-none"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-500 ease-in-out flex items-center justify-center ${
          darkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {darkMode ? (
          <Moon size={10} className="text-gray-700 transition-opacity duration-300" />
        ) : (
          <Sun size={10} className="text-yellow-500 transition-opacity duration-300" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
