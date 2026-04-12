import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const ThreeDProjectRotator = ({ projects = [] }) => {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

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

  // Preload images for better performance
  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [project.id]: true }));
      };
      img.src = project.image;
    });
  }, [projects]);

  useEffect(() => {
    if (!autoplay || projects.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay, projects.length]);

  if (!projects || projects.length === 0) return null;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-secondary-50">
      <div className="container mx-auto px-4 md:px-5">
        <div className="flex flex-col mb-8 md:mb-16">
          <span className="text-primary-500 font-bold tracking-[0.3em] uppercase text-xs mb-2">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-secondary-500 uppercase">
            Featured Works<span className="text-primary-500">.</span>
          </h2>
        </div>

        <div className="relative h-[400px] md:h-[500px] lg:h-[550px] w-full flex items-center justify-center [perspective:1500px]">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => {
              const isCenter = i === index;
              const isRight = i === (index + 1) % projects.length;
              const isLeft =
                i === (index - 1 + projects.length) % projects.length;

              if (!isCenter && !isRight && !isLeft) return null;

              const getX = () => {
                if (isCenter) return "0%";
                if (isRight) return "105%";
                if (isLeft) return "-105%";
                return "0%";
              };

              return (
                <motion.div
                  key={project.id}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x: isRight ? "120%" : "-120%",
                  }}
                  animate={{
                    opacity: isCenter ? 1 : 0.3,
                    scale: isCenter ? 1 : 0.7,
                    x: getX(),
                    rotateY: isCenter ? 0 : isRight ? -30 : 30,
                    z: isCenter ? 0 : -200,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  onClick={() => goToSlide(i)}
                  className="absolute w-[280px] md:w-[400px] lg:w-[650px] h-[320px] md:h-[420px] lg:h-[480px] cursor-pointer"
                  style={{
                    zIndex: isCenter ? 10 : 5,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black">
                    {/* Preview Image - Always show for all slides */}
                    <div className="relative w-full h-full">
                      {!loadedImages[project.id] && (
                        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                          loadedImages[project.id] ? "opacity-100" : "opacity-0"
                        }`}
                        loading="lazy"
                      />
                    </div>

                    {/* Content Overlay - Only shows on center slide */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-end p-4 md:p-8 transition-all duration-500 ${
                        isCenter ? "opacity-100" : "opacity-0 hover:opacity-100"
                      }`}
                    >
                      {/* Blur Backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent backdrop-blur-[0.5px]" />

                      {/* Text content */}
                      <div className="relative z-10 transform transition-transform duration-300">
                        <span className="text-primary-500 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 block">
                          {project.category || "Construction"}
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-xs md:text-sm lg:text-base max-w-lg mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
                          {project.description}
                        </p>
                        <a
                          href={project.videoOnYouTube}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 md:gap-2 bg-white text-black px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold hover:bg-primary-500 hover:text-white transition-all shadow-lg"
                        >
                          Watch Full Project{" "}
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mt-8 md:mt-12">
          <button
            onClick={prev}
            className="p-2 md:p-4 rounded-full border border-secondary-200 bg-white hover:bg-secondary-500 hover:text-white transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div className="flex gap-2 md:gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  i === index
                    ? "w-6 md:w-8 bg-primary-500"
                    : "w-2 md:w-2.5 bg-secondary-300 hover:bg-secondary-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 md:p-4 rounded-full border border-secondary-200 bg-white hover:bg-secondary-500 hover:text-white transition-all"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeDProjectRotator;
