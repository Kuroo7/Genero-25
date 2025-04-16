'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const targetDate = new Date('2025-05-16T00:00:00');

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.total <= 0) {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 1000);

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-yellow-300">
      <div className="p-10 rounded-xl border border-yellow-400/30 bg-black/70 backdrop-blur-md shadow-2xl text-center">
        {!isComplete ? (
          <>
            <h1 className="text-4xl font-bold mb-8">Countdown to May 16, 2025</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div key={unit} className="flex flex-col items-center">
                  <motion.span
                    className="text-5xl font-bold"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1],
                      textShadow: ["0 0 5px #FFD700", "0 0 15px #FFD700", "0 0 5px #FFD700"]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {timeLeft[unit] < 0 ? 0 : timeLeft[unit]}
                  </motion.span>
                  <span className="text-lg mt-2 capitalize">{unit}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-yellow-400">The Countdown is Complete!</h1>
            <p className="mt-4 text-xl text-yellow-400/80">May 16, 2025 has arrived!</p>
          </>
        )}
      </div>
    </div>
  );
}
