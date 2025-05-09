import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const workExperience = [
    {
      title: 'Software Engineering Fellow',
      company: 'Headstarter AI',
      duration: 'Aug 2024 - Sep 2024',
      description:
        'Built and shipped 6 real-world projects including AI-powered apps and SaaS products. Led frontend development, authentication systems, Stripe integration, and waitlist features. Delivered a client site for KWC Construction.',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'OpenAI API', 'Stripe', 'Clerk'],
    },
    {
      title: 'Frontend Developer (Intern)',
      company: 'Headstarter AI',
      duration: '2024',
      description:
        'Contributed to team-based product development, implemented responsive UI, and integrated AI APIs (Gemini, OpenAI). Key projects included Crayo AI and GameFlip.',
      technologies: ['React', 'Next.js', 'JavaScript', 'Gemini API'],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      duration: '2024 - Present',
      description:
        'Designed and deployed web apps for clients, focusing on performance, design, and usability. Delivered a full-scale website for a construction firm using modern tools.',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Vercel'],
    },
  ];


  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'COMSATS University Islamabad, Abbottabad Campus',
      duration: '2023 - Present',
      description: 'Coursework includes Data Structures, Web Engineering, Software Project Management, and AI. Active participant in internships and project-based learning.',
    }
  ];


  // const certifications = [
  //   {
  //     title: 'AWS Certified Solutions Architect',
  //     issuer: 'Amazon Web Services',
  //     year: '2022',
  //   }
  // ];

  return (
    <section id="resume" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Resume & Experience</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            My professional journey, education, and achievements. Download my complete resume for a detailed overview.
          </p>

          <motion.div
            variants={fadeInUp}
            className="mt-8"
          >
            <a
              href="\public\cv.pdf"
              target="_blank" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-500 hover:to-primary-500 text-white font-medium rounded-lg shadow-glow-sm transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1"
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-900/20 rounded-md">
                <Briefcase className="h-6 w-6 text-accent-glow" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-gray-800 pl-8 ml-4 space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-accent-900 border-2 border-accent-glow rounded-full"></div>

                  <div className="bg-background-navy/30 p-6 rounded-lg border border-gray-800 hover:border-accent-600/30 hover:shadow-glow-sm transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                      <span className="text-sm font-medium px-3 py-1 bg-accent-900/30 text-accent-400 rounded-full mt-1">
                        {job.duration}
                      </span>
                    </div>

                    <p className="text-primary-400 font-medium mb-3">{job.company}</p>
                    <p className="text-gray-400 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent-900/20 rounded-md">
                  <GraduationCap className="h-6 w-6 text-accent-glow" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-6 mb-12">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-background-navy/30 p-6 rounded-lg border border-gray-800 hover:border-accent-600/30 hover:shadow-glow-sm transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    </div>

                    <p className="text-primary-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-accent-400 mb-3">{edu.duration}</p>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>

              {/*
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent-900/20 rounded-md">
                  <Award className="h-6 w-6 text-accent-glow" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
              </div>

               <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-5 bg-background-navy/20 rounded-lg border border-gray-800 hover:border-accent-600/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-white">{cert.title}</h4>
                      <span className="text-sm text-accent-400">{cert.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;