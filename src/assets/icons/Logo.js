import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = ({ isDarkText }) => {
  const [roofCycle, setRoofCycle] = useState(0);

  const primaryColor = isDarkText ? "text-primary-500" : "text-primary-400";
  const subTextColor = "text-slate-400";

  // Construction animation sequence on initial load
  useEffect(() => {
    const interval = setInterval(() => {
      setConstructionPhase((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Roof reconstruction cycle (repeats every 8 seconds)
  useEffect(() => {
    const roofInterval = setInterval(() => {
      setRoofCycle((prev) => (prev + 1) % 2); // Toggle to trigger rebuild
    }, 8000);

    return () => clearInterval(roofInterval);
  }, []);

  // Letter-by-letter construction animation
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  return (
    <Link
      to="/"
      className="relative z-[110] group flex flex-col items-center"
    >
      <div className="relative pt-8 px-4">
        {/* The Roof with Chimney - Reconstructing periodically */}
        <motion.svg
          width="140"
          height="40"
          viewBox="0 0 140 40"
          className="absolute -top-2 left-1/2 -translate-x-1/2"
          key={roofCycle}
        >
          {/* Chimney */}
          <motion.rect
            x="90"
            y="5"
            width="8"
            height="15"
            fill="currentColor"
            className={primaryColor}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeOut",
            }}
          />

          {/* Chimney Smoke Animation */}
          <motion.circle
            cx="94"
            cy="2"
            r="2"
            fill="currentColor"
            className={primaryColor}
            animate={{
              y: [-2, -10],
              opacity: [0, 1, 0],
              scale: [1, 1.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
          />

          <motion.path
            d="M10 35 L70 10 L130 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            className={primaryColor}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.3 }}
          ></motion.g>
        </motion.svg>
        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className={`h-[64px] w-[100px] -z-30 ms-5 absolute top-9 bottom-4  transition-colors duration-300 border-l border-primary-500/90`}
        />

        {/* The Building (Company Name) */}
        <div className="flex flex-col items-center relative mt-4">
          <div className="flex items-end">
            {/* Animated Letters */}
            {"MARTIN".split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`text-4xl font-primary text-primary-600 font-black tracking-tighter leading-none transition-colors duration-300 inline-block`}
              >
                {letter}
              </motion.span>
            ))}

          
          </div>

          {/* Subtitle */}
          <span
            className={`text-[10px] font-secondary uppercase tracking-[0.4em] font-bold transition-colors duration-300 ${subTextColor}`}
          >
            Construction
          </span>
        </div>

        {/* Simple Floor Line */}
        <div className="relative w-full mt-4">
          {/* Base Floor Line */}
          <motion.div
            className={`h-[3px] w-full transition-colors duration-300 bg-primary-500`}
          />

          {/* Animated Floor on Hover */}
          <motion.div
            className="absolute top-0 left-0 h-[3px] bg-primary-500"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4, ease: "circOut" }}
          />
          {/* Walls */}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
