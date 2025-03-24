"use client"
import React, { useRef, useState } from "react";
import { motion,useMotionValueEvent,useScroll } from "framer-motion";
import TicketButton from "./TicketButton";

export const Tabs = () => {
  const [isHidden,setIsHidden] = useState(true);
  const {scrollY}= useScroll()
  const lastYRef =useRef(0);

  useMotionValueEvent(scrollY,'change',(y)=>{
    const difference=y-lastYRef.current;
    if(Math.abs(difference)>50 ){
        setIsHidden(difference>0)
      lastYRef.current=y
    }
  })
  return (
    <motion.div 
    whileHover="visible"
    onFocusCapture={()=> setIsHidden(false)}
    animate={isHidden?"hidden":"visible"}
    variants={{
      hidden:{
        y:"-92%",
      },
      visible:{
        y:"0%"
      }

    }}
    transition={{duration:0.2}}
     className="fixed flex  justify-center items-center w-full z-10 pt-3">
      <SlideTabs />
    </motion.div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="flex " >
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
    }}
    className=" mx-auto flex justify-center items-center w-fit rounded-full border-2  bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Events</Tab>
      <Tab setPosition={setPosition}>Gallery</Tab>
      <Tab setPosition={setPosition}>Teams</Tab>
      <Cursor position={position} />
      <TicketButton/>
    </ul>
    </div>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white hover:text-amber-400 mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};