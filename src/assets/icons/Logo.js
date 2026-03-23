import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Logo = ({ isDarkText = false, className = "" }) => {
  const [step, setStep] = useState(0);
  const totalSteps = 8; 

  const COMPANY_PART_1 = "INTERLOCKING";
  const COMPANY_PART_2 = "BLOCK BUILDERS";
  const TAGLINE = "Building futures, One block at a time";

  const textColor = isDarkText ? "text-slate-600" : "text-primary-500";
  const primaryColor = isDarkText ? "text-primary-500" : "text-primary-400";

  useEffect(() => {
    let isMounted = true;
    const sequence = async () => {
      if (!isMounted) return;

     
      for (let i = 1; i <= totalSteps; i++) {
        setStep(i);
        await new Promise((r) => setTimeout(r, 600));
      }

      // LONG HOLD (8 seconds to read everything)
      await new Promise((r) => setTimeout(r, 15000));

      //  Deconstruction 
      for (let i = totalSteps; i >= 0; i--) {
        setStep(i);
        await new Promise((r) => setTimeout(r, 150));
      }

      await new Promise((r) => setTimeout(r, 1500));
      if (isMounted) sequence();
    };

    sequence();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Link
      to="/"
      className={` items-center gap-4 h-16 md:h-20 group ${className}`}
    >
      <div className={`flex items-center gap-4 h-16 `}>
        {/* HOUSE ICON */}
        <div className="relative w-14 h-14 md:w-20 md:h-20 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 120 100" className="w-full h-full overflow-visible">
            {/* 1. Foundation */}
            <AnimatePresence>
              {step >= 1 && (
                <motion.rect
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  x="10"
                  y="85"
                  width="100"
                  height="3"
                  fill="currentColor"
                  className={primaryColor}
                />
              )}
            </AnimatePresence>

            {/* 2. Side Walls */}
            <AnimatePresence>
              {step >= 2 && (
                <motion.g
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  className="origin-bottom"
                >
                  <rect
                    x="15"
                    y="55"
                    width="3"
                    height="30"
                    fill="currentColor"
                    className={primaryColor}
                  />
                  <rect
                    x="102"
                    y="55"
                    width="3"
                    height="30"
                    fill="currentColor"
                    className={primaryColor}
                  />
                </motion.g>
              )}
            </AnimatePresence>

            {/* 3. Back Roof Slope */}
            <AnimatePresence>
              {step >= 3 && (
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  exit={{ pathLength: 0 }}
                  d="M77 40 L95 15 L115 45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className={primaryColor}
                />
              )}
            </AnimatePresence>

            {/* 4. Front Gable & Chimney */}
            <AnimatePresence>
              {step >= 4 && (
                <motion.g
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <path
                    d="M5 55 L45 15 L85 55"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    className={primaryColor}
                  />
                  <rect
                    x="22"
                    y="18"
                    width="6"
                    height="16"
                    fill="currentColor"
                    className={primaryColor}
                  />
                </motion.g>
              )}
            </AnimatePresence>

            {/* 5. Arched Window */}
            <AnimatePresence>
              {step >= 5 && (
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  d="M35 45 A10 10 0 0 1 55 45 L55 65 L35 65 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={primaryColor}
                />
              )}
            </AnimatePresence>
          </svg>
        </div>

        {/* TEXT AREA */}
        <div className="flex flex-col justify-center border-l-2 border-slate-200/20 pl-4 overflow-visible">
          {/* Step 6: INTERLOCKING (Large) */}
          <div className="overflow-hidden">
            <AnimatePresence>
              {step >= 6 && (
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  className={`text-xl md:text-3xl font-primary font-black tracking-tighter block leading-none ${textColor}`}
                >
                  {COMPANY_PART_1}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Step 7: BLOCK BUILDERS (Medium) */}
          <div className="overflow-hidden">
            <AnimatePresence>
              {step >= 7 && (
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  className="text-sm md:text-lg font-primary font-bold tracking-[0.1em] text-slate-400 block leading-tight"
                >
                  {COMPANY_PART_2}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* Step 8: TAGLINE (Typing Effect) */}
      <div className="min-h-[12px]">
        <AnimatePresence>
          {step >= 8 && (
            <motion.div className="flex">
              {TAGLINE.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="text-[10px] md:text-[12px] font-primary italic font-medium text-primary-500 whitespace-pre"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
};

export default Logo;
