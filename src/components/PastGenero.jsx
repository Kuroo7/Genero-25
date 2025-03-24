"use client";
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const PastGenero = () => {
  return (
    <div className="bg-neutral-900">
      <div className="flex h-40 pt-10 items-center justify-center">
        <h1 className="md:text-9xl uppercase font-bold text-amber-400">
          Past Genero
          </h1>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  // State to track when scrolling ends
  const [isEnd, setIsEnd] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 1) setIsEnd(true);
    else setIsEnd(false);
  });

  return (
    <section ref={targetRef} className="relative  h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => (
            <Card card={card} key={card.id} isLast={index === cards.length - 1} isEnd={isEnd} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, isLast, isEnd }) => {
  const [scaleFactor, setScaleFactor] = useState(3.5);
  const [tx, setTx] = useState("100%");

  useEffect(() => {
    const updateScaleFactor = () => {
      if (window.innerWidth < 640){
        setScaleFactor(2); // Small screens
        setTx("0%")
      } 
      else if (window.innerWidth < 1024){
        setScaleFactor(2.5);
        setTx("100%")
        // Tablets
      } 
      else {
        setTx("100%")
        setScaleFactor(5);
       } // Large screens
    };

    updateScaleFactor();
    window.addEventListener("resize", updateScaleFactor);
    return () => window.removeEventListener("resize", updateScaleFactor);
  }, []);

  return (
    <motion.div
      key={card.id}
      className={  `group relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] overflow-hidden bg-neutral-200`}
      animate={isLast && isEnd ? { scale: scaleFactor,x:tx } : { scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-0 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-3xl sm:text-4xl md:text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>

     
    </motion.div>
  );
};

export default PastGenero;

const cards = [
  { url: "/imgs/abstract/1.jpg", title: "Title 1", id: 1 },
  { url: "/imgs/abstract/2.jpg", title: "Title 2", id: 2 },
  { url: "/imgs/abstract/3.jpg", title: "Title 3", id: 3 },
  { url: "/imgs/abstract/4.jpg", title: "Title 4", id: 4 },
  { url: "/imgs/abstract/5.jpg", title: "Title 5", id: 5 },
  { url: "/imgs/abstract/6.jpg", title: "Title 6", id: 6 },
  { url: "/imgs/abstract/7.jpg", title: "Title 7", id: 7 },
];
