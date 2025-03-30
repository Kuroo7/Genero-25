"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Icons
import {
  BookOpen,
  Info,
  History,
  Sparkles,
  CalendarDays,
  HelpCircle,
  Clock,
  Users,
  Ticket,
} from "lucide-react";

const navItems = [
  { name: "HOME", href: "/", icon: BookOpen },
  { name: "ABOUT", href: "/#about", icon: Info },
  { name: "PAST", href: "/#past", icon: History },
  { name: "THIS YEAR", href: "/#thisyear", icon: Sparkles },
  { name: "EVENTS", href: "/events", icon: CalendarDays },
  { name: "FAQ", href: "/#faq", icon: HelpCircle },
  { name: "SCHEDULE", href: "#", icon: Clock },
  { name: "TEAM", href: "/team", icon: Users },
  { name: "GET TICKET", href: "/#ticket", icon: Ticket },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname(); // Get current pathname

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
    <header className=" hidden lg:block  fixed w-full z-50 font-semibold">
      <div className="relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-4 top-3 z-50"
        >
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 cursor-pointer" />
          </Link>
        </motion.div>

        {/* Navigation */}
        <AnimatePresence>
          {isVisible && (
            <>
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
                    const isActive = pathname === item.href; // Check if current page matches
                    const isGetTicket = item.name.toLowerCase() === "get ticket";

                    return (
                      <Link key={item.name} href={item.href} scroll={true} legacyBehavior>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          className={`group relative flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                            isGetTicket
                              ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/50 hover:bg-yellow-300"
                              : isActive
                              ? "bg-yellow-400/10 text-yellow-400 shadow-md shadow-yellow-400/20"
                              : "text-gray-300 hover:text-yellow-400"
                          }`}
                        >
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
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.nav>
            </>

          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
