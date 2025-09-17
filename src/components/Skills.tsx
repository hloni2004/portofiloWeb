import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const skills = [
    { 
      name: 'React', 
      color: 'from-cyan-400 to-blue-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 85,
      category: 'frontend',
      description: 'Building dynamic UIs with hooks and modern patterns'
    },
    { 
      name: 'Java', 
      color: 'from-orange-400 to-red-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      level: 90,
      category: 'backend',
      description: 'Object-oriented programming and enterprise applications'
    },
    { 
      name: 'Spring Boot', 
      color: 'from-green-400 to-emerald-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      level: 80,
      category: 'backend',
      description: 'RESTful APIs and microservices architecture'
    },
    { 
      name: 'Python', 
      color: 'from-yellow-400 to-amber-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      level: 75,
      category: 'data',
      description: 'Data analysis, automation, and backend development'
    },
    { 
      name: 'MySQL', 
      color: 'from-blue-400 to-indigo-500', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      level: 85,
      category: 'database',
      description: 'Database design, optimization, and complex queries'
    },
    { 
      name: 'TypeScript', 
      color: 'from-blue-500 to-indigo-600', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      level: 80,
      category: 'frontend',
      description: 'Type-safe JavaScript development'
    },
    { 
      name: 'Node.js', 
      color: 'from-green-500 to-green-600', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      level: 75,
      category: 'backend',
      description: 'Server-side JavaScript and API development'
    },
    { 
      name: 'Git', 
      color: 'from-red-400 to-red-600', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      level: 85,
      category: 'tools',
      description: 'Version control and collaborative development'
    },
  ];

  const categories = [
    { name: 'all', label: 'All Skills', icon: '🎯' },
    { name: 'frontend', label: 'Frontend', icon: '🎨' },
    { name: 'backend', label: 'Backend', icon: '⚙️' },
    { name: 'database', label: 'Database', icon: '🗄️' },
    { name: 'data', label: 'Data', icon: '📊' },
    { name: 'tools', label: 'Tools', icon: '🔧' },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

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
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            Interactive Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 font-mono font-semibold rounded-lg transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          key={selectedCategory} // Re-animate when category changes
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.4)',
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative cursor-pointer"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 text-center transition-all duration-300 hover:border-cyan-400/50 h-full flex flex-col items-center justify-between relative overflow-hidden">
                {/* Interactive particles on hover */}
                {hoveredSkill === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
                        style={{
                          left: `${20 + i * 10}%`,
                          top: `${20 + (i % 3) * 30}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </div>
                )}

                <motion.div
                  className="mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  animate={hoveredSkill === index ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={skill.image} 
                    alt={`${skill.name} logo`} 
                    className="w-12 h-12 object-contain filter brightness-110 drop-shadow-lg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = `https://via.placeholder.com/48/00ffff/ffffff?text=${skill.name.charAt(0)}`;
                    }}
                  />
                </motion.div>
                
                <div className="w-full">
                  <h3 className={`text-sm font-mono font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent mb-2`}>
                    {skill.name}
                  </h3>
                  
                  {/* Interactive description on hover */}
                  <motion.p
                    className="text-xs text-gray-400 mb-3 h-8 flex items-center justify-center"
                    animate={hoveredSkill === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {hoveredSkill === index ? skill.description : ''}
                  </motion.p>
                  
                  {/* Animated skill level bar */}
                  <div className="w-full bg-gray-700/50 rounded-full h-2 mb-1 relative overflow-hidden">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={hoveredSkill === index ? {
                          x: ['-100%', '100%'],
                        } : {}}
                        transition={{ duration: 1, repeat: hoveredSkill === index ? Infinity : 0 }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.span 
                    className="text-xs text-gray-400 font-mono"
                    animate={hoveredSkill === index ? { 
                      scale: [1, 1.1, 1],
                      color: ['#9CA3AF', '#00FFFF', '#9CA3AF']
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                
                {/* Enhanced glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300 blur-xl`}
                  animate={hoveredSkill === index ? { scale: [0.8, 1.3, 1.1] } : { scale: 0.8 }}
                  transition={{ duration: 0.5 }}
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