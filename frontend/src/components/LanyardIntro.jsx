import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Lanyard from "./Lanyard";
import useDialog from "./useDialog";
import backImage from "./lanyard-back.svg";
import strapImage from "./lanyard-strap.svg";
import "./LanyardIntro.css";

const portrait = "https://res.cloudinary.com/divypkla0/image/upload/v1794698142/Bearded_Man_in_Beige_Coat_Transparent_Cutout_fozep5.png";

export default function LanyardIntro({ onClose }) {
  const dialogRef = useRef(null);
  const [flipped, setFlipped] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const reduceMotion = useReducedMotion();
  useDialog(dialogRef, true, onClose);

  return (
    <motion.div
      ref={dialogRef}
      className="lanyard-intro"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lanyard-intro-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.65, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="lanyard-intro-heading">
        <span>WELCOME / PORTFOLIO</span>
        <h2 id="lanyard-intro-title">Meet Abdul Rahim.</h2>
      </div>
      <button className="lanyard-intro-close" type="button" onClick={onClose} aria-label="Close introduction">
        <FiX size={20} />
      </button>

      {unavailable ? (
        <div className="lanyard-intro-fallback">
          <button type="button" className="lanyard-fallback-card" onClick={() => setFlipped((current) => !current)} aria-label="Flip profile card" aria-pressed={flipped}>
            <img src={flipped ? backImage : portrait} alt="" />
          </button>
        </div>
      ) : (
        <Lanyard
          frontImage={portrait}
          backImage={backImage}
          strapImage={strapImage}
          imageFit="contain"
          cardColor="#171020"
          cornerRadius={0.3}
          size={0.52}
          strapLength={0.3}
          damping={0.55}
          elasticity={0.55}
          breeze={reduceMotion ? 0 : 0.25}
          intro={!reduceMotion}
          onFlip={setFlipped}
          onError={() => setUnavailable(true)}
        />
      )}

      <div className="lanyard-intro-controls">
        {unavailable && <p role="status">The interactive lanyard is unavailable. Use the card below instead.</p>}
        <p>Click the card to discover more</p>
        {!unavailable && <span>or drag it to explore</span>}
      </div>
      <div className="lanyard-intro-sr">
        Abdul Rahim, software developer in Toronto. React, full-stack development and Java.
        Computer Programming diploma, Sault College, 2025.
      </div>
    </motion.div>
  );
}
