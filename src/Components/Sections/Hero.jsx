import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  Twitter,
  Instagram,
} from "lucide-react";
import TypingAnimation from "../Ui/TypingAnimation";
import PersonalPhoto from "../../Images/PersonalPhoto.jpg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { AuroraTextEffect } from "../Ui/aurora-text-affect"; // Adjust path as needed
import CenteredImageCard from "@/Components/Ui/Profilecard";
const Hero = () => {
  const typingTexts = [
    "MERN Stack Developer",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Software Developer",
    "Freelancer",
  ];

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false); // Added missing state

  const handleNavigation = (path) => {
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-gray-600 dark:text-gray-400">
                Hello, I'm
              </h2>

              {/* Aurora Text Effect for Name */}
              <AuroraTextEffect
                text="Neeraj Singh Negi"
                className="bg-transparent dark:bg-transparent h-auto py-4"
                textClassName="text-4xl md:text-6xl font-bold"
                fontSize="clamp(2rem, 6vw, 4rem)"
                colors={{
                  first: "bg-blue-400",
                  second: "bg-purple-500",
                  third: "bg-cyan-400",
                  fourth: "bg-pink-500",
                }}
                blurAmount="blur-md"
                animationSpeed={{
                  border: 8,
                  first: 6,
                  second: 4,
                  third: 5,
                  fourth: 10,
                }}
              />
            </div>

            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              I'm a <TypingAnimation texts={typingTexts} />
            </div>

            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating innovative web applications and
              exploring the endless possibilities of artificial intelligence and
              machine learning technologies.
            </p>

            <h2 className="text-xl md:text-xl font-bold text-gray-900 dark:text-white">
              FIND ME ON
            </h2>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://github.com/negiNeeraj1"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/neeraj-singh-negi-/"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/negi_neeraj29"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/negi._.neeraj/"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  handleNavigation("/about");
                }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                About Me
              </button>
            </div>
          </div>

          {/* Right Content - CenteredImageCard */}
          <div className="flex justify-center lg:justify-end">
            <CenteredImageCard 
              img={PersonalPhoto}
              name="Neeraj Singh Negi"
              bio="Passionate MERN Stack Developer creating innovative web applications and exploring AI/ML technologies."
              skills={[
                { 
                  name: "JavaScript", 
                  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                },
                { 
                  name: "React", 
                  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                },
                { 
                  name: "Node.js", 
                  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                },
                { 
                  name: "MongoDB", 
                  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                },
                { 
                  name: "TailwindCSS", 
                  iconUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
                },
                { 
                  name: "Python", 
                  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                }
              ]} 
              githubUrl="https://github.com/negiNeeraj1"
              twitterUrl="https://x.com/negi_neeraj29"
              position="MERN Stack Developer"
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;