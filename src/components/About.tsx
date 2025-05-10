import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cpu, Globe, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-accent-glow" />,
      title: 'Frontend Development',
      description: 'Crafting sleek, responsive, and user-friendly interfaces using Next.js, Tailwind CSS, and JavaScript.'
    },
    {
      icon: <Cpu className="h-8 w-8 text-accent-glow" />,
      title: 'Backend Integration',
      description: 'Implementing authentication, databases, and serverless functions using Firebase, Clerk, and Stripe.'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-accent-glow" />,
      title: 'AI Integration',
      description: 'Building smart features with OpenAI, Gemini API, and Pinecone for personalized, intelligent user experiences.'
    },
    {
      icon: <Globe className="h-8 w-8 text-accent-glow" />,
      title: 'Real-World Project Delivery',
      description: 'Delivering production-ready applications for real companies with high-quality code and modern design.'
    }
  ];  

  return (
    <section id="about" className="py-24 bg-background-navy/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent-900/50 to-primary-900/50 rounded-lg overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Salman Ahmad" 
                  className="w-full h-full object-cover object-center mix-blend-luminosity opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-accent-glow rounded-tl-lg opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent-glow rounded-br-lg opacity-70"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
            Software Engineer with a Passion for Building Real-World Web Solutions
            </h3>
            
            <p className="text-gray-300 mb-6">
            Hello! I'm Salman Ahmad, a software engineering student at COMSATS University Islamabad (Abbottabad Campus) and a Software Engineering Fellow at Headstarter AI. I specialize in crafting modern, user-centric web applications with a strong focus on UI/UX, scalability, and functionality.
            </p>
            
            <p className="text-gray-400 mb-8">
            Through hands-on experience across 6+ real-world projects, including SaaS platforms, AI-powered apps, and full-stack websites for companies, I’ve developed a deep passion for solving real-world problems through code. My work combines clean, maintainable code with practical design thinking to deliver software that is not only functional but impactful.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">JavaScript</span>
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">TypeScript</span>
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">React</span>
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">Next.js</span>
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">Tailwind CSS</span>
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">Node.js</span>
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">Supabase</span>
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">OpenAI API</span>
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">Gemini API</span>
              <span className="px-4 py-2 bg-accent-900/30 border border-accent-700/30 rounded-full text-sm text-accent-400">Stripe</span>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-500 hover:to-primary-500 text-white font-medium rounded-lg shadow-glow-sm transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-background-dark/80 border border-gray-800 p-6 rounded-lg hover:border-accent-700/50 transition-all duration-300 group hover:shadow-glow-sm"
            >
              <div className="mb-4 p-3 bg-accent-900/20 rounded-lg inline-block group-hover:bg-accent-900/30 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent-400 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;