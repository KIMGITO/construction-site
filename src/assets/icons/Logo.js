import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Logo = ({
  isDarkText = false,
  size = "md", 
  className = "",
}) => {
  const [constructionStep, setConstructionStep] = useState(0);
  const [showText, setShowText] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  // Size mapping
  const sizes = {
    sm: {
      container: "w-26 h-auto",
      svgWidth: 130,
      svgHeight: 80,
      textSize: "text-xl",
      subTextSize: "text-[8px]",
    },
    md: {
      container: "w-36 h-auto",
      svgWidth: 140,
      svgHeight: 100,
      textSize: "text-3xl",
      subTextSize: "text-[10px]",
    } 
    
  };

  const currentSize = sizes[size] || sizes.md;
  const textColor = isDarkText ? "text-slate-400" : "text-primary-500";
  const primaryColor = isDarkText ? "text-primary-500" : "text-primary-400";
  const subTextColor = "text-slate-400";

  
  useEffect(() => {
    let interval;
    let letterInterval;

    if (constructionStep === 5) {
      // Typing letters one by one
      if (currentLetterIndex < "MARTIN".length) {
        letterInterval = setTimeout(() => {
          setCurrentLetterIndex((prev) => prev + 1);
        }, 150);
      } else {
        setShowText(true);
      }
    }

    // Main construction sequence timer
    interval = setInterval(() => {
      setConstructionStep((prev) => {
        if (prev === 4) {
          // After chimney, start typing
          setCurrentLetterIndex(0);
          setShowText(false);
          return 5;
        }
        if (prev === 6) {
          // Reset after showing full text
          setCurrentLetterIndex(0);
          setShowText(false);
          return 0;
        }
        return prev + 1;
      });
    }, 900);

    return () => {
      clearInterval(interval);
      clearTimeout(letterInterval);
    };
  }, [constructionStep, currentLetterIndex]);

  // Animation variants for building parts
  const groundVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const wallVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const roofVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const chimneyVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <Link
      to="/"
      className={`relative z-[110] group flex flex-col items-center ${currentSize.container} ${className}`}
    >
      <div className="relative pt-8 px-2">
        {/* SVG Construction Area */}
        <motion.svg
          width={currentSize.svgWidth}
          height={currentSize.svgHeight}
          viewBox={`0 0 ${currentSize.svgWidth} ${currentSize.svgHeight}`}
          className="absolute -top-2 left-1/2 -translate-x-1/2"
        >
          

          {/* Left Wall - Step 1 */}
          {(constructionStep >= 1 || constructionStep > 6) && (
            <motion.rect
              x="15"
              y={currentSize.svgHeight - 45}
              width="1"
              height="110"
              fill="currentColor"
              className={primaryColor}
              variants={wallVariants}
              initial="hidden"
              animate={constructionStep >= 1 ? "visible" : "hidden"}
            />
          )}

         

          {/* Roof - Step 3 */}
          {(constructionStep >= 3 || constructionStep > 6) && (
            <motion.path
              d={`M10 ${currentSize.svgHeight - 45} L${
                currentSize.svgWidth / 2
              } ${currentSize.svgHeight - 75} L${currentSize.svgWidth - 18} ${
                currentSize.svgHeight - 45
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              className={primaryColor}
              variants={roofVariants}
              initial="hidden"
              animate={constructionStep >= 3 ? "visible" : "hidden"}
            />
          )}

          {/* Chimney - Step 4 */}
          {(constructionStep >= 4 || constructionStep > 6) && (
            <motion.rect
              x={currentSize.svgWidth - 43.2}
              y={currentSize.svgHeight - 80}
              width="8"
              height="23"
              fill="currentColor"
              className={primaryColor}
              variants={chimneyVariants}
              initial="hidden"
              animate={constructionStep >= 4 ? "visible" : "hidden"}
            />
          )}

          {/* Chimney Smoke - appears after chimney */}
          {constructionStep >= 4 && (
            <motion.circle
              cx={currentSize.svgWidth - 39}
              cy={currentSize.svgHeight - 85}
              r="3"
              fill="currentColor"
              className={primaryColor}
              animate={{
                y: [-2, -12],
                opacity: [0, 0.6, 0],
                r: [2, 4, 2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </motion.svg>

        {/* Building Name with Typewriter Effect */}
        <div className="flex flex-col items-center relative mt-5">
          <div className="flex items-end">
            {"MARTIN".split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={
                  (constructionStep === 5 || constructionStep === 6) &&
                  index < currentLetterIndex
                    ? "visible"
                    : "hidden"
                }
                className={`${currentSize.textSize} font-primary font-black tracking-tighter leading-none transition-colors duration-300 inline-block ${textColor}`}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle - appears last */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: constructionStep === 6 ? 1 : 0,
              y: constructionStep === 6 ? 0 : 10,
            }}
            transition={{ duration: 0.5 }}
            className={`${currentSize.subTextSize} font-secondary uppercase tracking-[0.4em] font-bold transition-colors duration-300 ${subTextColor} mt-2`}
          >
            Construction
          </motion.span>
        </div>

        {/* Floor Line */}
        <div className="relative w-full ">
          <motion.div
            className={`h-[2px] w-full transition-colors duration-300 bg-primary-500`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: constructionStep >= 0 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Construction Progress Indicator */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-primary-500"
            initial={{ width: 0 }}
            animate={{ width: `${(constructionStep / 6) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
