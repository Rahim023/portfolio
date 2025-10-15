import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Simple fading carousel using framer-motion for subtle entrance.
 * images: array of image URLs (public folder recommended)
 */
export default function PhotoCarousel({ images = ["/images/mypic1.png"], interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    if (!images || images.length === 0) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [images, interval]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="photo-fade">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`photo-${i}`}
          className={i === index ? "show" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.1 }}
          loading="lazy"
        />
      ))}
    </motion.div>
  );
}
