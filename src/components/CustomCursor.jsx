"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const trailLength = 10;
  const mousePosition = useRef({ x: -100, y: -100 });
  const movementTimeout = useRef(null);
  const animationFrameId = useRef(null);

  // Initialize trail segments
  useEffect(() => {
    // Create array of ref objects without using hooks
    trailRefs.current = Array(trailLength)
      .fill()
      .map(() => ({ current: null }));
    return () => {
      trailRefs.current = [];
    };
  }, [trailLength]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      mousePosition.current = { x, y };

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0,
        ease: "power2.out",
      });

      setIsMoving(true);
      if (movementTimeout.current) {
        clearTimeout(movementTimeout.current);
      }

      movementTimeout.current = setTimeout(() => {
        setIsMoving(false);
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (movementTimeout.current) {
        clearTimeout(movementTimeout.current);
      }
    };
  }, []);

  // Handle mouse down event
  const handleMouseDown = () => {
    setIsMouseDown(true);
    gsap.to(cursorRef.current, {
      width: 50,
      height: 50,
      borderColor: "var(--color-amber-400)", // Changed from green to amber-400
      boxShadow: "0 0 25px rgba(244, 212, 33, 0.5)", // Updated shadow color to match amber
      duration: 0.2,
      ease: "power2.out",
    });
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsMouseDown(false);
    gsap.to(cursorRef.current, {
      width: 25,
      height: 25,
      borderColor: "var(--white)",
      boxShadow: "none",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  // Update trail segments
  useEffect(() => {
    const updateTrail = () => {
      trailRefs.current.forEach((ref, index) => {
        const segment = ref.current;
        if (!segment) return;

        const delay = (index + 1) * 0.05;

        gsap.to(segment, {
          x: mousePosition.current.x,
          y: mousePosition.current.y,
          duration: 0.3,
          delay,
          opacity: isMoving || isMouseDown ? 1 - index / trailLength : 0,
          ease: "power2.out",
          scale: 1 + index / trailLength,
          boxShadow:
            isMoving || isMouseDown
              ? `0 0 10px rgba(255, 255, 255, ${0.2 + index / trailLength})`
              : "none",
        });
      });
    };

    const animateTrail = () => {
      updateTrail();
      if (isMoving || isMouseDown) {
        animationFrameId.current = requestAnimationFrame(animateTrail);
      } else if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };

    animateTrail();
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMoving, isMouseDown]);

  // Event listeners for mouse down and up
  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {trailRefs.current.map((ref, index) => (
        <div
          key={index}
          className="trail-segment hidden lg:block"
          ref={(el) => (ref.current = el)}
        ></div>
      ))}
      <div className="custom-cursor hidden lg:block" ref={cursorRef}>
        <div className="cursor-dot" />
      </div>
      <div className="display hidden lg:block"></div>
    </>
  );
};

export default CustomCursor;
