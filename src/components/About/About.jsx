'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import useMousePosition from "./useMousePosition";

const About = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 200 : 40; // Adjust size as needed

  return (
    <div id="about" className="relative min-h-screen flex flex-col justify-center">
      {/* Mask Effect */}
      <motion.div
        className="absolute inset-0 bg-yellow-400"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          WebkitMaskImage: "url('/mask.svg')",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-6/12 mx-auto px-6">
        <h1 className="text-5xl font-bold my-4">About Genero</h1>
        <p 
          className="tracking-wide leading-relaxed text-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Genero, the annual fest of ABES, returns grander than ever for its 25th anniversary as a three-day extravaganza! Celebrating culture, creativity, and competition, it features electrifying performances, e-gaming, literary events, and more. With a decade-long legacy and 6000+ students, this milestone edition promises unforgettable experiences and unmatched excitement!
        </p>
        <div className="flex gap-10 my-6 text-2xl">
          <div>
            <h3 className="font-bold">10+</h3>
            <p>Editions</p>
          </div>
          <div>
            <h3 className="font-bold">40+</h3>
            <p>Events</p>
          </div>
          <div>
            <h3 className="font-bold">5000+</h3>
            <p>Participation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
