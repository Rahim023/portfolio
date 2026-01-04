import React from "react";
import { motion } from "framer-motion";
import "./PhotoGrid.css";

export default function PhotoGrid({ photos = [] }) {
  return (
    <div className="rt-photoGrid">
      {photos.map((photo, i) => (
        <motion.figure
          className="rt-photoTile"
          key={i}
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.48, delay: i * 0.06 }}
        >
          <img src={photo} alt={`Portfolio ${i + 1}`} loading="lazy" />
          <figcaption className="rt-photoCaption">
            <div className="rt-photoCaptionInner">Project {i + 1}</div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
