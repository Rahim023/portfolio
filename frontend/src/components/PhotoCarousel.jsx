import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoCarousel({ images = ["/images/mypic1.png"], interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!images?.length) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(timerRef.current);
  }, [images, interval]);

  const current = images[index];

  return (
    <div className="photo-fade">
      <div className="photo-overlay" />
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={current}
          alt={`portfolio-${index}`}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.03 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  );
}
