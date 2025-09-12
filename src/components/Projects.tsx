import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Student Market Application',
      description: 'A full-stack e-commerce platform for students to buy and sell textbooks and supplies. Built with React, Spring Boot, and MySQL.',
      tags: ['React', 'Spring Boot', 'MySQL', 'REST API'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Portfolio Website',
      description: 'A futuristic, interactive portfolio showcasing my projects and skills with advanced animations and modern design principles.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with Python, featuring real-time updates and customizable charts.',
      tags: ['Python', 'Pandas', 'Plotly', 'Flask'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting application using blockchain technology to ensure election integrity and voter privacy.',
      tags: ['Solidity', 'Web3.js', 'Ethereum', 'React'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-yellow-400 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(0, 255, 255, 0.2)',
              }}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 h-full">
                {/* Project header with gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-xl mb-6`} />
                
                <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-gray-700/50 text-cyan-400 rounded-full border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-mono font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white font-mono font-semibold rounded-lg border border-gray-600 transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/25"
                  >
                    <FaGithub size={14} />
                    Code
                  </motion.a>
                </div>
                
                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 blur-xl`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;