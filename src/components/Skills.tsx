import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Server, Database, Palette, Cpu, LineChart, Sparkles, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Monitor className="h-6 w-6 text-accent-glow" />,
      skills: [
        { name: 'JavaScript', proficiency: 95 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'React.js', proficiency: 90 },
        { name: 'Next.js', proficiency: 95 },
        { name: 'HTML/CSS', proficiency: 90 },
        { name: 'Tailwind CSS', proficiency: 95 },
      ]
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="h-6 w-6 text-accent-glow" />,
      skills: [
        { name: 'Java', proficiency: 85 },
        { name: 'C', proficiency: 80 },
        { name: 'Firebase (Auth + Firestore)', proficiency: 90 },
        { name: 'Supabase (Auth + Database)', proficiency: 85 },
        { name: 'Node.js', proficiency: 80 },
        { name: 'Clerk (Auth)', proficiency: 85 },
        { name: 'Stripe (Payments)', proficiency: 85 },
      ]
    },
    {
      title: 'AI & Advanced Tools',
      icon: <Sparkles className="h-6 w-6 text-accent-glow" />,
      skills: [
        { name: 'OpenAI API', proficiency: 85 },
        { name: 'Gemini API', proficiency: 85 },
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: <Palette className="h-6 w-6 text-accent-glow" />,
      skills: [
        { name: 'Git / GitHub', proficiency: 90 },
        { name: 'Vercel', proficiency: 90 },
        { name: 'Agile / Team Projects', proficiency: 85 },
        { name: 'Graphic Design (Photoshop)', proficiency: 80 }
      ]
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Technical Skills</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            With expertise across various technologies and frameworks, I bring a comprehensive skill set to every project, ensuring robust and efficient solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="bg-background-navy/30 p-6 rounded-lg border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent-900/20 rounded-md">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={fadeInUp}
                    transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-accent-400">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.3 + (0.1 * skillIndex) }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-6 bg-gradient-to-r from-background-navy/50 to-background-dark rounded-lg border border-gray-800"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Areas of Expertise</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent-900/20 rounded-md mt-1 shrink-0">
                <Cpu className="h-5 w-5 text-accent-glow" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Full-Stack Web Development</h4>
                <p className="text-sm text-gray-400">Building complete apps using Next.js, Firebase, Supabase and Tailwind CSS</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent-900/20 rounded-md mt-1 shrink-0">
                <Sparkles className="h-5 w-5 text-accent-glow" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">AI Integration</h4>
                <p className="text-sm text-gray-400">Integrating OpenAI and Gemini API  to power intelligent features</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent-900/20 rounded-md mt-1 shrink-0">
                <Database className="h-5 w-5 text-accent-glow" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Authentication & Payments</h4>
                <p className="text-sm text-gray-400">Securing apps using Clerk, Firebase Auth, and Stripe integration</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent-900/20 rounded-md mt-1 shrink-0">
                <Palette className="h-5 w-5 text-accent-glow" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">UI/UX Design</h4>
                <p className="text-sm text-gray-400">Delivering clean and user-centric interfaces using Tailwind</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent-900/20 rounded-md mt-1 shrink-0">
                <LineChart className="h-5 w-5 text-accent-glow" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Performance Optimization</h4>
                <p className="text-sm text-gray-400">Improving load times, SEO, and responsiveness for better UX</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent-900/20 rounded-md mt-1 shrink-0">
                <Globe className="h-5 w-5 text-accent-glow" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Client Project Delivery</h4>
                <p className="text-sm text-gray-400">Delivering production-ready web solutions for real-world clients like KWC</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;