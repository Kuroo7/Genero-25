"use client";
import About from "@/components/About/About";
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Hero/Hero";
// import LinkButton from "@/components/LinkButton/LinkButton";
import PastEvents from "@/components/PastEvents/PastEvents";

import PastGenero from "@/components/PastGenero";
import TextMask from "@/components/TextMask/TextMask";
import Ticket from "@/components/Ticket/Ticket";
import ZoomParallax from "@/components/ZoomParallax/page";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

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
    <div>
      <div
        ref={container}
        className="  relative h-[200vh]"
      >
        <Hero scrollYProgress={scrollYProgress} />
        <About scrollYProgress={scrollYProgress} />
      </div>
      <ZoomParallax />
      <PastEvents />

      <TextMask />
      <Faq />
      <Ticket />
    </div>
  );
}
