import React, { useState, useEffect, useRef, useCallback } from "react";

// SVG Icons Components
const ExternalLink = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m18 13 6-6-6-6" />
    <path d="M7 7h8v8" />
    <path d="M14 7 7 14" />
  </svg>
);

const Github = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Filter = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
  </svg>
);

const ChevronLeft = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Play = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const Pause = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Kainchi Dhaam Traffic Reduction Tool",
      description:
        "A fullstack web application that reduces traffic congestion at Kainchi Dhaam by providing real-time traffic updates and alternative routes.",
      image: "https://th.bing.com/th/id/OIP.ulNAS2V2Tro0nncot3eMRgHaE7?w=318&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: "fullstack",
      liveUrl: "https://kainchi-dhaam-tra-kvmc-q1u6bs4i8-neeraj-singh-negis-projects.vercel.app/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "AI Image Classifier",
      description:
        "Machine learning model that classifies images with 95% accuracy. Built using TensorFlow and deployed with Flask API.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
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
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "iLearnYoga",
      description:
        "A comprehensive yoga classes booking website where users can book classes based on their skill level with admin panel and authentication.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      category: "fullstack",
      liveUrl: "https://yoga-web-1v8q.vercel.app/",
      githubUrl: "https://github.com/negiNeeraj1/yogaWeb",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio website with dark mode, smooth animations, and optimized performance using latest web technologies.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      liveUrl: "https://portfolio-project-lemon-five.vercel.app/",
      githubUrl: "https://github.com/negiNeeraj1/PortfolioProject/",
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description:
        "Real-time chat application with Socket.io featuring message broadcasting, emoji picker, and WhatsApp-inspired design.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop",
      technologies: ["Socket.io", "Node.js", "Express", "HTML", "CSS"],
      category: "fullstack",
      liveUrl: "#" ,
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

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    console.log("Starting auto-play...");
    autoPlayRef.current = setInterval(() => {
      if (!isHovered && !isDragging) {
        console.log("Auto-playing next slide...");
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
      } else {
        console.log("Auto-play paused - user interacting");
      }
    }, 2000);
  }, [filteredProjects.length, isHovered, isDragging]);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      console.log("Stopping auto-play...");
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("Auto-play effect triggered, isAutoPlaying:", isAutoPlaying);
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying, startAutoPlay]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevProject();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextProject();
      } else if (event.key === " ") {
        event.preventDefault();
        setIsAutoPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Enhanced 3D positioning with better depth and spacing
  const getProjectPosition = (index) => {
    const totalProjects = filteredProjects.length;
    const baseAngle = 360 / totalProjects;
    const currentAngle = baseAngle * (index - currentIndex);

    // Enhanced 3D positioning
    const radius = Math.max(300, totalProjects * 40);
    const depth = 200;

    const radians = (currentAngle * Math.PI) / 180;
    const x = Math.sin(radians) * radius;
    const z = Math.cos(radians) * depth;

    // Enhanced opacity and scale calculations
    const distanceFromCenter = Math.abs(currentAngle);
    const normalizedDistance = Math.min(distanceFromCenter / 180, 1);

    const opacity =
      index === currentIndex ? 1 : Math.max(0.3, 1 - normalizedDistance * 0.7);
    const scale =
      index === currentIndex ? 1 : Math.max(0.6, 1 - normalizedDistance * 0.4);
    const blur =
      index === currentIndex ? 0 : Math.min(normalizedDistance * 3, 2);

    return {
      transform: `translate3d(${x}px, 0px, ${z}px) scale(${scale}) rotateY(${
        currentAngle * 0.1
      }deg)`,
      opacity,
      zIndex:
        index === currentIndex ? 100 : Math.floor(50 - normalizedDistance * 20),
      filter: `blur(${blur}px)`,
      transition: isDragging
        ? "none"
        : "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
    };
  };

  // Mouse/touch drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    stopAutoPlay();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevProject();
      } else {
        nextProject();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (isAutoPlaying) startAutoPlay();
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setCurrentIndex(0);
              }}
              className={`group relative px-8 py-4 rounded-full font-medium transition-all duration-500 flex items-center gap-3 overflow-hidden transform hover:scale-105 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25"
                  : "bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-xl"
              }`}
            >
              <Filter
                size={18}
                className="transition-transform group-hover:rotate-12"
              />
              {filter.label}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* 3D Carousel Container */}
        <div
          className={`relative h-[700px] flex items-center justify-center perspective-[1200px] transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Navigation Controls */}
          <div className="absolute top-4 right-4 z-30 flex gap-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label={isAutoPlaying ? "Pause" : "Play"}
            >
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label="Previous project"
          >
            <ChevronLeft
              size={24}
              className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors"
            />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label="Next project"
          >
            <ChevronRight
              size={24}
              className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors"
            />
          </button>

          {/* 3D Carousel */}
          <div
            ref={carouselRef}
            className="relative w-full h-full preserve-3d cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{ transformStyle: "preserve-3d" }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={getProjectPosition(index)}
              >
                <div
                  className={`group bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden w-80 h-[480px] border border-gray-200/20 dark:border-gray-700/20 ${
                    index === currentIndex ? "ring-2 ring-blue-500/50" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 h-64 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium border border-blue-200/20 dark:border-blue-700/20"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium transition-colors text-sm group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink
                          size={14}
                          className="group-hover/link:translate-x-0.5 transition-transform"
                        />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 shadow-lg shadow-blue-600/50 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {currentIndex + 1} / {filteredProjects.length}
              </span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div
          className={`text-center mt-12 space-y-2 transform transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
        </div>
      </div>
    </section>
  );
};

export default Projects;


