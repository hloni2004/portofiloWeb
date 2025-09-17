import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor="pointer"]')) {
        setIsHovering(true);
        setCursorVariant('pointer');
      } else if (target.matches('input, textarea')) {
        setIsHovering(true);
        setCursorVariant('text');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(0, 255, 255, 0.2)',
      border: '2px solid rgba(0, 255, 255, 0.5)',
    },
    pointer: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(255, 0, 255, 0.2)',
      border: '2px solid rgba(255, 0, 255, 0.8)',
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 20,
      scale: 0.8,
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
      border: '2px solid rgba(0, 255, 0, 0.8)',
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={variants[cursorVariant as keyof typeof variants]}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-40 opacity-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, delay: 0.05 }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-purple-400 rounded-full pointer-events-none z-40 opacity-30"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, delay: 0.1 }}
      />
    </>
  );
};

export default InteractiveCursor;