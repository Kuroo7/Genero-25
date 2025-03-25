'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import styles from './page.module.scss';
import useMousePosition from './useMousePosition';
export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

  return (
    // <BackgroundBeamsWithCollision>
    <section className={styles.aboutSection+" bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800"}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5}}
      >
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <h1 className="text-5xl font-bold mb-6 text-center">About Genero</h1>
          <p>
            Genero, the annual fest of ABES, returns grander than ever for its 25th anniversary as a three-day extravaganza! Celebrating culture, creativity, and competition, it features electrifying performances, e-gaming, literary events, and more. With a decade-long legacy and 6000+ students, this milestone edition promises unforgettable experiences and unmatched excitement!
          </p>
          <div className={styles.stats}>
            <div>
              <h3 className="font-bold">10+<br/>Editions</h3>
              {/* <p>Editions</p> */}
            </div>
            <div>
            <h3 className="font-bold">40+<br/>Events</h3>
              {/* <p>Events</p> */}
            </div>
            <div>
            <h3 className="font-bold">5000+<br/>Participation</h3>
              {/* <p>Participation</p> */}
            </div>
          </div>
        </div>
      </motion.div>

      <div className={styles.body}>
        <div>
          <h1 className="text-5xl font-bold mb-6 text-center">About Genero</h1>
          <p>
            Genero, the annual fest of ABES, returns grander than ever for its 25th anniversary as a three-day extravaganza! Celebrating culture, creativity, and competition, it features electrifying performances, e-gaming, literary events, and more. With a decade-long legacy and 6000+ students, this milestone edition promises unforgettable experiences and unmatched excitement!
          </p>
          <div className={styles.stats}>
            <div>
            <h3 className="font-bold">10+<br/>Editions</h3>
              {/* <p>Editions</p> */}
            </div>
            <div>
              <h3 className="font-bold">40+<br/>Events</h3>
              {/* <p>Events</p> */}
            </div>
            <div>
              <h3 className="font-bold">5000+<br/>Participation</h3>
              {/* <p>Participation</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  {/* </BackgroundBeamsWithCollision> */}
}