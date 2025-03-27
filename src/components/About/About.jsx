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

  // Increase hover effect size for a more immersive magical experience
  const size = hoverState.text ? 250 : 50

  return (
    <section className={`${styles.aboutSection} relative overflow-hidden`}>
      {/* Particle effect background */}
      <div className={styles.particles} />

      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div className={styles.maskContent}>
          <div 
            className={styles.textContent}
            onMouseEnter={() => setHoverState({ text: true, image: false })}
            onMouseLeave={() => setHoverState({ text: false, image: false })}
          >
            <h1 className="md:text-9xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 drop-shadow-lg">
              About Genero
            </h1>
            <p className="text-gray-200">
              ✨ Genero, the annual fest of ABES, returns **grander than ever** for its **25th anniversary**! This **three-day extravaganza** is a gateway to a realm of art, music, gaming, and creativity.  
              🌟 Step into a universe where dreams unfold, **talent shines**, and unforgettable moments are forged.  
            </p>
            <div className={styles.stats}>
              <div>
                <h3 className="font-bold text-yellow-300 animate-pulse">10+<br/>Editions</h3>
              </div>
              <div>
                <h3 className="font-bold text-yellow-400 animate-pulse">40+<br/>Events</h3>
              </div>
              <div>
                <h3 className="font-bold text-yellow-500 animate-pulse">5000+<br/>Participants</h3>
              </div>
            </div>
          </div>
          <div 
            className={styles.imageContainer}
            onMouseEnter={() => setHoverState({ text: false, image: true })}
            onMouseLeave={() => setHoverState({ text: false, image: false })}
          >
          </div>
        </div>
      </motion.div>

      {/* Magical Floating Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          y: [10, -10, 10]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-10 left-20 w-6 h-6 bg-yellow-300 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 right-32 w-8 h-8 bg-orange-400 rounded-full blur-lg"></div>
      </motion.div>

      <div className={styles.body}>
        <div className={styles.bodyContent}>
          <div className={styles.textContent}>
            <h1 className="md:text-9xl uppercase font-bold text-amber-400 drop-shadow-lg">
              About Genero
            </h1>
            <p className="text-gray-300">
              🌀 Genero is where the pulse of ABES Engineering College beats the loudest. A carnival of colors, music, and talent, where **every heartbeat syncs to the rhythm of limitless possibilities**. This milestone **25th edition** is set to redefine celebrations!
            </p>
            <div className={styles.stats}>
              <div>
                <h3 className="font-bold text-yellow-300">10+<br/>Editions</h3>
              </div>
              <div>
                <h3 className="font-bold text-yellow-300">40+<br/>Events</h3>
              </div>
              <div>
                <h3 className="font-bold text-yellow-400">5000+<br/>Participants</h3>
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
}