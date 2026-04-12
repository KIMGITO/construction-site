import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { heroSlides, getHeroImageUrl } from "../../data/heroSlides";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const timeoutRef = useRef(null);

  // 1. Responsive Window Logic
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Performance-Optimized Image Selection
  const currentData = heroSlides[currentSlide];
  const targetWidth = windowWidth > 768 ? 1600 : 800;

  const highResUrl = useMemo(
    () => getHeroImageUrl(currentData.bgImage, targetWidth),
    [currentData.bgImage, targetWidth]
  );
  const blurUrl = useMemo(
    () => getHeroImageUrl(currentData.bgImage, 50, true),
    [currentData.bgImage]
  );

  // 3. Robust Typewriter Logic
  useEffect(() => {
    const currentTitle = currentData.title;
    const typingSpeed = isDeleting ? 40 : 80; // Slightly faster for snappier feel
    const pauseAtEnd = 3000; // How long to stay on full text

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Case: Finished typing
    if (!isDeleting && charIndex === currentTitle.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseAtEnd);
      return;
    }

    // Case: Finished deleting
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      return;
    }

    // Execution: Add/Remove character
    timeoutRef.current = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      setTypedText(
        currentTitle.substring(0, charIndex + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, currentSlide, currentData.title]);

  // 4. Background Preloading (Next 2 Slides)
  useEffect(() => {
    const nextIndices = [
      (currentSlide + 1) % heroSlides.length,
      (currentSlide + 2) % heroSlides.length,
    ];
    nextIndices.forEach((index) => {
      const img = new Image();
      img.src = getHeroImageUrl(heroSlides[index].bgImage, targetWidth);
    });
  }, [currentSlide, targetWidth]);

  const goToSlide = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentSlide(index);
    setCharIndex(0);
    setTypedText("");
    setIsDeleting(false);
  };

  const typingProgress = (charIndex / currentData.title.length) * 100;

  return (
    <section className="relative h-[100svh] md:h-screen overflow-hidden bg-secondary-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Blur Placeholder */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 blur-md"
            style={{ backgroundImage: `url(${blurUrl})` }}
          />

          {/* Main Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundImage: `url(${highResUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 via-secondary-900/40 to-primary-500/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-5 text-white">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="relative inline-block mb-6">
              <h1 className="text-4xl md:text-7xl font-bold leading-tight drop-shadow-2xl min-h-[120px] md:min-h-[180px] tracking-tight">
                {typedText}
                <span className="animate-pulse ml-1 text-primary-500">|</span>
              </h1>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary-500"
                  style={{ width: `${typingProgress}%` }}
                />
              </div>
            </div>

            <p className="text-xl md:text-3xl mb-4 font-semibold text-primary-100 italic">
              {currentData.subtitle}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-10 max-w-2xl bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10">
              {currentData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to={currentData.primaryCTA.link}
                className="px-10 py-4 bg-primary-500 text-white rounded-lg font-bold hover:bg-primary-600 transition-all text-center shadow-lg shadow-primary-500/20"
              >
                {currentData.primaryCTA.text}
              </Link>
              <Link
                to={currentData.secondaryCTA.link}
                className="px-10 py-4 border-2 border-white/80 text-white rounded-lg font-bold hover:bg-white hover:text-secondary-900 transition-all text-center backdrop-blur-sm"
              >
                {currentData.secondaryCTA.text}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "w-12 bg-primary-500"
                : "w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
