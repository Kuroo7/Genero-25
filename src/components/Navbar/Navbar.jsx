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
<<<<<<< Updated upstream
  { name: "SCHEDULE", href: "/schedule", icon: Clock },
=======
  { name: "SCHEDULE", href: "/#schedule", icon: Clock },
>>>>>>> Stashed changes
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
      const currentY = window.scrollY;
      setIsVisible(currentY < lastScrollY);
      setLastScrollY(currentY);

      navItems.forEach((item) => {
        if (item.href.includes("#")) {
          const id = item.href.split("#")[1];
          const section = document.getElementById(id);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(`#${id}`);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/" && !activeSection;
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      return activeSection === `#${id}` && pathname === "/";
    }
    return pathname === href;
  };

  const renderNavLink = (item, index = false) => {
    const Icon = item.icon;
    const active = isActive(item.href);
    const isGetTicket = item.name.toLowerCase() === "get ticket";
  
    const baseClasses = `flex items-center px-4 py-2 rounded-lg transition duration-300 ${
      isGetTicket
        ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/50 hover:bg-yellow-300"
        : active
        ? "bg-yellow-400/10 text-yellow-400 shadow-md shadow-yellow-400/20"
        : "text-gray-300 hover:text-yellow-400"
    }`;
  
    const handleClick = (e) => {
      setMobileMenuOpen(false);
  
      if (item.href.startsWith("/#")) {
        e.preventDefault(); // Prevent default anchor behavior
  
        const id = item.href.split("#")[1];
        if (pathname !== "/") {
          // Go to home, let browser handle hash
          window.location.href = item.href;
        } else {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActiveSection(`#${id}`);
          }
        }
      }
    };
  
    return (
      <Link key={item.name} href={item.href} scroll={true}>
        <motion.div
          custom={index}
          variants={menuVariants}
          whileHover={{ scale: 1.05 }}
          onClick={handleClick}
          className={baseClasses}
        >
          <Icon
            className={`w-5 h-5 mr-2 ${
              isGetTicket
                ? "text-black"
                : active
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
          />
          <span className="text-base font-semibold">{item.name}</span>
        </motion.div>
      </Link>
    );
  };
  

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.07,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <header className=" hidden lg:block  fixed w-full z-50 font-semibold">
      <div className="relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-4 top-3 z-50"
        >
        {/* Logo + Hamburger */}
        <div className="absolute top-3 left-0 w-full px-4 z-50 flex items-center justify-between">
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
              className="hidden md:block w-full bg-gradient-to-b from-purple-600/25 via-yellow-300/10 to-purple-900/15 backdrop-blur-xl"
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
                  {navItems.map((item, index) => renderNavLink(item, index, true))}
                </div>
              </div>
            </motion.nav>
            </>

          )}
        </AnimatePresence>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="md:hidden absolute top-16 left-0 w-full z-[99] bg-gradient-to-b from-purple-600/25 via-yellow-300/10 to-purple-900/15 backdrop-blur-xl border-t border-yellow-200/10"
            >
              <div className="flex flex-col items-start p-4 space-y-4">
                {navItems.map((item, index) =>
                  renderNavLink(item, index, true)
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
