"use client";
import About from "@/components/About/About";
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Hero/Hero";
// import LinkButton from "@/components/LinkButton/LinkButton";
import PastEvents from "../components/PastEvents/PastEvents";

import MobileCarousel from "@/components/MobileCorousel/MobileCarousel";
import ScratchTicket from "@/components/ScratchTicket";
import TextMask from "@/components/TextMask/TextMask";
import ZoomParallax from "@/components/ZoomParallax/page";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
//import MobileCorousel from "@/components/mobileCorousel/page";
import CountDown from "@/components/CountDown/page";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  return (
    // <DistortionEffect/>
   
    <div>
      <div
        ref={container}
        className="  relative h-[200vh]"
      >
        <Hero scrollYProgress={scrollYProgress} />
        <About scrollYProgress={scrollYProgress} />
      </div>  
      {/* <Break/> */}
      <ZoomParallax />
      <PastEvents />
      <MobileCarousel/>      
      <TextMask />
      <CountDown/>
      <Faq />
      <ScratchTicket/>
      {/* <Ticket /> */}
    </div>
  );
}
