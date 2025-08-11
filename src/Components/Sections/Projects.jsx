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
      image:
        "https://th.bing.com/th/id/OIP.ulNAS2V2Tro0nncot3eMRgHaE7?w=318&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: "fullstack",
      liveUrl:
        "https://kainchi-dhaam-tra-kvmc-q1u6bs4i8-neeraj-singh-negis-projects.vercel.app/",
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
      id: 7,
      title: "Face Expression Recognition",
      description:
        "An AI/ML project that detects faces and classifies facial expressions as happy, sad, or neutral using OpenCV for image processing and Pandas for data analysis.",
      image:
        "data:image/jpeg;base64,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",
      technologies: ["Python", "OpenCV", "Pandas", "Machine Learning"],
      category: "ai",
      liveUrl: "https://github.com/negiNeeraj1/facialExpression-Recognition",
      githubUrl: "https://github.com/negiNeeraj1/facialExpression-Recognition",
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
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen overflow-hidden mt-4"
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
        ></div>
      </div>
    </section>
  );
};

export default Projects;
