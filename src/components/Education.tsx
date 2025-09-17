import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education: React.FC = () => {
  const educationData = [
    {
      year: "2025",
      title: "Diploma in Application Development - Third Year",
      institution: "Cape Peninsula University of Technology (CPUT)",
      location: "Cape Town, South Africa",
      status: "Current",
      modules: [
        { name: "Application Development 3", description: "Spring Boot & REST API, backend with React frontend." },
        { name: "Application Development Theory", description: "Applying Agile principles to projects efficiently." },
        { name: "Project 3", description: "Developing solutions that address real societal needs." },
        { name: "ICT Elective 3", description: "Basics of IoT applied in a smart room project." },
        { name: "Information Systems", description: "Database design for real-world solutions." },
        { name: "Professional Practice", description: "Professional ethics and workplace behavior." },
        { name: "Project Management", description: "Advanced planning, organizing, and managing projects." }
      ],
      gradient: "from-green-400 to-emerald-500"
    },
    {
      year: "2023",
      title: "Diploma in Application Development - Second Year",
      institution: "Cape Peninsula University of Technology (CPUT)",
      location: "Cape Town, South Africa",
      modules: [
        { name: "Application Development Fundamentals", description: "Basics of organizing data with arrays, lists, stacks." },
        { name: "Application Development ADP2", description: "Advanced Java, OOP, inheritance, and Python basics." },
        { name: "Application Development Theory", description: "Software principles, design patterns, and SDLC." },
        { name: "Information Systems", description: "Database design and SQL for real-world systems." },
        { name: "Information Management", description: "Planning and organizing professional info." },
        { name: "Project2", description: "Team projects emphasizing planning and execution." },
        { name: "Professional Presentation", description: "Ethics, presentation, and communication skills." },
        { name: "Communication Network", description: "Networking fundamentals and protocols." }
      ],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      year: "2022",
      title: "Diploma in Application Development - First Year", 
      institution: "Cape Peninsula University of Technology (CPUT)",
      location: "Cape Town, South Africa",
      modules: [
        { name: "Programming", description: "Basic JavaScript, CSS, HTML foundation." },
        { name: "Application Development", description: "Introduction to Java programming basics." },
        { name: "Application Development Fundamentals", description: "Data structures like arrays, lists, stacks." },
        { name: "Multimedia", description: "Color theory, UX, and visual design basics." },
        { name: "Business Skills", description: "Business aspects of technology projects." },
        { name: "Information Systems Fundamentals", description: "Essential hardware, software, and IT concepts." },
        { name: "Communication Network", description: "Networking fundamentals and protocols." }
      ],
      gradient: "from-cyan-400 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const moduleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <section id="education" className="py-16 px-4 relative">
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
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaGraduationCap className="text-3xl text-cyan-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
              Education
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-md text-gray-300 max-w-xl mx-auto">
            My academic journey in application development, building the foundation for my tech career
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.year}
              variants={cardVariants}
              whileHover={{ scale: 1.01, boxShadow: '0 15px 30px rgba(0, 255, 255, 0.1)' }}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 relative z-10">
                {/* Year badge */}
                <motion.div
                  className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${education.gradient} rounded-full text-white font-mono font-bold text-xs mb-4 relative`}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt size={12} />
                  {education.year}
                  {education.status && (
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xs bg-white/20 px-1 py-0.5 rounded-full ml-1"
                    >
                      {education.status}
                    </motion.span>
                  )}
                </motion.div>

                {/* Institution info */}
                <div className="mb-4">
                  <h3 className="text-xl font-mono font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {education.title}
                  </h3>
                  <h4 className="text-sm text-gray-300 mb-1">{education.institution}</h4>
                  <div className="flex items-center gap-1 text-gray-400 font-mono text-xs">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    {education.location}
                  </div>
                </div>

                {/* Modules section */}
                <div>
                  <h4 className="text-sm font-mono font-semibold text-white mb-2 flex items-center gap-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${education.gradient} rounded-full`} />
                    Modules & Descriptions
                  </h4>
                  
                  <motion.div
                    variants={containerVariants}
                    className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto"
                  >
                    {education.modules.map((module) => (
                      <motion.div
                        key={module.name}
                        variants={moduleVariants}
                        whileHover={{ scale: 1.03, zIndex: 50 }}
                        className="bg-gray-700/20 backdrop-blur-sm border border-gray-600/20 rounded-md p-2 transition-all duration-300 hover:border-cyan-400/50 group/module relative cursor-pointer"
                        style={{ transformOrigin: 'center' }}
                      >
                        <h5 className="font-mono font-semibold text-cyan-400 mb-1 text-xs group-hover/module:text-purple-400 transition-colors">
                          {module.name}
                        </h5>
                        <p className="text-gray-400 text-[10px] leading-snug group-hover/module:text-gray-200 transition-colors duration-300">
                          {module.description}
                        </p>

                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover/module:opacity-100 rounded-md transition-opacity duration-300 blur-sm pointer-events-none"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Card glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${education.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 blur-xl pointer-events-none`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* Timeline connector */}
              {index < educationData.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 w-px h-6 bg-gradient-to-b from-cyan-400 to-transparent"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
