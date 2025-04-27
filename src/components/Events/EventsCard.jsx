"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const EventsCard = ({ card, index, id }) => {
  
  return (
    <Link href={`${id}/${card.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.2, ease: "easeInOut"}}
        whileHover={{
          scale: 1.05,
          filter:"drop-shadow(0 0 2px #ffc40080) drop-shadow(0 0 20px #ffb30058)",
        }}
        className="relative text-white transition flex flex-col overflow-hidden"
        style={{
          width: "250px",
          height: "400px",
          filter: "drop-shadow(0 0 10px #ffb30058)",
          backgroundImage: 'url("/innerCard.png")',
          // backgroundColor: "#000000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Image Section - Fully Covers the Card */}
        {/* <div className="absolute inset-0"> */}
        {/* <img
            src={card.imgSrc}
            alt={card.name}
            className="w-full h-full object-cover"
          /> */}
        {/* </div> */}

        {/* Overlay to Enhance Text Visibility */}
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h2
            className="text-2xl font-semibold w-45 text-white text-center drop-shadow-lg px-4"
            style={{
              textShadow:
                "0 0 10px #000000, " +
                "0 0 12px #00e0ff, " +
                "0 0 20px #00bfff, " +
                "0 0 30px #0099ff, " +
                "0 0 50px #0066ff, " +
                "0 0 5px #ffb300, " +
                "0 0 10px #ffb300",
            }}
          >
            {card.name}
          </h2>
        </div>
      </motion.div>
    </Link>
  );
};

export default EventsCard;
