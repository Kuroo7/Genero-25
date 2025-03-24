"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const PastEvents = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const cards = [
    { url: "/image1.jpg", title: "Title 1", id: 1 },
    { url: "/image2.jpg", title: "Title 2", id: 2 },
    { url: "/image3.jpg", title: "Title 3", id: 3 },
    { url: "/image4.jpg", title: "Title 4", id: 4 },
    { url: "/image5.jpg", title: "Title 5", id: 5 },
    { url: "/image6.jpg", title: "Title 6", id: 6 },
    { url: "/image7.jpg", title: "Title 7", id: 7 },
  ];

  return (
    <div className="bg-neutral-800">
      {/* Top Message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex h-48 items-center justify-center"
      >
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </motion.div>

      {/* Horizontal Scroll Section */}
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className="group relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] overflow-hidden bg-neutral-200 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Background Image with Fallback */}
                <motion.img
                  src={card.url}
                  alt={`Card - ${card.title}`}
                  onError={(e) => (e.target.src = "/imgs/default.jpg")}
                  className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-90"
                  loading="lazy"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.5 },
                  }}
                />
                {/* Overlay Text */}
                <motion.div
                  className="absolute inset-0 z-10 grid place-content-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.p
                    className="bg-gradient-to-br from-white/20 to-white/0 p-6 text-3xl md:text-6xl font-black uppercase text-white backdrop-blur-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -5,
                      opacity: 0.9,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {card.title}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex h-48 items-center justify-center"
      >
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </motion.div>
    </div>
  );
};

export default PastEvents;
