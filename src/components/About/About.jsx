'use client'
import styles from './page.module.scss'

export default function AboutSection() {
  return (
    <section id='about' className={`${styles.aboutSection} relative overflow-hidden`}>
      <div className={styles.body}>
        <div  className={styles.bodyContent}>
          <div className={styles.textContent}>
            <h1 className="md:text-6xl  uppercase font-bold text-amber-400 drop-shadow-lg"
            style={{ fontFamily: "MedievalSharp",
              background: "linear-gradient(90deg, white 0%,rgb(255, 191, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 5px rgba(255, 255, 255, 0.5)", // subtle glow/contrast
            }}
            >
              About Genero
            </h1>
            <p className="text-gray-300 text-3xl pt-16">
              🌀 Genero is where the pulse of ABES Engineering College beats the loudest. A carnival of colors, music, and talent, where **every heartbeat syncs to the rhythm of limitless possibilities**. This milestone **25th edition** is set to redefine celebrations!
            </p>
            <div className={styles.stats + " pt-16"}>
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
        </div>
      </div>
    </section>
  )
}