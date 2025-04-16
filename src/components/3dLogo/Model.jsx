import { Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Model = () => {
  const group = useRef(null);
  const lightRef = useRef(null);
  const texture = useTexture("/logo.png"); // Replace with your image path

  // Configure texture
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;

  useFrame(({ mouse }) => {
    if (group.current) {
      // Playful wobble
      group.current.rotation.z += Math.sin(Date.now() * 0.005) * 0.002;
      group.current.rotation.y += Math.cos(Date.now() * 0.003) * 0.003;
      group.current.rotation.x += Math.cos(Date.now() * 0.003) * 0.003;
    }

    if (lightRef.current && group.current) {
      // Calculate light position based on mouse
      const center = new THREE.Vector3(0, 0, 0);
      const maxOffset = 3;
      const x = center.x + mouse.x * maxOffset;
      const y = center.y + mouse.y * maxOffset;
      const z = 5;

      lightRef.current.position.set(x, y, z);
    }
  });

  return (
    <>
      <Float
        speed={4}
        rotationIntensity={1.5}
        floatIntensity={3}
        floatingRange={[-0.2, 0.4]}
      >
        <group rotation={[Math.PI / 2, Math.PI / 2, 0]} ref={group}>
          {/* Circular disc with thickness */}
          <mesh scale={[1.4, 1.4, 1.4]}>
            <cylinderGeometry args={[2, 2, 0.2, 32, 1, false]} />{" "}
            {/* Radius 2, height 0.2, 32 segments */}
            <meshStandardMaterial
              map={texture}
              side={THREE.FrontSide} // Only show front face
            />
          </mesh>
          {/* Mouse-driven light */}
          <pointLight
            ref={lightRef}
            color="#ffcc88"
            intensity={10}
            distance={10}
            decay={1}
          />
        </group>
      </Float>
    </>
  );
};

export default Model;
