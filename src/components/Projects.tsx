import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects: Array<{
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl?: string;
    gradient: string;
  }> = [
    {
      title: 'AlertFast — Emergency Alert System',
      description:
        "Production-ready, real-time emergency alert system with one-tap Medical/Police/Fire alerts, precise GPS capture, automatic next-of-kin email notifications, and a professional responder dashboard for case management.",
      tags: ['React', 'Node.js', 'PostgreSQL', 'Bootstrap', 'Google Maps API', 'Email Notifications', 'Role-Based Access'],
      githubUrl: '#',
      liveUrl: 'https://alert-emegerency.vercel.app/',
      gradient: 'from-red-400 to-pink-500',
      
    },
    {
      title: 'Student Market Application - Backend',
      description:
        'A comprehensive Spring Boot backend for a full-stack e-commerce platform where students can buy and sell textbooks and supplies. Features secure REST API endpoints, MySQL database integration, user authentication, and advanced search functionality.',
      tags: ['Spring Boot', 'Java', 'MySQL', 'REST API', 'JPA', 'Maven', 'Security'],
      githubUrl: 'https://github.com/hloni2004/StudentMarket2',
      gradient: 'from-cyan-400 to-blue-500',
      
    },
    {
      title: 'Student Market Application - Frontend',
      description:
        'Modern React frontend for the Student Market platform, providing an intuitive and responsive user interface for browsing, buying, and selling academic resources. Built with modern React patterns, state management, and responsive design principles.',
      tags: ['React', 'JavaScript', 'CSS', 'HTML', 'Responsive Design', 'State Management'],
      githubUrl: 'https://github.com/hloni2004/StudentMarket-Group-React',
      gradient: 'from-purple-400 to-pink-500',
      
    },
    {
      title: 'SkillLink Africa — 2025 Stellar Hackathon Winner 🏆',
      description:
        'A decentralized freelance marketplace built on the Stellar network that connects clients with skilled workers across Africa. Features smart contracts, escrow services, secure XLM payments, and Soroban integration for trustless transactions. Winner of the 2025 Stellar Blockchain Hackathon.',
      tags: ['React', 'Node.js', 'Express', 'TypeScript', 'Stellar', 'Soroban', 'Rust', 'Supabase'],
      githubUrl: 'https://github.com/hloni2004/Stellar.git',
      liveUrl: 'https://youtu.be/vh0iNZGTuhs',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Portfolio Website',
      description:
        'This modern, responsive portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, particle effects, and optimized performance. Showcases my projects and skills with an engaging user experience.',
      tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Responsive Design'],
      githubUrl: '#',
      liveUrl: '#',
      gradient: 'from-pink-400 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    // `ease` as a string can trigger TypeScript type errors for Framer Motion's Transition type.
    // Keep the transition simple (duration only) to satisfy the types.
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
  };

  return (
  <section id="projects" className="pro-section pro-fade px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl pro-heading mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative pro-card"
            >
              {/* Card container: flex-col + justify-between ensures button stays at bottom */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 h-full flex flex-col justify-between relative">
                {/* No featured badge (feature removed) */}

                {/* Content section */}
                <div>
                  {/* Gradient header */}
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-xl mb-6`}
                  />
                  {/* Title */}
                  <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-gray-700/50 text-cyan-400 rounded-full border border-cyan-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white font-mono font-semibold rounded-lg border border-gray-600 transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/25 flex-1 justify-center"
                  >
                    <FaGithub size={14} />
                    Code
                  </motion.a>
                  
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-mono font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 flex-1 justify-center"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 blur-xl pointer-events-none`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
