import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const educationData = [
    {
      year: "2025",
      title: "Diploma in Application Development - Third Year",
      institution: "Cape Peninsula University of Technology (CPUT)",
      location: "Cape Town, South Africa",
      status: "Current",
      icon: "🎯",
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
      icon: "💻",
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
      icon: "🚀",
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
            My academic journey in application development, building the foundation for my tech career. Click on any year to explore.
          </p>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-green-500 rounded-full" />

          {/* Education Timeline Cards */}
          <div className="space-y-16">
            {educationData.map((education, index) => {
              const isActive = index <= currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <motion.div
                  key={education.year}
                  initial={{ opacity: 0.3, scale: 0.9 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.3,
                    scale: isCurrent ? 1.02 : isActive ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 flex items-center justify-center cursor-pointer z-10 ${
                      isActive 
                        ? 'border-white bg-gradient-to-r ' + education.gradient
                        : 'border-gray-600 bg-gray-800'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    animate={isCurrent ? {
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 0px rgba(0, 255, 255, 0)',
                        '0 0 30px rgba(0, 255, 255, 0.8)',
                        '0 0 0px rgba(0, 255, 255, 0)'
                      ]
                    } : {}}
                    transition={{ duration: 1.5, repeat: isCurrent ? Infinity : 0 }}
                  >
                    <span className="text-xl">{education.icon}</span>
                  </motion.div>

                  {/* Education Card */}
                  <motion.div
                    className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/10' 
                        : 'border-gray-600/30'
                    }`}>
                      {/* Year badge */}
                      <motion.div
                        className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${education.gradient} rounded-full text-white font-mono font-bold text-xs mb-4 relative`}
                        animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.8, repeat: isCurrent ? Infinity : 0 }}
                      >
                        <FaCalendarAlt size={12} />
                        {education.year}
                        {education.status && (
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-1"
                          >
                            {education.status}
                          </motion.span>
                        )}
                      </motion.div>

                      {/* Institution info */}
                      <h3 className={`text-xl font-mono font-bold mb-2 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-500'
                      }`}>
                        {education.title}
                      </h3>
                      <h4 className={`text-sm mb-2 transition-colors duration-300 ${
                        isActive ? 'text-gray-300' : 'text-gray-600'
                      }`}>{education.institution}</h4>
                      <div className={`flex items-center gap-1 font-mono text-xs mb-4 transition-colors duration-300 ${
                        isActive ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <FaMapMarkerAlt className="text-cyan-400" />
                        {education.location}
                      </div>

                      {/* Modules section */}
                      <div>
                        <h4 className={`text-sm font-mono font-semibold mb-2 flex items-center gap-2 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-600'
                        }`}>
                          <div className={`w-2 h-2 bg-gradient-to-r ${education.gradient} rounded-full`} />
                          Key Modules
                        </h4>
                        
                        <div className="flex flex-wrap gap-2">
                          {education.modules.slice(0, 5).map((module, moduleIndex) => (
                            <motion.span
                              key={module.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isActive ? { 
                                opacity: 1, 
                                scale: 1,
                                transition: { delay: moduleIndex * 0.1 }
                              } : { opacity: 0.5, scale: 0.9 }}
                              className={`px-2 py-1 text-xs font-mono rounded-full border transition-all duration-300 ${
                                isActive
                                  ? 'bg-gray-700/50 text-cyan-400 border-cyan-400/30'
                                  : 'bg-gray-800/50 text-gray-600 border-gray-600/30'
                              }`}
                            >
                              {module.name}
                            </motion.span>
                          ))}
                          {education.modules.length > 5 && (
                            <span className={`px-2 py-1 text-xs font-mono transition-colors duration-300 ${
                              isActive ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              +{education.modules.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${education.gradient} opacity-0 rounded-xl transition-opacity duration-300 blur-xl pointer-events-none ${
                          isActive ? 'group-hover:opacity-10' : ''
                        }`}
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm font-mono text-gray-400 mb-2">
              <span>Academic Progress</span>
              <span>{Math.round(((currentStep + 1) / educationData.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="h-2 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full"
                animate={{ width: `${((currentStep + 1) / educationData.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
