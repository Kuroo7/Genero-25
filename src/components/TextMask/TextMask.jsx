"use client";
import { useEffect, useRef } from "react";
import styles from "./textMask.module.css";
import Break from "../Break";

export default function TextMask() {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const particleContainer = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 85;

  useEffect(() => {
    requestAnimationFrame(animate);
    generateParticles();
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask?.current?.offsetTop /
      (container?.current?.getBoundingClientRect().height - window.innerHeight);
    return scrollProgress;
  };

  const generateParticles = () => {
    if (!particleContainer.current) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = styles.particle;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      particleContainer.current.appendChild(particle);
    }
  };

  return (
    <main>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/media/nature.mp4" type="video/mp4" />
          </video>
        </div>
        <div ref={particleContainer} className={styles.particleContainer}></div>
      </div>
    </main>
  );
}
