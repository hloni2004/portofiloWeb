import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects: Array<{
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    gradient: string;
  }> = [
    {
      title: 'Student Market Application - Backend',
      description:
        'A Spring Boot backend for a full-stack e-commerce platform where students can buy and sell textbooks and supplies. Features REST API endpoints, MySQL database integration, and secure user authentication.',
      tags: ['Spring Boot', 'Java', 'MySQL', 'REST API', 'JPA', 'Maven'],
      githubUrl: 'https://github.com/hloni2004/StudentMarket2',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Student Market Application - Frontend',
      description:
        'React frontend for the Student Market platform, providing an intuitive user interface for browsing, buying, and selling academic resources. Built with modern React patterns and responsive design.',
      tags: ['React', 'JavaScript', 'CSS', 'HTML', 'Responsive Design'],
      githubUrl: 'https://github.com/hloni2004/StudentMarket-Group-React',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Timetable Management System',
      description:
        'Updated version of the Java-based desktop application for designing and managing academic timetables. Includes enhanced GUI with Java Swing, new scheduling features, improved database integration using Derby DB, and modular design for scalability.',
      tags: ['Java', 'Swing', 'Derby DB', 'Desktop App', 'GUI', 'Scheduling', 'Timetable'],
      githubUrl: 'https://github.com/hloni2004/Timetable-Management-System',
      gradient: 'from-green-400 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 h-full relative z-10">
                {/* Gradient header */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-xl mb-6`}
                />

                {/* Title */}
                <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

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

                {/* GitHub Button */}
                <div className="flex justify-center z-20 relative">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-gray-700 text-white font-mono font-semibold rounded-lg border border-gray-600 transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/25"
                  >
                    <FaGithub size={14} />
                    View Code
                  </motion.a>
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
