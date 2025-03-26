'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import styles from './page.module.scss'
import useMousePosition from './useMousePosition'

export default function AboutSection() {
  const [hoverState, setHoverState] = useState({
    text: false,
    image: false
  })
  const { x, y } = useMousePosition()
  
  // Size is 200px when hovering text, 40px otherwise (including when hovering image)
  const size = hoverState.text ? 200 : 40

  return (
    <section className={styles.aboutSection}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5}}
      >
        <div className={styles.maskContent}>
          <div 
            className={styles.textContent}
            onMouseEnter={() => setHoverState({ text: true, image: false })}
            onMouseLeave={() => setHoverState({ text: false, image: false })}
          >
            <h1 className="md:text-9xl uppercase font-bold text-black">About Genero</h1>
            <p>
              Genero, the annual fest of ABES, returns grander than ever for its 25th anniversary as a three-day extravaganza! Celebrating culture, creativity, and competition, it features electrifying performances, e-gaming, literary events, and more. With a decade-long legacy and 6000+ students, this milestone edition promises unforgettable experiences and unmatched excitement!
            </p>
            <div className={styles.stats}>
              <div>
                <h3 className="font-bold">10+<br/>Editions</h3>
              </div>
              <div>
                <h3 className="font-bold">40+<br/>Events</h3>
              </div>
              <div>
                <h3 className="font-bold">5000+<br/>Participation</h3>
              </div>
            </div>
          </div>
          <div 
            className={styles.imageContainer}
            onMouseEnter={() => setHoverState({ text: false, image: true })}
            onMouseLeave={() => setHoverState({ text: false, image: false })}
          >
            {/* <Image 
              src="/try2.jpg" 
              alt="Genero Fest" 
              fill
              className={styles.image}
              priority
            /> */}
          </div>
        </div>
      </motion.div>

      <div className={styles.body}>
        <div className={styles.bodyContent}>
          <div className={styles.textContent}>
            <h1 className="md:text-9xl uppercase font-bold text-amber-400">About Genero</h1>
            <p>
              Genero, the annual fest of ABES, returns grander than ever for its 25th anniversary as a three-day extravaganza! Celebrating culture, creativity, and competition, it features electrifying performances, e-gaming, literary events, and more. With a decade-long legacy and 6000+ students, this milestone edition promises unforgettable experiences and unmatched excitement!
            </p>
            <div className={styles.stats}>
              <div>
                <h3 className="font-bold"><span className='text-yellow-300'>10+</span><br/>Editions</h3>
              </div>
              <div>
                <h3 className="font-bold"><span className='text-yellow-300'>40+</span><br/>Events</h3>
              </div>
              <div>
                <h3 className="font-bold"><span className='text-yellow-400'>5000+</span><br/>Participation</h3>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image 
              src="/try2.jpg" 
              alt="Genero Fest" 
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
  {/* </BackgroundBeamsWithCollision> */}
}