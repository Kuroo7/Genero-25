import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

// Custom Shader for Water Flow Effect
const WaveMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: [0, 0],
    uHover: 0
  },
  // Vertex Shader (Handles Position Distortion)
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uHover;
    
    attribute vec3 instancePosition;
    
    varying vec3 vColor;
    
    void main() {
      vec3 newPos = instancePosition;

      // Calculate distance from cursor
      float dist = distance(vec2(instancePosition.x, instancePosition.y), uMouse);

      // Apply a wave motion if the mouse is hovering
      if (uHover > 0.0) {
        float wave = sin(uTime * 5.0 + dist * 10.0) * 0.2 * exp(-dist * 5.0);
        newPos.z += wave; // Move particles in z-axis for wave effect
      }

      vColor = vec3(0.5 + 0.5 * sin(uTime), 0.5, 1.0);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `,
  // Fragment Shader (Handles Coloring)
  `
    varying vec3 vColor;

    void main() {
      gl_FragColor = vec4(vColor, 0.9); // Make it semi-transparent for better visibility
    }
  `
);

extend({ WaveMaterial });

export default WaveMaterial;
