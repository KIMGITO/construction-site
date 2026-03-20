import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { heroSlides } from "../../data/heroSlides";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  // Calculate typing time for current title
  const calculateTypingTime = (title) => {
    const typingSpeed = 100; // ms per character when typing
    const deletingSpeed = 50; // ms per character when deleting
    const pauseTime = 2000; // pause at full text

    // Time to type full title + pause + time to delete
    return (
      title.length * typingSpeed + pauseTime + title.length * deletingSpeed
    );
  };

  // Typewriter effect for titles
  useEffect(() => {
    const titles = heroSlides.map((slide) => slide.title);
    const typingSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[currentSlide];

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      // Typing complete
      setTypingComplete(true);

      // Wait before starting to delete
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
        setTypingComplete(false);
      }, 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      // Deletion complete - move to next slide
      setIsDeleting(false);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      return;
    }

    // Continue typing or deleting
    timeoutRef.current = setTimeout(() => {
      setTypedText(
        currentTitle.substring(0, charIndex + (isDeleting ? -1 : 1))
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [charIndex, isDeleting, currentSlide]);

  // Auto-scroll slides - synchronized with typing
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (isPlaying) {
      const currentTitle = heroSlides[currentSlide].title;
      const slideDuration = calculateTypingTime(currentTitle) + 1000; // Add 1s buffer

      intervalRef.current = setInterval(() => {
        // Only auto-advance if typing is complete or we're not in the middle of typing
        if (typingComplete || charIndex === 0) {
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
          // Reset typewriter for new slide
          setCharIndex(0);
          setTypedText("");
          setIsDeleting(false);
          setTypingComplete(false);
        }
      }, slideDuration);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentSlide, typingComplete, charIndex, heroSlides]);

  // Reset everything when manually changing slides
  const resetForNewSlide = useCallback((newIndex) => {
    setCurrentSlide(newIndex);
    setCharIndex(0);
    setTypedText("");
    setIsDeleting(false);
    setTypingComplete(false);

    // Clear and restart interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const goToSlide = (index) => {
    resetForNewSlide(index);
  };

  // const nextSlide = useCallback(() => {
  //   const newIndex = (currentSlide + 1) % heroSlides.length;
  //   resetForNewSlide(newIndex);
  // }, [currentSlide, resetForNewSlide]);

  // const prevSlide = useCallback(() => {
  //   const newIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  //   resetForNewSlide(newIndex);
  // }, [currentSlide, resetForNewSlide]);

  // const togglePlay = () => {
  //   setIsPlaying(!isPlaying);
  //   if (!isPlaying) {
  //     // Restart interval when playing
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   }
  // };

  const currentData = heroSlides[currentSlide];

  // Calculate progress for visual indicator
  const typingProgress = currentData
    ? (charIndex / currentData.title.length) * 100
    : 0;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentData.bgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-primary-500/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-5 text-white">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl"
          >
            {/* Typewriter Title with Progress Bar */}
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg min-h-[120px] md:min-h-[150px]">
                {typedText}
                <span className="animate-pulse ml-1 text-primary-500">|</span>
              </h1>

              {/* Typing Progress Bar */}
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${typingProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-4 font-light"
            >
              {currentData.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl"
            >
              {currentData.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to={currentData.primaryCTA.link}
                className="btn btn-primary text-center px-8 py-3 bg-primary-500 text-white rounded hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {currentData.primaryCTA.text}
              </Link>
              <Link
                to={currentData.secondaryCTA.link}
                className="btn btn-secondary text-center px-8 py-3 bg-transparent text-white border-2 border-white rounded hover:bg-white hover:text-secondary-500 transition-all duration-300 hover:-translate-y-1"
              >
                {currentData.secondaryCTA.text}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-primary-500/80 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-lg md:text-xl" />
      </button> */}

      {/* <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-primary-500/80 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-lg md:text-xl" />
      </button> */}

      

      {/* Timer Indicator Ring */}
      {/* {isPlaying && (
        <div className="absolute bottom-24 left-4 md:left-8 z-20 w-10 h-10">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
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
                duration:
                  calculateTypingTime(heroSlides[currentSlide].title) / 1000,
                ease: "linear",
                repeat: 0,
              }}
              key={currentSlide}
            />
          </svg>
        </div>
      )} */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-primary-500"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
