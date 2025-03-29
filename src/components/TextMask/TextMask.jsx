"use client";
import { useEffect, useRef } from "react";
import styles from "./textMask.module.css";
// import Break from "../Break";

export default function TextMask() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 145;

  useEffect(() => {
    requestAnimationFrame(animate);
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



  return (
    <main>
      <div id="thisyear" ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/media/genero25.webm" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}