

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const navLinks = [
    { label: "Sponsorship Brochure", path: "/sponsorship-brochure" },
    { label: "Cultural Rules", path: "/cultural-rules" },
    { label: "Event Details", path: "/event-details" },
    { label: "Events", path: "/events" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      path: "https://facebook.com",
      logo: "/icons/facebook.svg",
    },
    {
      label: "Instagram",
      path: "https://instagram.com",
      logo: "/icons/instagram.svg",
    },
    {
      label: "YouTube",
      path: "https://youtube.com",
      logo: "/icons/youtube.svg",
    },
  ];

  const [year, setYear] = useState("2025"); // Default year for SSR
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Set year and particles only on the client
    setYear(new Date().getFullYear().toString());
    setParticles(
      [...Array(5)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const titleVariants = {
    animate: {
      opacity: [0.8, 1, 0.8],
      scale: [1, 1.05, 1],
      rotate: [-1, 1, -1],
      textShadow: [
        "0 0 5px rgba(255, 0, 255, 0.5)",
        "0 0 10px rgba(0, 255, 255, 0.8)",
        "0 0 5px rgba(255, 0, 255, 0.5)",
      ],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
    hover: {
      scale: 1.1,
      textShadow: "0 0 15px rgba(255, 0, 255, 1)",
      transition: { duration: 0.3 },
    },
  };

  const particleVariants = {
    animate: {
      y: [0, -10, 0],
      opacity: [0, 1, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <footer className="relative bg-black text-white py-8 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff00ff_0,rgba(0,0,0,0.9)_70%)] opacity-20 z-0" />

      {particles.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full"
          style={{ left: pos.left, top: pos.top }}
          variants={particleVariants}
          animate="animate"
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Genero'25 at the Top */}
        <div className="text-center mb-8">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={["animate", { opacity: 1, y: 0 }]}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
            variants={titleVariants}
            whileHover="hover"
          >
            Genero'25
          </motion.h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-xl font-bold text-neon-pink uppercase tracking-wider animate-pulse">
              Links
            </h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link
                    href={link.path}
                    className="text-gray-300 text-base hover:text-neon-cyan transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-xl font-bold text-neon-cyan uppercase tracking-wider animate-pulse">
              Connect
            </h3>
            {/* <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-neon-pink transition-all duration-300"
                  >
                    <Image
                      src={link.logo}
                      alt={link.label}
                      width={30}
                      height={30}
                      className="filter brightness-75 hover:brightness-100"
                      onError={() =>
                        console.error(`Failed to load ${link.logo}`)
                      }
                    />
                  </a>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-xl font-bold text-neon-purple uppercase tracking-wider animate-pulse">
              Reach Us
            </h3>
            <div className="flex flex-col gap-2 text-gray-300 text-base">
              <p>
                Mail:{" "}
                <a
                  href="mailto:abc@gmail.com"
                  className="hover:text-neon-cyan transition-colors duration-300"
                >
                  abc@gmail.com
                </a>
              </p>
              <p>
                Bhaskar{" "}
                <a
                  href="tel:+91888888888"
                  className="hover:text-neon-cyan transition-colors duration-300"
                >
                  +91 88888 88888
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-xl font-bold text-neon-pink uppercase tracking-wider animate-pulse">
              Location
            </h3>
            <div className="w-full h-36 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.856798796725!2d77.44301787528912!3d28.634053675664003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1743009479843!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text Section */}
        <div className="text-center gap-3">
          <motion.p
            className="text-gray-300 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            This is the official website of the Annual Fest of ABES Engineering
            College, Ghaziabad
          </motion.p>
          <motion.p
            className="text-gray-500 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            © {year} ABES Engineering College Annual Fest. All rights reserved.
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </div>
    </footer>
  );
};

export default Footer;