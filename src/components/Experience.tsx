import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChartBar, FaDatabase, FaPython, FaTable, FaChartLine } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experience = {
    role: 'Data Analyst',
    company: 'Capaciti',
    location: 'Cape Town, South Africa',
    period: 'June 2025 – Present',
    type: 'Current Position',
    responsibilities: [
      'Analyze and visualize data using Excel, Power BI, SQL, and Python',
      'Develop reports and dashboards for data-driven decision-making',
      'Gain hands-on experience in ETL, data cleaning, and automating analyses'
    ],
    technologies: [
      { name: 'Power BI', icon: FaChartLine, color: 'text-yellow-400' },
      { name: 'Python', icon: FaPython, color: 'text-blue-400' },
      { name: 'SQL', icon: FaDatabase, color: 'text-cyan-400' },
      { name: 'Excel', icon: FaTable, color: 'text-green-400' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-16 px-4 relative bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaBriefcase className="text-3xl text-cyan-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
              Work Experience
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01, boxShadow: '0 15px 30px rgba(0, 255, 255, 0.15)' }}
          className="group relative"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-400/50 relative overflow-hidden">
            {/* Current Position Badge */}
            <motion.div
              className="absolute top-0 right-0 m-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-mono font-bold rounded-full">
                {experience.type}
              </span>
            </motion.div>

            {/* Company & Role */}
            <div className="mb-6">
              <h3 className="text-2xl font-mono font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {experience.role}
              </h3>
              <h4 className="text-xl text-cyan-400 mb-3 font-semibold">{experience.company}</h4>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-cyan-400" />
                  {experience.period}
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple-400" />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6"
            >
              <h5 className="text-sm font-mono font-semibold text-white mb-3 flex items-center gap-2">
                <FaChartBar className="text-cyan-400" />
                Key Responsibilities
              </h5>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <div>
              <h5 className="text-sm font-mono font-semibold text-white mb-3">
                Technologies & Tools
              </h5>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <tech.icon className={`${tech.color} text-lg`} />
                    <span className="text-xs font-mono text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-xl pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
