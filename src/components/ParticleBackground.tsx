import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    type: Math.random() > 0.7 ? 'glow' : 'normal',
  }));

  const floatingShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    size: Math.random() * 40 + 20,
    duration: Math.random() * 20 + 15,
    shape: Math.random() > 0.5 ? 'circle' : 'square',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className={`absolute border border-cyan-400/10 ${
            shape.shape === 'circle' ? 'rounded-full' : 'rotate-45'
          }`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          animate={{
            rotate: shape.shape === 'circle' ? [0, 360] : [0, 180, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            particle.type === 'glow'
              ? 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 shadow-lg shadow-cyan-400/10'
              : 'bg-slate-400/15'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: particle.type === 'glow' ? [0.3, 1, 0.3] : [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Connecting lines animation */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 0,50 Q 25,25 50,50 T 100,50"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          animate={{
            d: [
              "M 0,50 Q 25,25 50,50 T 100,50",
              "M 0,50 Q 25,75 50,50 T 100,50",
              "M 0,50 Q 25,25 50,50 T 100,50",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(255, 0, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0.3)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ParticleBackground;