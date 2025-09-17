import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const InteractiveTimeline: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const timelineEvents = [
    {
      year: '2022',
      title: 'Started Application Development Journey',
      description: 'Began my diploma at CPUT, learning the fundamentals of programming with JavaScript, HTML, CSS, and Java basics.',
      skills: ['JavaScript', 'HTML', 'CSS', 'Java Basics'],
      color: 'from-blue-400 to-cyan-500',
      icon: '🚀'
    },
    {
      year: '2023',
      title: 'Advanced Programming & Database Design',
      description: 'Mastered advanced Java concepts, OOP principles, Python basics, and database design with SQL.',
      skills: ['Advanced Java', 'OOP', 'Python', 'SQL', 'Database Design'],
      color: 'from-purple-400 to-pink-500',
      icon: '💻'
    },
    {
      year: '2024',
      title: 'Full-Stack Development & Data Analytics',
      description: 'Built complete applications with Spring Boot backends and React frontends. Started data analytics training.',
      skills: ['Spring Boot', 'React', 'REST APIs', 'Data Analytics', 'Project Management'],
      color: 'from-green-400 to-emerald-500',
      icon: '🔧'
    },
    {
      year: '2025',
      title: 'Professional Development & Innovation',
      description: 'Currently focusing on advanced project development, IoT applications, and preparing for industry collaboration.',
      skills: ['IoT', 'Advanced React', 'Professional Ethics', 'Team Leadership'],
      color: 'from-yellow-400 to-orange-500',
      icon: '🎯'
    }
  ];



  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            Learning Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 mb-8">Click on any timeline event to explore my learning journey</p>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-orange-500 rounded-full" />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isActive = index <= currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0.3, scale: 0.9 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.3,
                    scale: isCurrent ? 1.05 : isActive ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 flex items-center justify-center cursor-pointer z-10 ${
                      isActive 
                        ? 'border-white bg-gradient-to-r ' + event.color
                        : 'border-gray-600 bg-gray-800'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    animate={isCurrent ? {
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 0px rgba(0, 255, 255, 0)',
                        '0 0 20px rgba(0, 255, 255, 0.8)',
                        '0 0 0px rgba(0, 255, 255, 0)'
                      ]
                    } : {}}
                    transition={{ duration: 1, repeat: isCurrent ? Infinity : 0 }}
                  >
                    <span className="text-xs">{event.icon}</span>
                  </motion.div>

                  {/* Event Card */}
                  <motion.div
                    className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                      isActive 
                        ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/10' 
                        : 'border-gray-600/30'
                    }`}>
                      {/* Year Badge */}
                      <motion.div
                        className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${event.color} rounded-full text-white font-mono font-bold text-sm mb-4`}
                        animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <FaCalendarAlt size={12} />
                        {event.year}
                      </motion.div>

                      {/* Title */}
                      <h3 className={`text-xl font-mono font-bold mb-3 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-500'
                      }`}>
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                        isActive ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {event.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {event.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isActive ? { 
                              opacity: 1, 
                              scale: 1,
                              transition: { delay: skillIndex * 0.1 }
                            } : { opacity: 0.5, scale: 0.9 }}
                            className={`px-2 py-1 text-xs font-mono rounded-full border transition-all duration-300 ${
                              isActive
                                ? 'bg-gray-700/50 text-cyan-400 border-cyan-400/30'
                                : 'bg-gray-800/50 text-gray-600 border-gray-600/30'
                            }`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>


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
              <span>Progress</span>
              <span>{Math.round(((currentStep + 1) / timelineEvents.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                animate={{ width: `${((currentStep + 1) / timelineEvents.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;