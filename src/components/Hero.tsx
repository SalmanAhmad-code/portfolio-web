import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowDown, X, XIcon } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern"></div>

      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <motion.h2
          className="text-lg md:text-xl font-semibold text-accent-glow mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="glow-text bg-clip-text text-transparent bg-gradient-to-r from-accent-glow to-primary-500">
            Salman Ahmad
          </span>
        </motion.h1>

        <motion.div
          className="gradient-line w-40 md:w-60 my-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        <motion.h3
          className="text-2xl md:text-3xl font-medium text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Software Engineer & Web Developer
        </motion.h3>

        <motion.p
          className="max-w-2xl text-gray-400 mb-10 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I build exceptional digital experiences with modern technologies,
          focusing on creating elegant solutions to complex problems.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-500 hover:to-primary-500 text-white font-medium rounded-lg shadow-glow transition-all duration-300 hover:shadow-glow-lg transform hover:-translate-y-1"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-transparent border border-accent-500 text-white font-medium rounded-lg hover:bg-accent-500/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="https://github.com/salmanAhmad-code" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-glow transition-colors duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/salman-ahmad-398274290" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-glow transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://x.com/SalmanXDev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-glow transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </a>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="animate-bounce text-gray-400 hover:text-accent-glow transition-colors duration-300"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;