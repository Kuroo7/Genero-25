"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./PastEvents.module.scss";

const images = [
  "/PastEvents/1.webp",
  "/PastEvents/2.webp",
  "/PastEvents/3.webp",
  "/PastEvents/4.webp",
  "/PastEvents/5.webp",
  "/PastEvents/6.webp",
  "/PastEvents/7.webp",
  "/PastEvents/8.webp",
  "/PastEvents/9.webp",
  "/PastEvents/10.webp",
  "/PastEvents/11.webp",
  "/PastEvents/12.webp",
  "/PastEvents/1.webp",
  "/PastEvents/2.webp",
];

export default function PastEvents() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}>
        <div className="flex h-40 py-10 items-center justify-center">
          <h1
            className="md:text-9xl uppercase text-5xl font-bold relative z-10 text-center"
            style={{
              background: "linear-gradient(90deg, white 0%,rgb(255, 191, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 5px rgba(255, 255, 255, 0.5)", // subtle glow/contrast
            }}
          >
            Past Events
          </h1>
        </div>
      </div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};