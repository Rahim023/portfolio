import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LogoLoop.css';

export default function LogoLoop({ skills = [] }) {
  const scrollContainerRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Clone items for seamless loop
    const items = container.querySelectorAll('.logo-item');
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      container.appendChild(clone);
    });

    // Create continuous scroll animation
    tlRef.current = gsap.to(container, {
      x: -container.scrollWidth / 2,
      duration: 20,
      ease: 'none',
      repeat: -1,
      onRepeat: () => {
        gsap.set(container, { x: 0 });
      }
    });

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  const skillList = skills.length
    ? skills
    : ['React', 'Node.js', 'MongoDB', 'AWS', 'JWT', 'SQL', 'Express', 'Bootstrap', 'Framer Motion', 'Three.js'];

  return (
    <div className="logo-loop-wrapper">
      <div className="logo-loop-container" ref={scrollContainerRef}>
        {skillList.map((skill, i) => (
          <div key={i} className="logo-item">
            <span className="logo-text">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
