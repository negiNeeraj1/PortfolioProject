import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Let's Connect</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="space-y-2">
               <p
      onClick={() => navigate('/')}
      className="cursor-pointer block text-gray-400 hover:text-white transition-colors duration-300"
    >
      Home
    </p>
    <p
      onClick={() => navigate('/about')}
      className="cursor-pointer block text-gray-400 hover:text-white transition-colors duration-300"
    >
      About
    </p>
    <p
      onClick={() => navigate('/projects')}
      className="cursor-pointer block text-gray-400 hover:text-white transition-colors duration-300"
    >
      Projects
    </p>
    <p
      onClick={() => navigate('/resume')}
      className="cursor-pointer block text-gray-400 hover:text-white transition-colors duration-300"
    >
      Resume
    </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>negi2350@gmail.com</p>
              
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Designed and Developed</span>
              <Heart size={16} className="text-red-500" />
              <span>by Neeraj Singh Negi</span>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-gray-400">
               Copyright © 2025 NSN.
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;