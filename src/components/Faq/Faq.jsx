"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";

// FAQ Data
const faqs = [
  {
    question: "What is the theme of Genero?",
    answer:
      "The theme of Genero'25 is 'The Secret Legacy'. It symbolizes hidden knowledge, forgotten innovations, and the unseen impact of technology. It challenges participants to uncover mysteries, push boundaries, and create their own lasting legacy.",
  },
  {
    question:
      "Can students from other colleges also participate in the events?",
    answer: "Yes, students from other colleges can participate in Genero'25.",
  },
  {
    question: "What is the date and location of the college fest?",
    answer:
      "The location of the college fest is ABES Engineering College campus. Keep the excitement high! We will announce the dates soon. We recommend checking the college's website or social media pages for updates.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    // {faqs.map((faq, index) => (
    //   <FAQItem
    //     key={index}
    //     faq={faq}
    //     isOpen={openIndex === index}
    //     onClick={() => handleClick(index)}
    //   />
    // ))}
    
    <div className="relative w-full">
      <div
        onClick={onClick}
        className="p-6 rounded-xl cursor-pointer mb-4 border border-gray-700 transition duration-300 shadow-md bg-gray-800 text-white hover:shadow-lg w-full"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{faq.question}</h3>
          <div
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDown className="w-6 h-6 text-gray-300" />
          </div>
        </div>
        <div
          ref={contentRef}
          style={{
            overflow: "hidden",
            height: 0,
            opacity: 0,
            transform: "scale(0.95)",
          }}
          className="mt-3 text-md text-gray-300"
        >
          {faq.answer}
        </div>
      </div>
      
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const stringContainer = containerRef.current;
    if (!stringContainer) return;

    let initialValue = `M 0 100 Q 240 100 480 100`;
    let finalValue = `M 0 100 Q 240 100 480 100`;

    const handleMouseMove = (event) => {
      let rect = stringContainer.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      let newPath = `M 0 100 Q ${x} ${y} 480 100`;
      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: finalValue },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
      });
    };

    stringContainer.addEventListener("mousemove", handleMouseMove);
    stringContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stringContainer.removeEventListener("mousemove", handleMouseMove);
      stringContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen w-screen flex flex-col items-center">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 mt-10">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-white">
          Frequently Asked Questions
        </h2>

        {/* Animated Line Below FAQ Title */}
        <div ref={containerRef} className="svgContainer">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 480 200"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M 0 100 Q 240 100 480 100"
              stroke="white"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* FAQ Items */}
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
