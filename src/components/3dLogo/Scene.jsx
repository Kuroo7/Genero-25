"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

const Scene = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [2, 0, 10], fov: 50 }} // Camera adjusted for closer view
    >
      <EffectComposer>
        <Fluid fluidColor="rgba(255, 200, 0, 0.6)" />
      </EffectComposer>
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        <Model />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={10}
          maxDistance={10}
          target={[0, 0, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
