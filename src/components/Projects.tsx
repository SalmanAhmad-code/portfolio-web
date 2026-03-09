import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';
import { projectsData, Project } from '../data/projects';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  // Modal handlers
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' }
  ];

  return (
    <section id="projects" className="py-24 bg-background-navy/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Recent Projects</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            A showcase of my recent work, featuring a variety of projects across different domains and technologies.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-accent-600 to-primary-600 text-white shadow-glow-sm'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-background-dark border border-gray-800 rounded-lg overflow-hidden group hover:border-accent-600/30 hover:shadow-glow-sm transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-70"></div>
                
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-accent-900/70 backdrop-blur-sm text-accent-400 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800/80 rounded-full text-gray-400 hover:text-accent-glow hover:bg-gray-700/80 transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800/80 rounded-full text-gray-400 hover:text-accent-glow hover:bg-gray-700/80 transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => openModal(project)}
                    className="flex items-center text-accent-500 hover:text-accent-glow group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span className="text-sm font-medium">Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/SalmanAhmad-code?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-accent-500 text-white font-medium rounded-lg hover:bg-accent-500/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github className="h-5 w-5" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-background-dark border border-gray-700 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent-900/70 backdrop-blur-sm text-accent-400 text-sm rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-accent-600/20 to-primary-600/20 border border-accent-500/30 text-accent-400 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-600 to-primary-600 text-white font-medium rounded-lg hover:shadow-glow-sm transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <Github className="h-5 w-5" />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;