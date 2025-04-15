"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import {  OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      // className="bg-white"
      camera={{ position: [0, 0, 100], fov: 50 }} // Camera placed 10 units in front of the model
    >
      <ambientLight position={[-5, 5, -5]} intensity={.2} />
      <Suspense fallback={null}>

        <Model />

        <OrbitControls 
        enableZoom={false}
        enablePan={false}
          minDistance={100} // Restrict zoom-in
          maxDistance={100}
          target={[0, 0, 0]} // Ensure camera looks at the model's center
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
