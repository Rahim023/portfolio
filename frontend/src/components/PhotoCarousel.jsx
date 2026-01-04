import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./PhotoCarousel.css";

export default function PhotoCarousel({ images = ["/images/mypic1.png"], interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!images?.length) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [images, interval]);

  const handlePrevious = () => {
    clearInterval(timerRef.current);
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    clearInterval(timerRef.current);
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  };

  const current = images[index];

  return (
    <div className="photo-carousel-container">
      <div className="photo-fade">
        <div className="photo-overlay" />
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={current}
            alt={`portfolio-${index}`}
            initial={{ opacity: 0, scale: 1.02, x: direction * 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: -direction * 30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      {/* Carousel Controls */}
      {images.length > 1 && (
        <>
          {/* Navigation Dots */}
          <div className="photo-dots">
            {images.map((_, i) => (
              <motion.button
                key={i}
                className={`photo-dot ${i === index ? "active" : ""}`}
                onClick={() => {
                  clearInterval(timerRef.current);
                  setIndex(i);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <motion.button
            className="photo-nav photo-nav-prev"
            onClick={handlePrevious}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft size={16} />
          </motion.button>

          <motion.button
            className="photo-nav photo-nav-next"
            onClick={handleNext}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight size={16} />
          </motion.button>

          {/* Counter */}
          <div className="photo-counter">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
