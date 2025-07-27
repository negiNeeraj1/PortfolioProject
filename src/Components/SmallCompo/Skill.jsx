import { Code, Database, Brain, Smartphone } from "lucide-react";
import { GlowingCards, GlowingCard } from "../Ui/glowing-cards"; // Adjust path as needed

const Skill = ({ isVisible = false }) => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      items: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
      ],
      color: "from-blue-500 to-cyan-500",
      glowColor: "#3b82f6", // Blue glow
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      items: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
      color: "from-green-500 to-emerald-500",
      glowColor: "#10b981", // Green glow
    },
    {
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      items: ["Python", "Numpy", "Pandas", "Matplotlib", "Scikit-learn"],
      color: "from-purple-500 to-pink-500",
      glowColor: "#8b5cf6", // Purple glow
    },
    {
      category: "Tools",
      icon: <Smartphone className="w-6 h-6" />,
      items: [
        "Git",
        "Github",
        "Canva",
        "VS Code",
        "Anaconda",
        "Vercel",
        "Google Cloud",
      ],
      color: "from-orange-500 to-red-500",
      glowColor: "#f97316", // Orange glow
    },
    {
      category: "Languages",
      icon: <Code className="w-6 h-6" />,
      items: ["C", "C++", "Java", "Python", "R"],
      color: "from-yellow-500 to-amber-500",
      glowColor: "#eab308", // Yellow glow
    },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
        Skills & Technologies
      </h3>

      <GlowingCards
        enableGlow={true}
        enableHover={true}
        glowRadius={15}
        glowOpacity={0.6}
        animationDuration={300}
        gap="1.5rem"
        maxWidth="100%"
        padding="0"
        backgroundColor="transparent"
        className="mx-auto"
        responsive={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {skills.map((skill, index) => (
            <GlowingCard
              key={index}
              glowColor={skill.glowColor}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${1800 + index * 300}ms`,
              }}
            >
              <div
                className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mb-4`}
              >
                {skill.icon}
              </div>

              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {skill.category}
              </h4>

              <div className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 transform transition-all duration-500 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[-10px] opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${
                        2000 + index * 200 + itemIndex * 100
                      }ms`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {item}
                  </div>
                ))}
              </div>
            </GlowingCard>
          ))}
        </div>
      </GlowingCards>
    </div>
  );
};

export default Skill;
