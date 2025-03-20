import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { letters, professionTexts } from "../data"; // Ensure this file exists

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [currentText, setCurrentText] = useState(professionTexts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % professionTexts.length);
        setCurrentText(professionTexts[(currentIndex + 1) % professionTexts.length]);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white isolate">
      <Navbar />

      <div className="flex items-center justify-between w-full h-full px-10">
        {/* Text Section (Left Side) */}
        <motion.div 
          className="w-1/2 space-y-5"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          {/* HELLO ANIMATION */}
          {letters && letters.length > 0 ? (
            <h1 className="flex tracking-wide space-x-3 text-yellow-400 text-6xl font-bold">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ease-in-out transform ${
                    hoveredLetter === index ? "scale-125 text-yellow-300" : "scale-100"
                  } opacity-100 translate-y-0`}
                  onMouseEnter={() => setHoveredLetter(index)}
                  onMouseLeave={() => setHoveredLetter(null)}
                >
                  {letter.char}
                </span>
              ))}
            </h1>
          ) : (
            <h1 className="text-red-500 text-4xl">HELLO Data Missing!</h1> // Debugging if letters array is missing
          )}

          {/* "I'm a Web Developer" */}
          <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 flex items-center gap-2 whitespace-nowrap overflow-hidden font-semibold">
            I'm
            <span
              className={`font-extrabold transition-all duration-500 ease-in-out transform shadow-lg ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {currentText}
            </span>
            Developer
          </span>
        </motion.div>

        {/* Image Section (Right Side) */}
        <motion.div 
          className="w-1/2 flex justify-end"
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <img src="/assets/bg1.png" alt="Developer Image" className="w-[450px] md:w-[600px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
