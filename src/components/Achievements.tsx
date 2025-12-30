import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaCertificate, FaStar, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: '2025 Stellar Blockchain Hackathon Winner',
      icon: FaTrophy,
      description: 'Won the 2025 Stellar Blockchain Hackathon with SkillLink Africa, a decentralized freelance marketplace',
      year: '2025',
      gradient: 'from-yellow-400 to-amber-500',
      type: 'award',
      link: '/stellar.pdf'
    },
    {
      title: 'CompTIA Data+ Certified',
      icon: FaCertificate,
      description: 'Earned CompTIA Data+ certification demonstrating proficiency in data analytics fundamentals',
      year: '2025',
      link: 'https://www.credly.com/badges/d0185e43-920b-4f79-b31f-9d4828a08af3',
      gradient: 'from-cyan-400 to-blue-500',
      type: 'certification'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);

  const openViewer = (src: string) => {
    setViewerSrc(src);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
    setViewerSrc(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="achievements" className="py-16 px-4 relative">
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
              animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaStar className="text-3xl text-yellow-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
              Achievements & Certifications
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-md text-gray-300 max-w-xl mx-auto">
            Recognition and professional certifications earned throughout my journey
          </p>
        </motion.div>

          {/* PDF Viewer Modal */}
          <AnimatePresence>
            {viewerOpen && viewerSrc && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full h-[80vh]"
                >
                  <div className="flex items-center justify-between p-3 border-b border-gray-800">
                    <div className="text-sm text-gray-300 font-mono">Certificate Preview</div>
                    <div className="flex items-center gap-2">
                      <a href={viewerSrc} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline">
                        Open in new tab
                      </a>
                      <button onClick={closeViewer} className="text-gray-300 hover:text-white">
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-full bg-gray-800">
                    <iframe src={viewerSrc} title="Certificate" className="w-full h-full" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0, 255, 255, 0.2)' }}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 h-full relative overflow-hidden">
                {/* Year Badge */}
                <motion.div
                  className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${achievement.gradient} rounded-full text-white font-mono font-bold text-xs mb-4`}
                  whileHover={{ scale: 1.05 }}
                >
                  {achievement.year}
                </motion.div>

                {/* Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-r ${achievement.gradient} bg-opacity-10`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon className={`text-2xl bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-mono font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {achievement.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {/* Badge Link if available */}
                {achievement.link && (
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      // Open PDF links in viewer, external links in new tab
                      if (achievement.link.endsWith('.pdf') || achievement.type === 'award') {
                        openViewer(achievement.link);
                      } else {
                        window.open(achievement.link, '_blank');
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-cyan-400 font-mono font-semibold text-xs rounded-lg border border-cyan-400/30 hover:border-cyan-400 hover:bg-gray-700 transition-all duration-300"
                  >
                    {achievement.type === 'award' ? <FaTrophy size={12} /> : <FaCertificate size={12} />}
                    {achievement.type === 'award' ? 'View Certificate' : 'View Badge'}
                    <FaExternalLinkAlt size={10} />
                  </motion.button>
                )}

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-[10px] font-mono font-bold uppercase bg-gradient-to-r ${achievement.gradient} bg-opacity-10 text-gray-300 rounded-full border border-current`}>
                    {achievement.type}
                  </span>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 blur-xl pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Hackathon Wins', value: '1', icon: '🏆' },
            { label: 'Certifications', value: '1', icon: '📜' },
            { label: 'Projects Completed', value: '5+', icon: '💼' },
            { label: 'Years Experience', value: '3', icon: '⏱️' }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-600/20 rounded-lg p-4 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-mono font-bold text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
