import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const  ThreeDProjectRotator = ({ projects = [] }) =>{
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
    setAutoplay(false);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoplay(false);
  };

  const goToSlide = (i) => {
    setIndex(i);
    setAutoplay(false);
  };

  // Autoplay effect
  useEffect(() => {
    if (!autoplay || projects.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, projects.length]);

  if (!projects || projects.length === 0) {
    return (
      <section className="relative py-24 overflow-hidden bg-secondary-50">
        <div className="container mx-auto px-5 text-center">
          <p className="text-secondary-400">No projects to display</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 overflow-hidden bg-secondary-50">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-primary-500 font-bold tracking-[0.3em] uppercase text-xs mb-2 font-secondary">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-secondary-500 font-primary">
            FEATURED WORKS<span className="text-primary-500">.</span>
          </h2>
        </div>

        {/* The 3D Stage */}
        <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center [perspective:1200px]">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => {
              const isCenter = i === index;
              const isRight = i === (index + 1) % projects.length;
              const isLeft =
                i === (index - 1 + projects.length) % projects.length;

              if (!isCenter && !isRight && !isLeft) return null;

              const getXPosition = () => {
                if (isCenter) return 0;
                if (isRight) return window.innerWidth < 768 ? 300 : 450;
                return window.innerWidth < 768 ? -300 : -450;
              };

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.5, x: isRight ? 400 : -400 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1.04 : window.innerWidth < 768 ? 0.6 : 0.5,
                    x: getXPosition(),
                    rotateY: isCenter ? 0 : isRight ? -45 : 45,
                    z: isCenter ? 0 : -300,
                    filter: isCenter ? "blur(0px)" : "blur(0.70px)",
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  onClick={() => goToSlide(i)}
                  className="absolute w-[280px] md:w-[350px] lg:w-[600px] h-[300px] md:h-[400px] cursor-pointer"
                  style={{ zIndex: isCenter ? 10 : 5 }}
                >
                  <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group bg-white">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay Info - Only visible when center */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/20 to-transparent p-4 md:p-8 flex flex-col justify-end transition-opacity duration-500 ${
                        isCenter ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="text-primary-500 font-bold text-xs uppercase tracking-widest mb-2 font-secondary">
                        {project.category}
                      </p>
                      <h3 className="text-xl md:text-3xl font-bold text-white mb-4 leading-none font-primary">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-4 hidden md:block">
                        {project.location} • {project.year}
                      </p>
                      <div className="flex items-center gap-4">
                        <button className="bg-white text-secondary-900 px-4 md:px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-primary-500 hover:text-white transition-colors">
                          View Project{" "}
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mt-8 md:mt-12">
          <button
            onClick={prev}
            className="p-3 md:p-4 rounded-full border border-secondary-200 hover:bg-secondary-500 hover:text-white hover:border-secondary-500 transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Progress Indicators */}
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${
                  i === index
                    ? "w-8 md:w-12 bg-primary-500"
                    : "w-2 md:w-4 bg-secondary-200 hover:bg-secondary-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 md:p-4 rounded-full border border-secondary-200 hover:bg-secondary-500 hover:text-white hover:border-secondary-500 transition-all"
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Autoplay Indicator (optional) */}
        {/* {autoplay && (
          <div className="flex justify-center mt-4">
            <div className="w-20 h-20 md:w-24 md:h-24 relative">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="4"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#c9a959"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: 283 }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              </svg>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}
export default ThreeDProjectRotator;