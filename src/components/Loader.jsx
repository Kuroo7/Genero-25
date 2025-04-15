"use client";

import { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.MorphSVGPlugin) {
      gsap.registerPlugin(window.MorphSVGPlugin);

      gsap.to("#blob1", {
        duration: 1.5,
        morphSVG: "#blob2",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to("#blob3", {
        duration: 1.8,
        morphSVG: "#blob4",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">
      <svg viewBox="0 0 600 200" className="absolute w-[400px] opacity-30">
        {/* Animated blob 1 */}
        <path
          id="blob1"
          fill="#ffffff"
          d="M150,100 Q130,70 160,60 Q190,50 180,80 Q170,110 150,100"
        />
        <path
          id="blob2"
          fill="#ffffff"
          d="M150,100 Q140,60 170,70 Q200,80 180,110 Q160,140 150,100"
          style={{ visibility: "hidden" }}
        />

        {/* Animated blob 2 */}
        <path
          id="blob3"
          fill="#ffffff"
          d="M300,100 Q280,70 310,60 Q340,50 330,80 Q320,110 300,100"
        />
        <path
          id="blob4"
          fill="#ffffff"
          d="M300,100 Q290,60 320,70 Q350,80 330,110 Q310,140 300,100"
          style={{ visibility: "hidden" }}
        />
      </svg>

      {/* Clean readable text */}
      <h1 className="text-white text-5xl font-extrabold relative z-10">
        Genero<span className="text-pink-500">'25</span>
      </h1>
    </div>
  );
};

export default Loader;
