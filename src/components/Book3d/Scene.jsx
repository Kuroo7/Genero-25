"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [5, 7, -5], fov: 15 }}
      performance={{ min: 0.5, max: 1 }} // Optimize performance
    >
      <ambientLight intensity={2} />
      
      {/* Add Environment for smoother lighting */}
      <Environment preset="sunset" background />

      <Suspense fallback={null}>
        <Model />
        <OrbitControls target={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
