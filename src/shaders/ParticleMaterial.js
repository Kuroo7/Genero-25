import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

// GLSL Shader for Hover Effect
const ParticleMaterial = shaderMaterial(
  { uTime: 0, uHover: 0 },
  // Vertex Shader
  `
    uniform float uTime;
    uniform float uHover;
    varying vec3 vColor;

    void main() {
      vColor = vec3(0.5 + 0.5 * sin(uTime + position.x), 0.5, 1.0);

      // Hover effect: move outward
      vec3 newPosition = position + normalize(position) * uHover * 0.3;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  // Fragment Shader
  `
    varying vec3 vColor;
    
    void main() {
      gl_FragColor = vec4(vColor, 1.0);
    }
  `
);

// Register the custom shader material
extend({ ParticleMaterial });

export default ParticleMaterial;
