import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ElectricBorder.css";

const ElectricBorder = ({ children, style, intensity = "medium", animated = true }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!animated) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className={`electric-border electric-${intensity} ${isHovering ? "hovering" : ""}`}
      style={{
        ...style,
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={animated ? { scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default ElectricBorder;
