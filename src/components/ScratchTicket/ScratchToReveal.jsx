"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ScratchToReveal = ({
  children,
  width,
  height,
  minScratchPercentage = 40,
  onComplete,
  className,
  gradientColors = ["#9370DB", "#8A2BE2", "#4B0082"],
}) => {
  const canvasRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx && !isComplete) {
      canvas.width = width;
      canvas.height = height;
      
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, gradientColors[0]);
      gradient.addColorStop(0.5, gradientColors[1]);
      gradient.addColorStop(1, gradientColors[2]);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
  }, [width, height, gradientColors, isComplete]);

  useEffect(() => {
    const handleMove = (x, y) => {
      if (isComplete) return;
      
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || !isScratching) return;

      const rect = canvas.getBoundingClientRect();
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x - rect.left, y - rect.top, 25, 0, Math.PI * 2);
      ctx.fill();
    };

    const mouseMove = (e) => handleMove(e.clientX, e.clientY);
    const touchMove = (e) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const endScratching = () => {
      setIsScratching(false);
      checkCompletion();
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("touchmove", touchMove, { passive: false });
    document.addEventListener("mouseup", endScratching);
    document.addEventListener("touchend", endScratching);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("touchmove", touchMove);
      document.removeEventListener("mouseup", endScratching);
      document.removeEventListener("touchend", endScratching);
    };
  }, [isScratching, isComplete]);

  const checkCompletion = () => {
    if (isComplete) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const imageData = ctx.getImageData(0, 0, width, height);
    let transparentPixels = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparentPixels++;
    }

    const percentage = (transparentPixels / (width * height)) * 100;
    if (percentage >= minScratchPercentage) {
      setIsComplete(true);
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.3 }
      }).then(() => onComplete?.());
    }
  };

  return (
    <motion.div
      className={cn("relative select-none", className)}
      style={{ width, height }}
      animate={controls}
    >
      {!isComplete && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 cursor-scratch"
          onMouseDown={() => !isComplete && setIsScratching(true)}
          onTouchStart={(e) => {
            e.preventDefault();
            !isComplete && setIsScratching(true);
          }}
        />
      )}
      {children}
    </motion.div>
  );
};