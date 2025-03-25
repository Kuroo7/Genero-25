"use client"
import { motion, useTransform } from "framer-motion";
import styles from './Hero.module.css'
import { useRef } from "react";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import("@/components/Clock3d/Scene"), { ssr: false });
// const Scene = dynamic(() => import("@/components/3dHero/Scene"), { ssr: false });
// const Scene = dynamic(() => import("@/components/Book3d/Scene"), { ssr: false });
const Hero = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const plane = useRef(null);
  {/* sm:flex sm:flex-col sm:items-center sm:justify-center md:block lg:block */}
  return (
    <motion.div style={{ scale, rotate }} className={"h-screen sticky  top-0 flex items-center justify-center "}>

      {/* <Scene/> */}

        <div >
          <div className={`${styles.container} `}>
            <div ref={plane} className={"pt-32 " + styles.body}>
              <Text3d primary={"GENERO'25"} secondary={"GENERO'25"} />
              <Text3d primary={"THE"} secondary={"THE"} />
              <Text3d primary={"Sacred"} secondary={"Sacred"} />
              <Text3d primary={"LEGACY"} secondary={"LEGACY"} />
            </div>
            <div className="md:block w-full h-full  " >
              <Scene />
            </div>
          </div>
          <div>
          </div>
        </div>
    </motion.div>
  )
}
function Text3d({ primary, secondary }) {



  return (

    <div className={styles.textContainer}>

      <p className={styles.primary}>{primary}</p>

      <p className={styles.secondary}>{secondary}</p>

    </div>

  )

}

export default Hero