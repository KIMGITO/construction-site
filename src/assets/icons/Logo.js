import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Logo = ({ isDarkText = false, className = "" }) => {
  const [step, setStep] = useState(0);

  const textColor = isDarkText ? "text-slate-400" : "text-primary-500";
  const primaryColor = isDarkText ? "text-primary-500" : "text-primary-400";

  useEffect(() => {
    // 0: Floor, 1: Walls, 2: Back Roof, 3: Front Gable/Chimney, 4: Arched Window, 5: Text
    const interval = setInterval(() => {
      setStep((prev) => (prev < 5 ? prev + 1 : 0));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const snap = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <Link
      to="/"
      className={`flex items-center gap-4 h-12 md:h-16 overflow-hidden group z-100 ${className}`}
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 120 100" className="w-full h-full overflow-visible">
          {/* 0. Floor & Siding */}
          {step >= 0 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <rect
                x="10"
                y="85"
                width="100"
                height="2"
                fill="currentColor"
                className={primaryColor}
              />
              {[75, 65, 55].map((y) => (
                <rect
                  key={y}
                  x="20"
                  y={y}
                  width="80"
                  height="0.5"
                  fill="currentColor"
                  className="opacity-30"
                />
              ))}
            </motion.g>
          )}

          {/* 1. Walls */}
          {step >= 1 && (
            <motion.g
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              className="origin-bottom"
            >
              <rect
                x="15"
                y="55"
                width="2.5"
                height="30"
                fill="currentColor"
                className={primaryColor}
              />
              <rect
                x="102"
                y="55"
                width="2.5"
                height="30"
                fill="currentColor"
                className={primaryColor}
              />
              <rect
                x="85"
                y="55"
                width="1.5"
                height="30"
                fill="currentColor"
                className={`${primaryColor} opacity-40`}
              />
            </motion.g>
          )}

          {/* 2. Back Roof Section */}
          {step >= 2 && (
            <motion.path
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              d="M75 30 L95 15 L115 45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`${primaryColor}`}
            />
          )}
          

          {/* 3. CHIMNEY (Left Side) - Snaps in with the Gable */}
          {step >= 3 && (
            <motion.g
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <rect
                x="22"
                y="18"
                width="6"
                height="18"
                fill="currentColor"
                className={primaryColor}
              />
              {/* Smoke puff */}
              <motion.circle
                cx="25"
                cy="12"
                r="2"
                fill="currentColor"
                className={primaryColor}
                animate={{ y: [0, -10], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.g>
          )}

          {/* 3. Front Gable */}
          {step >= 3 && (
            <motion.path
              variants={snap}
              initial="hidden"
              animate="visible"
              d="M5 55 L45 15 L85 55"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinejoin="miter"
              className={primaryColor}
            />
          )}

          {/* 4. Arched Window */}
          {step >= 4 && (
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={primaryColor}
            >
              <path
                d="M35 45 A10 10 0 0 1 55 45 L55 65 L35 65 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="45"
                y1="35"
                x2="45"
                y2="65"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="35"
                y1="50"
                x2="55"
                y2="50"
                stroke="currentColor"
                strokeWidth="1"
              />
            </motion.g>
          )}

          {/* Connecting Line */}
          {step >= 3 && (
            <motion.line
              x1="80"
              y1="55"
              x2="110"
              y2="55"
              stroke="currentColor"
              strokeWidth="3"
              className={primaryColor}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
            />
          )}
        </svg>
      </div>

      {/* TEXT AREA */}
      <div className="flex flex-col justify-center border-l-2 border-slate-200/20 pl-4">
        <div className="flex items-end h-7 md:h-9 overflow-hidden">
          {"MARTIN".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={
                step >= 5 ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
              }
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
              }}
              className={`text-2xl md:text-4xl font-primary font-black tracking-tighter leading-none ${textColor}`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className="h-[12px] md:h-[16px] overflow-hidden">
          <AnimatePresence>
            {step >= 5 && (
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="block text-[8px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-primary-500/80 leading-none mt-1"
              >
                Construction
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
