"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const EventsCard = ({ card, index,id }) => {
  return (
    <Link href={`/events/${id}/${card.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="relative bg-transparent text-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition border-2 border-dotted border-black w-full h-72 flex flex-col overflow-hidden"
      >
        <div className="w-full h-40 relative">
          <img            src={card.imgSrc}
            alt={card.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-lg font-semibold text-center text-white">
            {card.name}
          </h2>
        </div>
      </motion.div>
    </Link>
  );
};

export default EventsCard;
