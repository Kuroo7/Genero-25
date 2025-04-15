import { Float, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

useGLTF.preload("/broken_steampunk_clock.glb");

const Model = () => {
  const group = useRef(null);
  const lightRef = useRef(null);
  const { scene, animations } = useGLTF("/broken_steampunk_clock.glb");
  const { actions } = useAnimations(animations, group);
  const { camera, mouse } = useThree();

  // Play animations on mount
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);

  // Update rotation and light position each frame
  useFrame(() => {
    if (group.current) {
      // Playful wobble
      group.current.rotation.x += Math.sin(Date.now() * 0.005) * 0.002;
      group.current.rotation.y += Math.cos(Date.now() * 0.003) * 0.003;
    }

    if (lightRef.current && group.current) {
      // Calculate model bounds
      const box = new THREE.Box3().setFromObject(group.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Map mouse to light position, scaled to model size
      const maxOffset = Math.max(size.x, size.y) * 3; // Increased for edge lighting
      const x = center.x + mouse.x * maxOffset;
      const y = center.y + mouse.y * maxOffset;
      const z = center.z + 30; // Closer to model for stronger effect

      lightRef.current.position.set(x, y, z);
    }
  });

  return (
    <Float
      speed={4}
      rotationIntensity={1.5}
      floatIntensity={3}
      floatingRange={[-0.2, 0.4]}
    >
      <group
        ref={group}
        scale={0.9}
        rotation={[Math.PI * 0.05, Math.PI * 0.1, 0]}
      >
        <primitive object={scene} />
        <pointLight
          ref={lightRef}
          color="#ffcc88"
          intensity={8} // Increased for visibility
          distance={100}
          decay={1}
        />
      </group>
    </Float>
  );
};

export default Model;