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
        "data:image/webp;base64,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",
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
      title: "Weather Prediction Model",
      description:
        "Machine learning model for weather forecasting using historical data and multiple algorithms for improved accuracy.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
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
