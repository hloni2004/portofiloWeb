import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 font-mono text-sm mb-2">
            © 2025 Lehlohonolo Mokoena. All rights reserved.
          </p>
          <p className="text-gray-400 font-mono text-sm mb-2">
            Live demo: <a className="underline text-cyan-400" href="https://alert-emegerency.vercel.app/" target="_blank" rel="noopener noreferrer">AlertFast</a> • Contact: <a className="underline text-cyan-400" href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
          </p>
          <motion.p
            className="text-xs text-gray-500 font-mono"
            animate={{
              color: ['#6b7280', '#00ffff', '#ff00ff', '#6b7280'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Built with React, TypeScript & Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;