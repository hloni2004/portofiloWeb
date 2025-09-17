import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaProjectDiagram, FaGraduationCap } from 'react-icons/fa';

const InteractiveStats: React.FC = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    {
      icon: FaCode,
      value: 1000,
      suffix: '+',
      label: 'Lines of Code',
      description: 'Written across various projects',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-400/10',
    },
    {
      icon: FaProjectDiagram,
      value: 8,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Full-stack applications built',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: FaGraduationCap,
      value: 3,
      suffix: ' Years',
      label: 'Learning Journey',
      description: 'Continuous skill development',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-400/10',
    },
  ];

  const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({ 
    value, 
    duration = 2 
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [value, duration]);

    return <span>{count}</span>;
  };

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
            Interactive Stats
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(0, 255, 255, 0.2)' 
              }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              className="group relative cursor-pointer"
            >
              <div className={`${stat.bgColor} backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 text-center transition-all duration-300 hover:border-cyan-400/50 h-full`}>
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}
                  animate={hoveredStat === index ? { 
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="text-white text-2xl" />
                </motion.div>

                {/* Animated Number */}
                <motion.div
                  className={`text-3xl font-mono font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  animate={hoveredStat === index ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-mono font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <motion.p
                  className="text-sm text-gray-400 transition-all duration-300"
                  animate={hoveredStat === index ? { 
                    opacity: [0.7, 1],
                    y: [0, -2, 0]
                  } : {}}
                >
                  {stat.description}
                </motion.p>

                {/* Hover Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 blur-xl pointer-events-none`}
                  animate={hoveredStat === index ? { scale: [0.8, 1.2, 1] } : {}}
                />

                {/* Interactive Particles */}
                {hoveredStat === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${stat.color} rounded-full`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${20 + (i % 2) * 60}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveStats;