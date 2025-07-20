
import { Code, Database, Brain, Smartphone } from 'lucide-react';

<<<<<<< HEAD
const Skill = () => {
=======
const Skill = ({ isVisible = false }) => {
>>>>>>> 9cbbacf (ADDED ABOUT SECTION 3D)

     const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS","Bootstrap","Material UI"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      items: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      items: ["Python", "Numpy","Pandas","Matplotlib"],
      color: "from-purple-500 to-pink-500"
    },
    
    {
      category: "Tools",
      icon: <Smartphone className="w-6 h-6" />,
      items: ["Git","Github","Canva","VS Code","Anaconda","Vercel","Google Cloud"],
      color: "from-orange-500 to-red-500"
    },
    {
    category: "Languages",
    icon: <Code className="w-6 h-6" />,
    items: ["C", "C++", "Java", "Python","R"],
    color: "from-yellow-500 to-amber-500"
    }
  ];


  return (
     <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Skills & Technologies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
<<<<<<< HEAD
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
=======
                className={`group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 hover:transform hover:scale-105 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-10 opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${1800 + index * 300}ms`
                }}
>>>>>>> 9cbbacf (ADDED ABOUT SECTION 3D)
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.category}
                </h4>
                
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
<<<<<<< HEAD
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
=======
                      className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 transform transition-all duration-500 ${
                        isVisible 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-[-10px] opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${2000 + index * 200 + itemIndex * 100}ms`
                      }}
>>>>>>> 9cbbacf (ADDED ABOUT SECTION 3D)
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

<<<<<<< HEAD
export default Skill
=======
export default Skill;
>>>>>>> 9cbbacf (ADDED ABOUT SECTION 3D)
