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
  className="relative bg-transparent text-white rounded-2xl shadow-lg hover:shadow-2xl transition border-2 border-dotted border-white w-full h-72 flex flex-col overflow-hidden"
>
  {/* Image Section - Fully Covers the Card */}
  <div className="absolute inset-0">
    <img 
      src={card.imgSrc} 
      alt={card.name} 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Overlay to Enhance Text Visibility */}
  <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
    <h2 className="text-lg font-bold text-white text-center drop-shadow-lg px-4 mt-20 ml-8">
      {card.name}
    </h2>
  </div>
</motion.div>

    </Link>
  );
};

export default EventsCard;
