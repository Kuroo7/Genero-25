"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const day1Events = [
  "beatline battle",
  "beyond frame",
  "rythm riot",
  "mud mirror",
  "reverb",
  "Iron Gauntlet",
  "Rhythmic Shuffle",
  "Veritas: The Great Debate",
  "Sixty Seconds Saga",
  "Redemption Room",
  "the macro world",
  "Switch Swap",
  "Ad Mad Show",
  "DevShastra",
  "All The Stars",
  "Surreal Escapism ",
  "AeroQuest",
  "Chain of Wisdom",
  "Path of Purity",
  "Robo Clash",
  "Legacy Lens VR",
  "Silver Stick Showdown",
  "Valorant",
  "SimRush: Silver Circuit",
  "BGMI",
];

const day2Events = [
  "hunkaar",
  "savakatha",
  "mic drop",
  "nrityavrit",
  "sigilskin",
  "Thrill Trials",
  "Quest Run",
  "Mystery Match",
  "Fortune Wheel",
  "Sacred Summit",
  "Epic-sode",
  "The Writer's Forge",
  "secret shutter",
  "re-make",
  "Cric Bid",
  "Branding on Fabric",
  "Brand Battle",
  "All The Stars",
  "Cyber Hunt",
  "Dsa Showdown ",
  "Kaggle Korner",
  "Catapult Challenge",
  "Turbo Titans",
  "Path of Purity",
  "The Cursed Flow",
 "Legacy Lens VR",
  "Silver Stick Showdown",
  "Valorant",
  "SimRush: Silver Circuit",
  "BGMI",
];

const day3Events = [
  "andaaz-e-libaaz",
  "swargunj",
  "kalp-vriksha",
  "picaso",
  "spotlight",
  "beatborne",
  "art attack",
  "Sacred Games",
  "Mystic Masque",
  "Relic Vault",
  "Sacred Summit",
  "Ode of Origin",
  "kodak",
  "Business Plan",
  "Designathon",
  "Secret Whispers",
  "Worldcraft",
  "Dynasty Kick-Off",
  "Path of Purity",
  "The Divine Blueprint",
 "Legacy Lens VR",
  "Silver Stick Showdown",
  "Valorant",
  "SimRush: Silver Circuit",
  "BGMI",
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(null);
  const [particlePositions, setParticlePositions] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const positions = [...Array(30)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setParticlePositions(positions);
    }
  }, []);

  const scheduleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
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
        ease: "easeOut",
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const cardHoverAnimation = {
    scale: 1.03,
    boxShadow: "0px 8px 20px rgba(255, 215, 0, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const handleDayToggle = (day) => {
    if (activeDay === day) {
      setActiveDay(null);
    } else {
      setActiveDay(day);
    }
  };

  const getActiveEvents = () => {
    switch (activeDay) {
      case "day1":
        return day1Events;
      case "day2":
        return day2Events;
      case "day3":
        return day3Events;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative flex flex-col items-center justify-center">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          background:
            "radial-gradient(circle at center, rgba(255, 215, 0, 0.15), transparent 70%)",
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {particlePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          initial={{ x: pos.x, y: pos.y }}
          animate={{
            y: [
              pos.y,
              pos.y -
                (typeof window !== "undefined"
                  ? window.innerHeight * 1.2
                  : 800),
            ],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative max-w-3xl w-full text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mb-8 flex space-x-4"
        >
          {["Day 1", "Day 2", "Day 3"].map((day, index) => (
            <motion.button
              key={day}
              onClick={() => handleDayToggle(`day${index + 1}`)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.6)",
                backgroundColor: "#FFD700",
              }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 mt-6 py-3 ${
                activeDay === `day${index + 1}`
                  ? "bg-yellow-500"
                  : "bg-yellow-400"
              } text-black font-semibold rounded-full transition-all duration-300 relative overflow-hidden`}
            >
              <span className="relative z-10">{day}</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
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
                    whileHover={{
                      opacity: 0.4,
                      transition: { duration: 0.4, ease: "easeInOut" },
                    }}
                  />
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold text-yellow-400">
                      {event}
                    </h2>
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
