import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";



const ThreeDProjectRotator = ({ projects = [] }) => {
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

  useEffect(() => {
    if (!autoplay || projects.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay, projects.length]);

  if (!projects || projects.length === 0) return null;

  return (
    <section className="relative py-24 overflow-hidden bg-secondary-50">
      <div className="container mx-auto px-5">
        <div className="flex flex-col mb-16">
          <span className="text-primary-500 font-bold tracking-[0.3em] uppercase text-xs mb-2">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-secondary-500 uppercase">
            Featured Works<span className="text-primary-500">.</span>
          </h2>
        </div>

        <div className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center [perspective:1500px]">
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
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : 0.8,
                    x: getX(),
                    rotateY: isCenter ? 0 : isRight ? -35 : 35,
                    z: isCenter ? 0 : -250,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  onClick={() => goToSlide(i)}
                  className="absolute w-[300px] md:w-[450px] lg:w-[750px] h-[350px] md:h-[480px] cursor-pointer"
                  style={{
                    zIndex: isCenter ? 10 : 5,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black">
                    {/* Visual Layer */}
                    {isCenter ? (
                      <iframe
                        src={project.videoUrl}
                        title={project.title}
                        className="w-full h-full object-cover scale-[1.05]"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Content Layer (The Seamless Dissolve) */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-end p-6 md:p-10 transition-opacity duration-500 ${
                        isCenter ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {/* Blur Backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_40%,transparent)]" />

                      {/* Text content (Above the blur) */}
                      <div className="relative z-10">
                        <span className="text-primary-500 font-bold text-xs uppercase tracking-widest mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm md:text-base max-w-lg mb-6 line-clamp-2">
                          {project.description}
                        </p>
                        <a
                          href={project.videoOnYouTube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-bold hover:bg-primary-500 hover:text-white transition-all shadow-lg"
                        >
                          View Full Project <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Navigation */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prev}
            className="p-4 rounded-full border border-secondary-200 bg-white hover:bg-secondary-500 hover:text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === index ? "w-12 bg-primary-500" : "w-3 bg-secondary-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-4 rounded-full border border-secondary-200 bg-white hover:bg-secondary-500 hover:text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeDProjectRotator;
