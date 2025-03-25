import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

useGLTF.preload("/pstep.glb");

const Model = () => {
    const group = useRef(null);
    const { nodes, materials, animations, scene } = useGLTF("/pstep.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        console.log(actions);
        
        if (actions) {
            Object.values(actions).forEach((action) => {
                action.play(); // Play all available animations
            });
        }
    }, [actions]); // Run effect when actions are available

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    );
};

export default Model;
