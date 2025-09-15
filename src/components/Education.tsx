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
        {
          name: "Application Development 3",
          description: "Currently learning Spring Boot and RESTful API development, creating a fully functional website using Spring framework for backend and React for frontend."
        },
        {
          name: "Application Development Theory",
          description: "Applying Agile principles to projects, focusing on designing and developing high-quality products efficiently."
        },
        {
          name: "Project 3",
          description: "Conceptualizing ideas and bringing them to life by developing solutions that address real societal needs."
        },
        {
          name: "ICT Elective 3",
          description: "Learned the basics of IoT and developed a smart room project to apply theoretical knowledge in practical settings."
        },
        {
          name: "Information Systems",
          description: "Applied database design principles by creating an advanced database system for a local shop to implement real-world solutions."
        },
        {
          name: "Professional Practice",
          description: "Learning professional ethics, conduct, and workplace behavior to prepare for industry practice."
        },
        {
          name: "Project Management",
          description: "Gaining advanced skills in planning, organizing, and managing projects effectively."
        }
      ],
      gradient: "from-green-400 to-emerald-500"
    },
    {
      year: "2023",
      title: "Diploma in Application Development - Second Year",
      institution: "Cape Peninsula University of Technology (CPUT)",
      location: "Cape Town, South Africa",
      modules: [
        {
          name: "Application Development Fundamentals",
          description: "Introduction to principles of application development while gaining skills in efficiently organizing data using arrays, lists, stacks, and other structures."
        },
        {
          name: "Application Development ADP2", 
          description: "Explored advanced Java programming, object-oriented design, inheritance, and database integration, and completed an elective learning the fundamentals of Python."
        },
        {
          name: "Application Development Theory",
          description: "Strengthened understanding of software development principles, design patterns, and the software development lifecycle."
        },
        {
          name: "Information Systems",
          description: "Developed skills in database design and SQL, and learned to manage and implement information systems effectively."
        },
        {
          name: "Information Management",
          description: "Studied project management methods, planning techniques, and strategies for organizing professional information."
        },
        {
          name: "Project2",
          description: "Led and contributed to a professional project, emphasizing teamwork, planning, and successful execution."
        },
        {
          name: "Professional Presentation",
          description: "Developed professional ethics, improved presentation skills, and learned to communicate and present technical projects effectively."
        },
        {
          name: "Communication Network",
          description: "Learned about networking fundamentals, protocols, communication processes, and their theoretical applications."
        }
      ],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      year: "2022",
      title: "Diploma in Application Development - First Year", 
      institution: "Cape Peninsula University of Technology (CPUT)",
      location: "Cape Town, South Africa",
      modules: [
        {
          name: "Programming",
          description: "Learned basic JavaScript, CSS, and HTML, building a solid foundation in multiple programming languages."
        },
        {
          name: "Application Development",
          description: "Introduced to the basics of Java programming, learning the theory behind the language and fundamental concepts."
        },
        {
          name: "Application Development Fundamentals",
          description: "Introduction to principles of application development while gaining skills in efficiently organizing data using arrays, lists, stacks, and other structures."
        },
        {
          name: "Multimedia",
          description: "Learned color theory, UX design, and the importance of visual design in applications."
        },
        {
          name: "Business Skills",
          description: "Studied the business aspects of technology and how projects align with organizational goals."
        },
        {
          name: "Information Systems Fundamentals",
          description: "Developed an understanding of essential hardware, software, and IT concepts for a technology career."
        },
        {
          name: "Communication Network",
          description: "Learned the basics of networking, including protocols and network fundamentals."
        }
      ],
      gradient: "from-cyan-400 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const moduleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaGraduationCap className="text-4xl text-cyan-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-white">
              Education
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My academic journey in application development, building the foundation for my tech career
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.year}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0, 255, 255, 0.15)',
              }}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-8 transition-all duration-300 hover:border-cyan-400/50">
                {/* Year badge */}
                <motion.div
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${education.gradient} rounded-full text-white font-mono font-bold text-sm mb-6 relative`}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt size={14} />
                  {education.year}
                  {education.status && (
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xs bg-white/20 px-2 py-1 rounded-full ml-2"
                    >
                      {education.status}
                    </motion.span>
                  )}
                </motion.div>

                {/* Institution info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-mono font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {education.title}
                  </h3>
                  <h4 className="text-xl text-gray-300 mb-2">{education.institution}</h4>
                  <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    {education.location}
                  </div>
                </div>

                {/* Modules section */}
                <div>
                  <h4 className="text-lg font-mono font-semibold text-white mb-4 flex items-center gap-2">
                    <div className={`w-3 h-3 bg-gradient-to-r ${education.gradient} rounded-full`} />
                    Modules & Descriptions
                  </h4>
                  
                  <motion.div
                    variants={containerVariants}
                    className="grid gap-3 md:grid-cols-3 lg:grid-cols-4"
                  >
                    {education.modules.map((module, moduleIndex) => (
                      <motion.div
                        key={module.name}
                        variants={moduleVariants}
                        whileHover={{ 
                          scale: 1.15,
                          zIndex: 10,
                          boxShadow: '0 15px 35px rgba(0, 255, 255, 0.2)'
                        }}
                        className="bg-gray-700/20 backdrop-blur-sm border border-gray-600/20 rounded-lg p-3 transition-all duration-300 hover:border-cyan-400/50 group/module relative cursor-pointer"
                      >
                        <h5 className="font-mono font-semibold text-cyan-400 mb-1 text-sm group-hover/module:text-purple-400 transition-colors line-clamp-2">
                          {module.name}
                        </h5>
                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 group-hover/module:text-gray-200 group-hover/module:line-clamp-none transition-all duration-300">
                          {module.description}
                        </p>
                        
                        {/* Module hover glow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover/module:opacity-100 rounded-lg transition-opacity duration-300 blur-sm pointer-events-none"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.2 }}
                        />

                        {/* Expanded background on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gray-800/90 backdrop-blur-md border border-cyan-400/30 rounded-lg opacity-0 group-hover/module:opacity-100 transition-all duration-300 pointer-events-none"
                          initial={{ scale: 0.95 }}
                          whileHover={{ scale: 1 }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Card glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${education.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 blur-xl`}
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
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-4 w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mt-16"
        />
      </div>
    </section>
  );
};

export default Education;