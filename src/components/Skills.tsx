import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    { 
      name: 'React', 
      color: 'from-cyan-400 to-blue-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Java', 
      color: 'from-orange-400 to-red-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
      name: 'Spring Boot', 
      color: 'from-green-400 to-emerald-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
    },
    { 
      name: 'Python', 
      color: 'from-yellow-400 to-amber-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'MySQL', 
      color: 'from-blue-400 to-indigo-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 text-center transition-all duration-300 hover:border-cyan-400/50 h-full flex flex-col items-center justify-center">
                <motion.div
                  className="mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                >
                  <img 
                    src={skill.image} 
                    alt={`${skill.name} logo`} 
                    className="w-12 h-12 object-contain filter brightness-110 drop-shadow-lg"
                    onError={(e) => {
                      // Fallback to a default icon if custom image fails to load
                      const target = e.currentTarget;
                      target.src = `https://via.placeholder.com/48/00ffff/ffffff?text=${skill.name.charAt(0)}`;
                    }}
                  />
                </motion.div>
                <h3 className={`text-sm font-mono font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  {skill.name}
                </h3>
                
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300 blur-xl`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 font-mono text-sm mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'Node.js', 'Git', 'Docker', 'REST APIs', 'Tailwind CSS'].map((tech) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs font-mono bg-gray-700/30 text-gray-300 rounded-full border border-gray-600/30 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;