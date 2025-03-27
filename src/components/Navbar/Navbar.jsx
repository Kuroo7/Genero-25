"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Swords,
  Shield,
  Sparkles,
  BookMarked,
} from "lucide-react";

const navItems = [
  { name: "HOME", href: "#", icon: BookOpen },
  { name: "ABOUT", href: "#", icon: Swords },
  { name: "PAST", href: "#", icon: Shield },
  { name: "THIS YEAR", href: "#", icon: Sparkles },
  { name: "EVENTS", href: "#", icon: BookMarked },
  { name: "FAQ", href: "#", icon: BookMarked },
  { name: "SCHEDULE", href: "#", icon: BookMarked },
  { name: "TEAM", href: "#", icon: BookMarked },
  { name: "GET TICKET", href: "#", icon: BookMarked },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const activeItem = "HOME"; // Simulated current page

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed w-full z-50 font-semibold">
      <div className="relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-4 top-4 z-50"
        >
          <a href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 cursor-pointer"
            />
          </a>
        </motion.div>

        {/* Navigation */}
        <AnimatePresence>
          {isVisible && (
            <motion.nav
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full bg-transparent backdrop-blur-md border-b border-yellow-400/10"
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-evenly h-16 w-full pl-20">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.name === activeItem;
                    const isGetTicket =
                      item.name.toLowerCase() === "get ticket";

                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        whileHover={{ scale: 1.05 }}
                        className={`group relative overflow-hidden flex items-center px-4 py-2 rounded-lg space-x-2 transition duration-300 ${
                          isGetTicket
                            ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/50 hover:bg-yellow-300"
                            : isActive
                            ? "bg-yellow-400/10 text-yellow-400 shadow-md shadow-yellow-400/20"
                            : "text-gray-300 hover:text-yellow-400"
                        }`}
                      >
                        {/* 🌈 Moving Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 
                          transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                        {/* Button content */}
                        <div className="relative z-10 flex items-center space-x-2">
                          <Icon
                            className={`w-5 h-5 ${
                              isGetTicket
                                ? "text-black"
                                : isActive
                                ? "text-yellow-400"
                                : "text-gray-400"
                            }`}
                          />
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
