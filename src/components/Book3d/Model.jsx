import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

useGLTF.preload("/book.glb");

const Model = () => {
    const group = useRef(null);
    const { scene, animations } = useGLTF("/book.glb");
    const { actions } = useAnimations(animations, scene); // Use scene instead of group

    useEffect(() => {
        if (actions) {
            Object.values(actions).forEach((action) => {
                action.reset().fadeIn(0.5).play(); // Smoothly start the animation
            });
        }
    }, [actions]); 

    return (
        <group ref={group} dispose={null}> 
            <primitive object={scene} />
        </group>
    );
};

export default Model;
