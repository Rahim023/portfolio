import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Hand } from "lucide-react";
import "./NavBar.css";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const goToSection = (id) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      window.location.assign(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`floating-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="floating-nav" aria-label="Primary navigation">
        <div className="nav-profile-area">
          <button className="nav-monogram" type="button" onClick={() => setProfileOpen(true)} aria-label="Open Abdul Rahim profile">
            <img src="https://res.cloudinary.com/divypkla0/image/upload/v1794085279/AbdulRahim_pp_yn5t5j.jpg" alt="" />
            <span className="nav-monogram-status" aria-hidden="true" />
            <motion.span
              className="nav-profile-click"
              aria-hidden="true"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: [0, 1, 1, 0], y: [4, 0, 0, -2] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.1, times: [0, 0.18, 0.72, 1] }}
            >
              <Hand size={11} strokeWidth={2.25} />
            </motion.span>
          </button>
          <motion.button
            className="nav-profile-prompt"
            type="button"
            onClick={() => setProfileOpen(true)}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: [0, 0.72, 0.72, 0], x: [-4, 0, 0, 2] }}
            transition={{ duration: 3.4, repeat: Infinity, repeatDelay: 0.8, times: [0, 0.16, 0.72, 1] }}
          >
            Meet Abdul <span aria-hidden="true">↗</span>
          </motion.button>
        </div>
        <div className="desktop-nav-links">
          <button type="button" onClick={() => goToSection("about")}>About</button>
          <button type="button" onClick={() => goToSection("skills")}>Skills</button>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Work</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </div>
        <div className="nav-actions">
          <a className="nav-icon-link" href="https://github.com/Rahim023" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a className="nav-resume" href="/abdulRahim_Resume.pdf" download>Resume <FiArrowUpRight /></a>
          <button className="nav-menu-button" type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div id="mobile-navigation" className="mobile-navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            <button type="button" onClick={() => goToSection("about")}>About</button>
            <button type="button" onClick={() => goToSection("skills")}>Skills</button>
            <Link to="/projects">Work</Link>
            <Link to="/contact">Contact</Link>
            <a href="/abdulRahim_Resume.pdf" download>Download resume <FiArrowUpRight /></a>
            <div><a href="https://github.com/Rahim023" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/in/abdul-rahim-4806a6283/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {profileOpen && (
          <motion.div className="profile-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setProfileOpen(false)}>
            <motion.div className="profile-modal" role="dialog" aria-modal="true" aria-label="Abdul Rahim profile" initial={{ opacity: 0, y: 18, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.96 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} onClick={(event) => event.stopPropagation()}>
              <button className="profile-modal-close" type="button" onClick={() => setProfileOpen(false)} aria-label="Close profile"><FiX /></button>
              <div className="profile-modal-image"><img src="https://res.cloudinary.com/divypkla0/image/upload/v1794085279/AbdulRahim_pp_yn5t5j.jpg" alt="Abdul Rahim" /></div>
              <div className="profile-modal-copy">
                <span><i /> Available for opportunities</span>
                <h2>Abdul Rahim</h2>
                <p>Software Developer · React & Full Stack · Toronto</p>
                <div><small>Education</small><strong>Computer Programming Diploma</strong><em>Sault College · 2025</em></div>
                <a href="mailto:rahimkhan231205@gmail.com">Start a conversation <FiArrowUpRight /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
