'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const targetDate = new Date('2025-05-16T00:00:00');

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isComplete, setIsComplete] = useState(false);
  const [particlePositions, setParticlePositions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.total <= 0) {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 1000);

    if (typeof window !== 'undefined') {
      const positions = [...Array(30)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setParticlePositions(positions);
    }

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const countdownVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: 'easeIn',
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative flex flex-col items-center justify-center">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          background: "radial-gradient(circle at center, rgba(255, 215, 0, 0.15), transparent 70%)",
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {particlePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          initial={{ x: pos.x, y: pos.y }}
          animate={{
            y: [pos.y, pos.y - (typeof window !== 'undefined' ? window.innerHeight * 1.2 : 800)],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
        />
      ))}

      <motion.div
        variants={countdownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="p-10 rounded-xl border border-yellow-400/30 bg-black/70 backdrop-blur-md shadow-2xl w-full max-w-2xl flex flex-col items-center justify-center overflow-hidden relative"
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-4 border border-yellow-400/40 rounded-full"></div>
          <div className="absolute inset-8 border border-yellow-400/20 rounded-full"></div>
        </motion.div>

        {!isComplete ? (
          <>
            <motion.h1
              variants={numberVariants}
              className="text-4xl md:text-5xl font-bold mb-8 text-yellow-300 relative text-center"
              animate={{
                textShadow: ["0 0 5px #FFD700", "0 0 15px #FFD700", "0 0 5px #FFD700"],
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Countdown to May 16,<br />2025
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  initial={{ x: 0, y: 0 }}
                  animate={{
                    x: Math.cos(i * 72) * 40,
                    y: Math.sin(i * 72) * 40 - 40,
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)' }}
                />
              ))}
            </motion.h1>
            <motion.div
              variants={countdownVariants}
              className="flex flex-row gap-4 md:grid md:grid-cols-4 md:gap-8 justify-center relative"
            >
              {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                <motion.div
                  key={unit}
                  variants={numberVariants}
                  whileHover={pulseAnimation}
                  className="flex flex-col items-center relative"
                >
                  <motion.span
                    className="text-4xl md:text-6xl font-bold tabular-nums text-yellow-400 relative"
                    animate={{
                      y: [0, -5, 0],
                      color: ["#FFD700", "#FFFF00", "#FFD700"],
                      textShadow: ["0 0 5px #FFD700", "0 0 10px #FFD700", "0 0 5px #FFD700"],
                    }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {timeLeft[unit] < 0 ? 0 : timeLeft[unit]}
                    <motion.div
                      className="absolute w-2 h-2 bg-yellow-200 rounded-full"
                      animate={{
                        rotate: [0, 360],
                        x: Math.cos(index * 90) * 25,
                        y: Math.sin(index * 90) * 25,
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    />
                  </motion.span>
                  <span className="text-base md:text-xl text-yellow-300/80 capitalize mt-2">{unit}</span>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-center relative"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">The Countdown is Complete!</h1>
            <p className="mt-4 text-xl text-yellow-400/80">May 16, 2025 has arrived!</p>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-yellow-400 rounded-full"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: Math.cos(i * 30) * 100,
                  y: Math.sin(i * 30) * 100,
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{ duration: 2, ease: 'easeOut', delay: i * 0.1 }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}