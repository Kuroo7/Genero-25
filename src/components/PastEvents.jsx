"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import Lenis from "@studio-freight/lenis";
import Lenis from 'lenis'
import { useTransform, useScroll, motion } from "framer-motion";

const baseImages = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
];

export default function PastEvents() {
  const galleryRef = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [-height * 1.5, height * 1.5]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [-height * 1.8, height * 1.8]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [-height * 1.2, height * 1.2]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [-height * 1.6, height * 1.6]
  );

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 5),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    const rafId = requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const columnImages = [
    [...baseImages.slice(0, 5), baseImages[0]], // Left column
    [...baseImages.slice(2, 7), baseImages[1]],
    [...baseImages.slice(4), baseImages[0], baseImages[1]],
    [...baseImages.slice(1, 6), baseImages[2]],
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <div className="h-[20vh] md:h-[30vh]" />
      <div
        ref={galleryRef}
        className="relative flex gap-4 p-4 md:gap-6 md:p-6 bg-neutral-800/90 overflow-hidden"
        style={{ height: "200vh" }}
      >
        {/* Left Column */}
        <motion.div
          className="relative w-1/4 min-w-[180px] flex flex-col gap-4 md:gap-6 z-10"
          style={{ y: y1 }} // Using y1 directly
        >
          {columnImages[0].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Event image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                loading={i < 2 ? "eager" : "lazy"}
                quality={85}
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="relative w-1/4 min-w-[180px] flex flex-col gap-4 md:gap-6 z-10"
          style={{ y: y2 }}
        >
          {columnImages[1].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Event image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                loading={i < 2 ? "eager" : "lazy"}
                quality={85}
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div
          className="relative w-1/4 min-w-[180px] flex flex-col gap-4 md:gap-6 z-10"
          style={{ y: y3 }}
        >
          {columnImages[2].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Event image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                loading={i < 2 ? "eager" : "lazy"}
                quality={85}
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </div>
          ))}
        </motion.div>

        {/* Column 4 */}
        <motion.div
          className="relative w-1/4 min-w-[180px] flex flex-col gap-4 md:gap-6 z-10"
          style={{ y: y4 }}
        >
          {columnImages[3].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Event image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                loading={i < 2 ? "eager" : "lazy"}
                quality={85}
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="h-[20vh] md:h-[30vh]" />
    </main>
  );
}
