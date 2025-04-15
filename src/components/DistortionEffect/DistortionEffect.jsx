"use client"; // Ensure this is a Client Component if using Next.js
import React, { useRef } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { TextureLoader } from "three";
import { motion, useTransform } from "framer-motion";

function DistortionEffect({ scrollYProgress }) {
  const texture = useLoader(TextureLoader, "/hero-bg.webp");
  const planeRef = useRef(null);

  // Scroll-based transformations using Framer Motion
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  // Mouse tilt effect
  const maxRotate = 45;
  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = (maxRotate * y - maxRotate / 2) * -1; // Invert Y for natural tilt
    const rotateY = maxRotate * x - maxRotate / 2;

    if (planeRef.current) {
      planeRef.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  // Background plane component
  function BackgroundPlane() {
    const { viewport } = useThree();
    const aspect = texture.image.width / texture.image.height;
    const width = viewport.width; // Full viewport width
    const height = viewport.height; // Full viewport height

    return (
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    );
  }

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0"
      onMouseMove={manageMouseMove}
    >
      <div ref={planeRef} style={{ height: "100vh", width: "100vw" }}>
        <Canvas
          gl={{ alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
          style={{
            height: "100vh",
            width: "100vw",
            background: "transparent",
          }}
        >
          <EffectComposer>
            <Fluid />
          </EffectComposer>
          <hemisphereLight args={[0xffffff, 0x000000, 1.0]} />
          <OrbitControls enableZoom={false} />
          <BackgroundPlane />
        </Canvas>
      </div>
    </motion.div>
  );
}

export default DistortionEffect;