import { Code, Database, Brain, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Skill from "../SmallCompo/Skill";
import { GlowingCards, GlowingCard } from "../Ui/glowing-cards";
// --- Animation Variants (can be shared) ---

// Parent container variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Child item variants for a fade-in-up effect
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Variants for list items to slide in from the left
const listItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// --- About Component ---

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hi everyone I'm Neeraj Singh Negi from Uttrakhand, India. I'm
            currently pursuing my Bachelor's degree in Computer Applications at
            Graphic Era Hill University, Bhimtal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a dedicated software developer with a passion for creating
                innovative solutions using modern technologies. My expertise
                spans across the MERN stack and AI/ML technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I love solving complex problems and building applications that
                make a difference. Whether it's developing responsive web
                applications or exploring the latest in artificial intelligence,
                I'm always excited to take on new challenges.
              </p>
            </motion.div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                What I Do:
              </h4>
              <motion.ul
                className="space-y-2 text-gray-600 dark:text-gray-400"
                variants={containerVariants}
              >
                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Frontend Development with React, JavaScript, HTML5, CSS3, and
                  Tailwind CSS
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Backend Development with Node.js, Express, MongoDB, and REST
                  APIs
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  AI/ML Development with Python, NumPy, Pandas, and Matplotlib
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Programming in C, C++, Java, Python, and R
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Tools & Technologies: Git, GitHub, VS Code, Vercel, and Google
                  Cloud
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
              },
            }}
          >
            <div className="relative w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl shadow-2xl flex items-center justify-center">
              <motion.div className="text-center" variants={containerVariants}>
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                  variants={{
                    hidden: { scale: 0, rotate: -180 },
                    visible: {
                      scale: 1,
                      rotate: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        delay: 0.5,
                      },
                    },
                  }}
                >
                  <Code className="w-16 h-16 text-white" />
                </motion.div>
                <motion.h4
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  variants={itemVariants}
                >
                  Always Learning
                </motion.h4>
                <motion.p
                  className="text-gray-600 dark:text-gray-400 text-sm"
                  variants={itemVariants}
                >
                  Exploring new technologies and pushing boundaries
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <Skill isVisible={isVisible} />
      </div>
    </motion.section>
  );
};

export default About;
