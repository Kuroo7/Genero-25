// src/app/schedule/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const targetDate = new Date('2025-05-16T00:00:00');

const day1Events = [
  { time: "08:00 AM", title: "Event Registration Opens", description: "Check-in and get your event badges", location: "Main Hall" },
  { time: "09:00 AM", title: "Opening Ceremony", description: "Welcome speech and event kickoff", location: "Grand Auditorium" },
  { time: "10:00 AM", title: "Keynote Address", description: "Special guest speaker presentation", location: "Grand Auditorium" },
];

const day2Events = [
  { time: "09:00 AM", title: "Workshop Session 1", description: "Interactive learning sessions", location: "Breakout Rooms" },
  { time: "11:00 AM", title: "Panel Discussion", description: "Industry experts share insights", location: "Conference Room" },
  { time: "01:00 PM", title: "Lunch Break", description: "Networking and refreshments", location: "Dining Area" },
];

const day3Events = [
  { time: "10:00 AM", title: "Workshop Session 2", description: "Advanced learning sessions", location: "Breakout Rooms" },
  { time: "12:00 PM", title: "Lunch Break", description: "Networking and refreshments", location: "Dining Area" },
  { time: "02:00 PM", title: "Closing Remarks", description: "Event wrap-up and thank you", location: "Grand Auditorium" },
];

export default function Schedule() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isComplete, setIsComplete] = useState(false);
  const [activeDay, setActiveDay] = useState(null);
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
      seconds: Math.floor((difference / (1000 * 60)) % 60),
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
        staggerChildren: 0.2 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      transition: { 
        duration: 0.8, 
        ease: 'easeIn' 
      } 
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
        ease: 'easeOut' 
      } 
    },
  };

  const scheduleContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut', 
        when: "beforeChildren", 
        staggerChildren: 0.15 
      } 
    },
    exit: { 
      opacity: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeIn' 
      } 
    },
  };

  const scheduleItemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      transition: { 
        duration: 0.7, 
        ease: 'easeOut', 
        type: 'spring', 
        damping: 20, 
        stiffness: 100 
      } 
    },
    exit: { 
      opacity: 0, 
      x: 50, 
      scale: 0.95, 
      transition: { 
        duration: 0.5, 
        ease: 'easeIn' 
      } 
    },
  };

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: '100%', 
      opacity: 1, 
      transition: { 
        duration: 1, 
        ease: 'easeOut', 
        delay: 0.2 
      } 
    },
    exit: { 
      height: 0, 
      opacity: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeIn' 
      } 
    },
  };

  const cardHoverAnimation = {
    scale: 1.03,
    boxShadow: "0px 8px 20px rgba(255, 215, 0, 0.2)",
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
  };

  const handleDayToggle = (day) => {
    if (activeDay === day) {
      setActiveDay(null);
      setShowCountdown(true);
    } else {
      setActiveDay(day);
      setShowCountdown(false);
    }
  };

  const getActiveEvents = () => {
    switch (activeDay) {
      case 'day1': return day1Events;
      case 'day2': return day2Events;
      case 'day3': return day3Events;
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative flex flex-col items-center justify-center">
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          background: "radial-gradient(circle at center, rgba(255, 215, 0, 0.15), transparent 70%)"
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
            scale: [0, 1, 0] 
          }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
        />
      ))}

      <div className="relative max-w-3xl w-full text-center z-10 flex flex-col items-center">
        {showCountdown && (
          <motion.div
            variants={countdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-10 rounded-xl border border-yellow-400/30 bg-black/70 backdrop-blur-md shadow-2xl w-full max-w-2xl flex flex-col items-center justify-center overflow-hidden mb-8"
          >
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                rotate: [0, 360],
                opacity: [0.2, 0.5, 0.2]
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
                  className="text-4xl md:text-5xl font-bold mb-8 text-yellow-300 relative"
                  animate={{ 
                    textShadow: ["0 0 5px #FFD700", "0 0 15px #FFD700", "0 0 5px #FFD700"],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Countdown to May 16, 2025
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      initial={{ x: 0, y: 0 }}
                      animate={{ 
                        x: Math.cos(i * 72) * 40, 
                        y: Math.sin(i * 72) * 40 - 40, 
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)' }}
                    />
                  ))}
                </motion.h1>
                <motion.div 
                  variants={countdownVariants} 
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-center relative"
                >
                  {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                    <motion.div 
                      key={unit} 
                      variants={numberVariants} 
                      whileHover={pulseAnimation} 
                      className="flex flex-col items-center relative"
                    >
                      <motion.span
                        className="text-5xl md:text-6xl font-bold tabular-nums text-yellow-400 relative"
                        animate={{ 
                          y: [0, -5, 0], 
                          color: ["#FFD700", "#FFFF00", "#FFD700"],
                          textShadow: ["0 0 5px #FFD700", "0 0 10px #FFD700", "0 0 5px #FFD700"]
                        }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} // Changed from 1.8 to 1.2
                      >
                        {timeLeft[unit] < 0 ? 0 : timeLeft[unit]}
                        <motion.div
                          className="absolute w-2 h-2 bg-yellow-200 rounded-full"
                          animate={{ 
                            rotate: [0, 360],
                            x: Math.cos(index * 90) * 25,
                            y: Math.sin(index * 90) * 25,
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                      </motion.span>
                      <span className="text-lg md:text-xl text-yellow-300/80 capitalize mt-2">{unit}</span>
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
                      scale: [0, 1.5, 0]
                    }}
                    transition={{ duration: 2, ease: 'easeOut', delay: i * 0.1 }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="mb-8 flex space-x-4"
        >
          {['Day 1', 'Day 2', 'Day 3'].map((day, index) => (
            <motion.button
              key={day}
              onClick={() => handleDayToggle(`day${index + 1}`)}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.6)",
                backgroundColor: "#FFD700"
              }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 ${
                activeDay === `day${index + 1}` ? 'bg-yellow-500' : 'bg-yellow-400'
              } text-black font-semibold rounded-full transition-all duration-300 relative overflow-hidden`}
            >
              <span className="relative z-10">{day}</span>
              <motion.div 
                className="absolute inset-0 bg-white opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.button>
          ))}
        </motion.div>

        {activeDay && (
          <motion.div
            variants={scheduleContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6 relative overflow-hidden"
          >
            <motion.div
              variants={lineVariants}
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400/40 transform -translate-x-1/2"
            />
            {getActiveEvents().map((event, index) => (
              <motion.div 
                key={index} 
                variants={scheduleItemVariants} 
                className="relative flex items-center justify-center"
                whileHover={cardHoverAnimation}
              >
                <div className="w-full max-w-lg bg-black/70 backdrop-blur-md p-6 rounded-lg border border-yellow-400/30 shadow-xl transition-all duration-300 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-yellow-400/15"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.4, transition: { duration: 0.4, ease: 'easeInOut' } }}
                  />
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 relative z-10">
                    <motion.span 
                      className="text-yellow-300 font-semibold text-lg whitespace-nowrap"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {event.time}
                    </motion.span>
                    <div className="mt-2 md:mt-0">
                      <h2 className="text-xl font-bold text-yellow-400">{event.title}</h2>
                      <p className="text-yellow-400/80 mt-1">{event.description}</p>
                      <p className="text-yellow-300/60 text-sm mt-1">Location: {event.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}