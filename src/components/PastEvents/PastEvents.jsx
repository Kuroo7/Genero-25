"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./PastEvents.module.css";
import Image from "next/image";
import Lenis from "lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
  "/pastEvents/img1.jpeg",
  "/pastEvents/img2.jpeg",
  "/pastEvents/img3.jpeg",
  "/pastEvents/img4.jpeg",
  "/pastEvents/img5.jpeg",
  "/pastEvents/img6.jpeg",
  "/pastEvents/img7.jpeg",
  "/pastEvents/img1.jpeg",
  "/pastEvents/img2.jpeg",
  "/pastEvents/img3.jpeg",
  "/pastEvents/img4.jpeg",
  "/pastEvents/img5.jpeg",
  "/pastEvents/img6.jpeg",
  "/pastEvents/img7.jpeg"
  
  // "/image2.jpg",
  // "/image3.jpg",
  // "/image4.jpg",
  // "/image5.jpg",
  // "/image6.jpg",
  // "/image7.jpg",
  // "/image1.jpg",
  // "/image2.jpg",
  // "/image3.jpg",
  // "/image4.jpg",
  // "/image5.jpg",
  // "/image6.jpg",
  // "/image7.jpg",
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
        <div className="flex h-40 pt-10 items-center justify-center">
          <h1 className="md:text-9xl uppercase font-bold "
          style={{
            background: "linear-gradient(90deg, white 0%, #ffbf00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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
            <Image src={src} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};