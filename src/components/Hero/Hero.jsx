"use client";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Hero.module.css";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/3dLogo/Scene"), { ssr: false });

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

   plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`

  }

  return (
    <motion.div id="Hero" style={{ scale, rotate }} className={"h-screen sticky top-0 flex items-center justify-center "}>
       
          <div onMouseMove={(e) => {manageMouseMove(e)}} className={`${styles.container} sm:flex flex-col justify-center md:flex-row  `}>
            <div ref={plane} className={"pt-32 " + styles.body}>
              <Text3d primary={"GENERO'25"} secondary={"GENERO'25"} />
              <Text3d primary={"THE"} secondary={"THE"} />
              <Text3d primary={"SACRED"} secondary={"SACRED"} />
              <Text3d primary={"LEGACY"} secondary={"LEGACY"} />
            </div>
            <div className="md:block relative hidden w-full h-full  " >
              <Scene />
            </div>
          </div>
          <div>
          </div>
    </motion.div>
  )
};

function Text3d({ primary, secondary }) {
  return (
    <div className={styles.textContainer+" flex justify-center items-center"
    }>

    <p className={styles.primary}>{primary}</p>

</div>
  );
}

export default Hero;