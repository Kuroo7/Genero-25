"use client";

import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
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
  const [isEnd, setIsEnd] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsEnd(latest >= 1);
  });

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => (
            <Card
              card={card}
              key={card.id}
              isLast={index === cards.length - 1}
              isEnd={isEnd}
            />
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
      if (window.innerWidth < 640) {
        setScaleFactor(2); // Small screens
        setTx("0%");
      } else if (window.innerWidth < 1024) {
        setScaleFactor(2.5); // Tablets
        setTx("100%");
      } else {
        setScaleFactor(5); // Large screens
        setTx("100%");
      }
    };

    updateScaleFactor();
    window.addEventListener("resize", updateScaleFactor);
    return () => window.removeEventListener("resize", updateScaleFactor);
  }, []);

  return (
    <motion.div
      className="group relative   h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]  overflow-hidden bg-amber-100 border-4 border-amber-200 shadow-lg"
      animate={isLast && isEnd ? { scale: scaleFactor, x: tx } : { scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Image Container */}
      <div className="relative h-[80%] w-full">
        <Image
          src={card.url}
          alt={card.title}
          fill
          className="object-cover sepia"
          sizes="(max-width: 768px) 100vw, 350px"
          quality={85}
        />
      </div>
      {/* Text Container */}
      <div className="h-[20%] flex items-center justify-center bg-amber-50 p-2">
        <p className="text-xl sm:text-2xl md:text-3xl font-serif text-green-700 text-center">
          {card.title}
        </p>
      </div>
    </motion.div>
  );
};

export default PastGenero;

const cards = [
  { url: "/image1.jpg", title: "Genero'01", id: 1 },
  { url: "/image2.jpg", title: "Genero'09", id: 2 },
  { url: "/image3.jpg", title: "Genero'13", id: 3 },
  { url: "/image4.jpg", title: "Genero'16", id: 4 },
  { url: "/image5.jpg", title: "Genero'20", id: 5 },
  { url: "/image6.jpg", title: "Genero'23", id: 6 },
  { url: "/image7.jpg", title: "Genero'25", id: 7 },
];
