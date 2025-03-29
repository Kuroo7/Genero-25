"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Swords,
  Shield,
  Sparkles,
  BookMarked,
  Star,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "HOME", href: "/", icon: BookOpen },
  { name: "ABOUT", href: "/#about", icon: Swords },
  { name: "PAST", href: "/#past", icon: Shield },
  { name: "THIS YEAR", href: "/#thisyear", icon: Sparkles },
  { name: "EVENTS", href: "/events", icon: BookMarked },
  { name: "FAQ", href: "/#faq", icon: BookMarked },
  { name: "SCHEDULE", href: "/#schedule", icon: BookMarked },
  { name: "TEAM", href: "/team", icon: BookMarked },
  { name: "GET TICKET", href: "/#ticket", icon: BookMarked },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);

      const sectionIds = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href.replace("#", ""));

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/" && !activeSection;
    }

    if (href.startsWith("#")) {
      return activeSection === href && pathname === "/";
    }

    if (href.includes("#")) {
      const [basePath, hash] = href.split("#");
      return pathname === basePath && activeSection === `#${hash}`;
    }

    return pathname === href;
  };
  const setSectionFromHref = (href) => {
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      setActiveSection(`#${hash}`);
    } else {
      setActiveSection("");
    }
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
    <header className="fixed w-full z-50 font-semibold">
      <div className="relative">
        {/* Logo and Hamburger */}
        <div className="absolute top-3 left-0 w-full px-4 z-50 flex items-center justify-between">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 cursor-pointer"
            />
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <motion.div
              animate={{
                rotate: mobileMenuOpen ? 360 : 0,
                scale: mobileMenuOpen ? 1.2 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src="/starIcon.png"
                alt="Menu"
                className="w-13 h-13"
                style={{ filter: "drop-shadow(0 0 2px #facc15)" }}
              />
            </motion.div>
          </button>
        </div>

        {/* Desktop Nav */}
        <AnimatePresence>
          {isVisible && (
            <motion.nav
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="hidden md:block w-full bg-gradient-to-b from-purple-600/25 via-yellow-300/10 to-purple-900/15 backdrop-blur-xl transition-all duration-500 ease-in-out"
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-evenly h-16 w-full pl-20">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    const isGetTicket =
                      item.name.toLowerCase() === "get ticket";

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        scroll={true}
                        legacyBehavior
                      >
                        <motion.a
                          onClick={() => {
                            setSectionFromHref(item.href);
                            setMobileMenuOpen(false);
                          }}
                          whileHover={{ scale: 1.05 }}
                          className={`group relative flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                            isGetTicket
                              ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/50 hover:bg-yellow-300"
                              : active
                              ? "bg-yellow-400/10 text-yellow-400 shadow-md shadow-yellow-400/20"
                              : "text-gray-300 hover:text-yellow-400"
                          }`}
                        >
                          <div className="relative z-10 flex items-center space-x-2">
                            <Icon
                              className={`w-5 h-5 ${
                                isGetTicket
                                  ? "text-black"
                                  : active
                                  ? "text-yellow-400"
                                  : "text-gray-400"
                              }`}
                            />
                            <span className="text-base font-semibold">
                              {item.name}
                            </span>
                          </div>
                        </motion.a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="md:hidden absolute top-16 left-0 w-full z-[99]
                 bg-gradient-to-b from-purple-600/25 via-yellow-300/10 to-purple-900/15
                 backdrop-blur-xl border-t border-yellow-200/10
                 transition-all duration-500 ease-in-out overflow-hidden"
            >
              <div className="flex flex-col items-start p-4 space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  const isGetTicket = item.name.toLowerCase() === "get ticket";

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      scroll={true}
                    >
                      <motion.div
                        onClick={() => {
                          setSectionFromHref(item.href);
                          setMobileMenuOpen(false);
                        }}
                        whileHover={{ scale: 1.03 }}
                        className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
                          isGetTicket
                            ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/50 hover:bg-yellow-300"
                            : active
                            ? "bg-yellow-400/10 text-yellow-400 shadow-md shadow-yellow-400/20"
                            : "text-gray-300 hover:text-yellow-400"
                        }`}
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
                        <span className="text-base font-semibold">
                          {item.name}
                        </span>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
