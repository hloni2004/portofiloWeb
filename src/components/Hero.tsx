import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Image is stored in the `public/icons` folder. Vite serves files in `public/` at the site root.
const hloni = '/icons/hloni.jpg';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [imageError, setImageError] = useState(false);
  const fullText = "Hi, I'm Lehlohonolo Mokoena";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleImageError = () => {
    console.log(`Image failed to load: ${hloni}`);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log(`Image loaded successfully: ${hloni}`);
  };

  return (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pro-section pro-fade bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-slate-900/50 to-gray-800/30" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4 pro-card"
      >
        {/* Flex container for profile image + animated name */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Profile Picture with debug info */}
          <div className="relative">
            {!imageError ? (
              <a href={hloni} target="_blank" rel="noopener noreferrer" aria-label="Open profile image in new tab">
                <motion.img
                  src={hloni}
                  alt="Lehlohonolo Mokoena"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-400/30 object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              </a>
            ) : (
              // Fallback placeholder when image fails to load
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">👨‍💻</div>
                  <div className="text-xs text-gray-400">Image not found</div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Animated Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl pro-heading"
            style={{
              background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-cyan-400"
            >
              |
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed pro-fade"
        >
          Full-Stack Developer & Data Analytics Trainee | Ready for collaboration
        </motion.p>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const skillsSection = document.querySelector('#skills');
              skillsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 pro-btn cursor-pointer"
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rotate-45"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 0.8, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-10 w-16 h-16 border border-purple-400/30 rounded-full"
      />
    </section>
  );
};

export default Hero;