"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";

// FAQ Data
const faqs = [
  {
    question: "What is the theme of Genero?",
    answer:
      "The theme of Genero'25 is 'The Sacred Legacy'. It symbolizes hidden knowledge, forgotten innovations, and the unseen impact of technology. It challenges participants to uncover mysteries, push boundaries, and create their own lasting legacy.",
  },
  {
    question: "Can students from other colleges also participate in the events?",
    answer: "Yes, students from other colleges can participate in Genero'25.",
  },
  {
    question: "What is the date and location of the college fest?",
    answer:
      "The location of the college fest is ABES Engineering College campus. Keep the excitement high! We will announce the dates soon. We recommend checking the college's website or social media pages for updates.",
  },
];

const FAQItem = ({ faq, isOpen, onClick, pathRef }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <div  className="w-full">
      <div
        onClick={onClick}
        className="cursor-pointer text-white text-lg font-semibold flex justify-between items-center py-4"
      >
        <span>{faq.question}</span>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden text-gray-300 text-md px-4"
        style={{ height: 0, opacity: 0 }}
      >
        {faq.answer}
      </div>
      <div className="svgContainer w-full">
        <svg width="100%" height="50" viewBox="0 0 480 100" preserveAspectRatio="none">
          <path
            ref={pathRef}
            d="M 0 50 Q 240 50 480 50"
            stroke="white"
            fill="transparent"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const pathRefs = useRef([]);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    pathRefs.current.forEach((pathRef, index) => {
      if (!pathRef) return;
      const handleMouseMove = (event) => {
        let rect = pathRef.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        let newPath = `M 0 50 Q ${x} ${y} 480 50`;
        gsap.to(pathRef, { attr: { d: newPath }, duration: 0.2, ease: "power3.out" });
      };
      const handleMouseLeave = () => {
        gsap.to(pathRef, { attr: { d: "M 0 50 Q 240 50 480 50" }, duration: 1.5, ease: "elastic.out(1,0.2)" });
      };
      pathRef.parentNode.addEventListener("mousemove", handleMouseMove);
      pathRef.parentNode.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        pathRef.parentNode.removeEventListener("mousemove", handleMouseMove);
        pathRef.parentNode.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div id="faq" className="bg-black min-h-screen w-screen flex flex-col justify-center items-center shadow-lg">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 mt-10">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-white">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
            pathRef={(el) => (pathRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;