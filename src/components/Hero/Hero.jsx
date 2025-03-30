"use client";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Hero.module.css";

// const Scene = dynamic(() => import("@/components/Clock3d/Scene"), { ssr: false });

const Hero = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {

    const x = e.clientX / window.innerWidth

    const y = e.clientY / window.innerHeight

   const perspective = window.innerWidth * 4;

   const rotateX = maxRotate * x - maxRotate / 2; 

   const rotateY = (maxRotate * y - maxRotate / 2) * -1;

   plane.current.style.transform = "perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)"

  }

  return (
    <motion.div
    style={{ scale, rotate }}
     className="h-screen sticky top-0  bg-[url('/hero-bg.webp')] bg-cover bg-center">

     
<div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.container+" flex justify-center items-center  "}>

<div ref={plane} className={styles.body}>

  <Text3d primary={"Genero'25"} secondary={"Genero'25"}/>

  <Text3d primary={"the"} secondary={"the"}/>

  <Text3d primary={"Sacred"} secondary={"Sacred"}/>

  <Text3d primary={"legacy"} secondary={"legacy"}/>

</div>

</div>
    </motion.div>
  );
};

function Text3d({ primary, secondary }) {
  return (
    <div className={styles.textContainer+" flex justify-center items-center"
    }>

    <p className={styles.primary}>{primary}</p>

    <p className={styles.secondary}>{secondary}</p>

</div>
  );
}

export default Hero;
