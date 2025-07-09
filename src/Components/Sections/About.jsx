import { Code, Database, Brain, Smartphone } from 'lucide-react';
import Skill from '../SmallCompo/Skill';
const About = () => {
 

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hi everyone I'm Neeraj Singh Negi from Uttrakhand, India. I'm currently pursuing my Bachelor's degree in Computer Applications at Graphic Era Hill University, Bhimtal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a dedicated software developer with a passion for creating innovative solutions using modern technologies. My expertise spans across the MERN stack and AI/ML technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I love solving complex problems and building applications that make a difference. Whether it's developing responsive web applications or exploring the latest in artificial intelligence, I'm always excited to take on new challenges.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                What I Do:
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Full-stack web development with React and Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Database design and API development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Machine learning and AI model development
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Always Learning
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Exploring new technologies and pushing boundaries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
       <Skill/>
      </div>
    </section>
  );
};

export default About;