import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-white hover:shadow-white/25',
      hoverColor: 'group-hover:from-gray-400 group-hover:to-gray-600',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400 hover:shadow-blue-400/25',
      hoverColor: 'group-hover:from-blue-400 group-hover:to-blue-600',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      url: 'mailto:lehlohonolo@example.com',
      color: 'hover:text-cyan-400 hover:shadow-cyan-400/25',
      hoverColor: 'group-hover:from-cyan-400 group-hover:to-cyan-600',
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
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            Let's build something amazing together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              variants={itemVariants}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`w-16 h-16 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl flex items-center justify-center transition-all duration-300 ${link.color} hover:border-current`}>
                <link.icon size={28} className="transition-all duration-300" />
                
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 rounded-xl transition-all duration-300 blur-lg ${link.hoverColor}`}
                  whileHover={{ opacity: 0.3, scale: 1.5 }}
                />
              </div>
              
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-mono text-gray-400 whitespace-nowrap"
              >
                {link.label}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-full text-gray-300"
        >
          <FaMapMarkerAlt className="text-cyan-400" />
          <span className="font-mono text-sm">Cape Town, South Africa</span>
        </motion.div>
      </div>
      
      {/* Bottom gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-16"
      />
    </section>
  );
};

export default Contact;