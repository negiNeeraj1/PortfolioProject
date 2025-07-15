import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Kainchi Dhaam Traffic Reduction Tool",
      description:
        "A fullstack web application that reduces traffic congestion at Kainchi Dhaam by providing real-time traffic updates and alternative routes.",
      image:
        "https://th.bing.com/th/id/OIP.ulNAS2V2Tro0nncot3eMRgHaE7?w=318&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      technologies: ["React", "Node.js", "Express"],
      category: "fullstack",
      liveUrl:
        "https://kainchi-dhaam-tra-kvmc-q1u6bs4i8-neeraj-singh-negis-projects.vercel.app/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Coming Soon",
      description:
        "Machine learning model that classifies images with 95% accuracy. Built using TensorFlow and deployed with Flask API.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "OpenCV"],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
    },
    
{
  id: 4,
  title: "iLearnYoga",
  description:
    "A comprehensive yoga classes booking website where users can book classes based on their skill level (beginner, intermediate, advanced). Features include client dashboard, admin panel, user authentication, and class management system.",
  image:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  category: "fullstack",
  liveUrl: "https://yoga-web-1v8q.vercel.app/",
  githubUrl: "https://github.com/negiNeeraj1/yogaWeb",
},
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio website with dark mode, smooth animations, and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      liveUrl: "https://portfolio-project-lemon-five.vercel.app/",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Chat Application",
      description:
        "Real-time chat application with user authentication, group chats, file sharing, and emoji support.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=200&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              <Filter size={16} />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
