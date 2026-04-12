import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { heroSlides } from "../../data/heroSlides";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying] = useState(true); // Fixed: removed setter since it's not used

  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const preloadCache = useRef({});

  // Preload images function
  const preloadImage = useCallback((src) => {
    if (!src || preloadCache.current[src]) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        preloadCache.current[src] = img;
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const preloadAllImages = async () => {
      const preloadPromises = heroSlides.map((slide) =>
        preloadImage(slide.bgImage).catch((err) =>
          console.warn(`Failed to preload image: ${slide.bgImage}`, err)
        )
      );
      await Promise.allSettled(preloadPromises);
    };

    preloadAllImages();
  }, [preloadImage]);

  // Preload adjacent slides for smoother transitions
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % heroSlides.length;
    const prevIndex =
      (currentSlide - 1 + heroSlides.length) % heroSlides.length;

    preloadImage(heroSlides[nextIndex].bgImage);
    preloadImage(heroSlides[prevIndex].bgImage);
  }, [currentSlide, preloadImage]);

  // Optimized typing speed based on screen size
  const getTypingSpeed = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    return {
      typing: isMobile ? 70 : 100,
      deleting: isMobile ? 35 : 50,
      pauseTime: isMobile ? 6000 : 10000,
    };
  }, []);

  const calculateTypingTime = useCallback(
    (title) => {
      const speeds = getTypingSpeed();
      return (
        title.length * speeds.typing +
        speeds.pauseTime +
        title.length * speeds.deleting
      );
    },
    [getTypingSpeed]
  );

  // Typewriter effect with requestAnimationFrame for smoothness
  useEffect(() => {
    const titles = heroSlides.map((slide) => slide.title);
    const speeds = getTypingSpeed();
    const typingSpeed = isDeleting ? speeds.deleting : speeds.typing;
    const currentTitle = titles[currentSlide];

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      setTypingComplete(true);
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
        setTypingComplete(false);
      }, speeds.pauseTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIsTransitioning(true);
      // Small delay before showing next slide to prevent flicker
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 50);
      return;
    }

    // Use requestAnimationFrame for smoother typing
    const animateTyping = () => {
      setTypedText(
        currentTitle.substring(0, charIndex + (isDeleting ? -1 : 1))
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    };

    timeoutRef.current = setTimeout(animateTyping, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [charIndex, isDeleting, currentSlide, getTypingSpeed]);

  // Optimized auto-scroll with reduced updates
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (isPlaying && !isTransitioning) {
      const currentTitle = heroSlides[currentSlide].title;
      const slideDuration = calculateTypingTime(currentTitle);

      intervalRef.current = setInterval(() => {
        if ((typingComplete || charIndex === 0) && !isTransitioning) {
          setIsTransitioning(true);
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
          setCharIndex(0);
          setTypedText("");
          setIsDeleting(false);
          setTypingComplete(false);
          setTimeout(() => setIsTransitioning(false), 100);
        }
      }, slideDuration);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    currentSlide,
    typingComplete,
    charIndex,
    calculateTypingTime,
    isTransitioning,
    isPlaying,
  ]);

  const resetForNewSlide = useCallback((newIndex) => {
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setCharIndex(0);
    setTypedText("");
    setIsDeleting(false);
    setTypingComplete(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTimeout(() => setIsTransitioning(false), 100);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      if (index !== currentSlide && !isTransitioning) {
        resetForNewSlide(index);
      }
    },
    [currentSlide, isTransitioning, resetForNewSlide]
  );

  const currentData = heroSlides[currentSlide];
  const typingProgress = currentData
    ? (charIndex / currentData.title.length) * 100
    : 0;

  // Image loading state
  const isImageReady = preloadCache.current[currentData?.bgImage];

  return (
    <section className="relative min-h-screen overflow-hidden hero-section">
      {/* Background Image with Optimized Loading */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-xl scale-105"
            style={{
              backgroundImage: `url(${currentData.bgImage}?q=10&w=20)`,
              opacity: isImageReady ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Actual image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url(${currentData.bgImage})`,
              opacity: isImageReady ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-primary-500/40"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content - Title stays at top, everything else at bottom on mobile */}
      <div className="relative z-10 h-full flex flex-col justify-between min-h-screen">
        {/* Top section with title - keeps title at top */}
        <div className="pt-8 md:pt-16 lg:pt-20">
          <div className="container mx-auto px-5 text-white">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl"
            >
              <div className="relative title-container">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg min-h-[100px] sm:min-h-[120px] md:min-h-[150px]">
                  <span style={{ willChange: "contents" }}>{typedText}</span>
                  <span className="animate-pulse ml-1 text-primary-500">|</span>
                </h1>

                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/20 rounded-full hidden  overflow-hidden">
                  <motion.div
                    className="h-full bg-primary-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${typingProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section  */}
        <div className="pb-8 md:pb-12 lg:pb-16">
          <div className="container mx-auto px-5 text-white">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 font-bold"
              >
                {currentData.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative mb-4 md:mb-6 max-w-2xl group"
              >
                <div
                  className="absolute inset-0 -inset-x-4 
                  bg-gradient-to-r from-transparent via-black/50 to-transparent 
                  backdrop-blur-md 
                  [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
                  aria-hidden="true"
                />
                <p className="relative z-10 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white px-3 py-1.5 md:px-4 md:py-2">
                  {currentData.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
              >
                <Link
                  to={currentData.primaryCTA.link}
                  className="btn btn-primary text-center px-6 md:px-8 py-2.5 md:py-3 bg-primary-500 text-white rounded hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-sm md:text-base"
                >
                  {currentData.primaryCTA.text}
                </Link>
                <Link
                  to={currentData.secondaryCTA.link}
                  className="btn btn-secondary text-center px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-white border-2 border-white rounded hover:bg-white hover:text-secondary-500 transition-all duration-300 hover:-translate-y-1 text-sm md:text-base"
                >
                  {currentData.secondaryCTA.text}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="hidden absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 md:flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-6 md:w-8 bg-primary-500"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
