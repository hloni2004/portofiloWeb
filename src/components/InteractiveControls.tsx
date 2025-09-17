import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVolumeUp, FaVolumeMute, FaPalette, FaMoon, FaSun, FaCog } from 'react-icons/fa';
import { soundEffects } from '../utils/soundEffects';

const InteractiveControls: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleSound = () => {
    if (!soundEnabled) {
      soundEffects.enable();
      soundEffects.playNotification();
    }
    setSoundEnabled(!soundEnabled);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
    if (soundEnabled) {
      soundEffects.playClick();
    }
  };

  const handleControlClick = (action: () => void) => {
    if (soundEnabled) {
      soundEffects.playClick();
    }
    action();
  };

  return (
    <div className="fixed bottom-20 right-8 z-40">
      {/* Main Control Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleControlClick(() => setIsOpen(!isOpen))}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-cyan-400/30 mb-4"
        data-cursor="pointer"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaCog size={20} />
        </motion.div>
      </motion.button>

      {/* Control Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "backOut" }}
            className="bg-gray-800/90 backdrop-blur-md border border-gray-600/30 rounded-xl p-4 space-y-3 min-w-[200px]"
          >
            {/* Sound Control */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
              onClick={() => handleControlClick(toggleSound)}
              data-cursor="pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  soundEnabled ? 'bg-green-500' : 'bg-gray-600'
                }`}>
                  {soundEnabled ? <FaVolumeUp size={14} /> : <FaVolumeMute size={14} />}
                </div>
                <span className="text-sm font-mono text-white">Sound Effects</span>
              </div>
              <motion.div
                className={`w-10 h-6 rounded-full p-1 transition-colors ${
                  soundEnabled ? 'bg-green-500' : 'bg-gray-600'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleControlClick(toggleSound);
                }}
              >
                <motion.div
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{ x: soundEnabled ? 16 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>

            {/* Theme Control */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
              onClick={() => handleControlClick(toggleTheme)}
              data-cursor="pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  {theme === 'dark' ? <FaMoon size={14} /> : <FaSun size={14} />}
                </div>
                <span className="text-sm font-mono text-white">
                  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </span>
              </div>
              <motion.div
                whileHover={{ rotate: 180 }}
                className="text-gray-400"
              >
                <FaPalette size={16} />
              </motion.div>
            </motion.div>

            {/* Motion Control */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
              onClick={() => handleControlClick(() => setReducedMotion(!reducedMotion))}
              data-cursor="pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  !reducedMotion ? 'bg-blue-500' : 'bg-gray-600'
                }`}>
                  <motion.div
                    animate={!reducedMotion ? { rotate: 360 } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border-2 border-white border-t-transparent rounded-full"
                  />
                </div>
                <span className="text-sm font-mono text-white">Animations</span>
              </div>
              <motion.div
                className={`w-10 h-6 rounded-full p-1 transition-colors ${
                  !reducedMotion ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{ x: !reducedMotion ? 16 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>

            {/* Info */}
            <div className="pt-2 border-t border-gray-600/30">
              <p className="text-xs text-gray-400 font-mono text-center">
                Interactive Controls
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Particles around controls */}
      {isOpen && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveControls;