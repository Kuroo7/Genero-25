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
  const containerRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const controls = useAnimation();
  const startPos = useRef({ x: 0, y: 0 });

  // Initialize canvas
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

  // Event handlers
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

    const mouseMove = (e) => {
      if (isScratching) {
        e.preventDefault();
        handleMove(e.clientX, e.clientY);
      }
    };
    
    const touchMove = (e) => {
      if (!isScratching) return;
      
      const touch = e.touches[0];
      const dx = Math.abs(touch.clientX - startPos.current.x);
      const dy = Math.abs(touch.clientY - startPos.current.y);
      
      if (dy > dx && dy > 10) {
        setIsScratching(false);
        return;
      }
      
      e.preventDefault();
      handleMove(touch.clientX, touch.clientY);
    };

    const startScratching = (x, y) => {
      startPos.current = { x, y };
      setIsScratching(true);
    };

    const mouseDown = (e) => {
      if (e.button === 0) { // Only left mouse button
        startScratching(e.clientX, e.clientY);
        e.preventDefault();
      }
    };

    const touchStart = (e) => {
      startScratching(e.touches[0].clientX, e.touches[0].clientY);
      e.preventDefault();
    };

    const endScratching = () => {
      setIsScratching(false);
      checkCompletion();
    };

    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    // Only attach to canvas element, not document
    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("touchstart", touchStart, { passive: false });
    document.addEventListener("mouseup", endScratching);
    document.addEventListener("touchend", endScratching);
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("touchmove", touchMove, { passive: false });

    return () => {
      canvas.removeEventListener("mousedown", mouseDown);
      canvas.removeEventListener("touchstart", touchStart);
      document.removeEventListener("mouseup", endScratching);
      document.removeEventListener("touchend", endScratching);
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("touchmove", touchMove);
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
      ref={containerRef}
      className={cn("relative select-none", className)}
      style={{ width, height }}
      animate={controls}
    >
      {!isComplete && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 cursor-scratch"
        />
      )}
      {children}
    </motion.div>
  );
};