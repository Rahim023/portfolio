import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ElectricBorder from "./ElectricBorder";
import ProfileCard from "./ProfileCard";
import useDialog from "./useDialog";
import JellyRadio from "./JellyRadio";
import "./NavBar.css";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const section = location.hash === "#about" || location.hash === "#skills" ? location.hash.slice(1) : null;
  useDialog(profileRef, profileOpen, () => setProfileOpen(false));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setMobileOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const openProfile = () => {
    setMobileOpen(false);
    setProfileOpen(true);
  };

  const goToSection = (id) => {
    setMobileOpen(false);
    navigate({ pathname: "/", hash: `#${id}` });
  };

  return (
    <header ref={headerRef} className={`floating-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="floating-nav" aria-label="Primary navigation">
        <div className="nav-profile-area">
          <button className="nav-monogram" type="button" onClick={openProfile} aria-label="Open Abdul Rahim profile">
            <img src="https://res.cloudinary.com/divypkla0/image/upload/v1794085279/AbdulRahim_pp_yn5t5j.jpg" alt="" />
            <span className="nav-monogram-status" aria-hidden="true" />
          </button>
          <button className="nav-profile-prompt" type="button" onClick={openProfile}>
            <strong>Abdul Rahim</strong>
            <span>View profile <FiArrowUpRight aria-hidden="true" /></span>
          </button>
        </div>
        <JellyRadio
          className="desktop-nav-links"
          items={[
            { value: "home", label: "Home", to: "/" },
            { value: "about", label: "About", onSelect: () => goToSection("about") },
            { value: "skills", label: "Skills", onSelect: () => goToSection("skills") },
            { value: "work", label: "Work", to: "/projects" },
            { value: "contact", label: "Contact", to: "/contact" }
          ]}
          value={location.pathname === "/" ? section || "home" : location.pathname.startsWith("/projects") ? "work" : location.pathname === "/contact" ? "contact" : ""}
          onChange={() => {}}
          ariaLabel="Page and section links"
          chipColor="transparent"
          activeColor="rgba(139, 92, 246, 0.3)"
          textColor="#c6bdcf"
          activeTextColor="#fff"
          size="sm"
          gap={1}
          swell={0.12}
          barge={3}
        />
        <div className="nav-actions">
          <a className="nav-icon-link" href="https://github.com/Rahim023" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <Link className="nav-resume" to="/resume">View resume <FiArrowUpRight /></Link>
          <button ref={menuButtonRef} className="nav-menu-button" type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div id="mobile-navigation" className="mobile-navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <button type="button" onClick={() => goToSection("about")}>About</button>
            <button type="button" onClick={() => goToSection("skills")}>Skills</button>
            <Link to="/projects" onClick={() => setMobileOpen(false)}>Work</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link to="/resume" onClick={() => setMobileOpen(false)}>View resume <FiArrowUpRight /></Link>
            <div><a href="https://github.com/Rahim023" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/in/abdul-rahim-4806a6283/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {profileOpen && (
          <motion.div className="profile-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setProfileOpen(false)}>
            <motion.div ref={profileRef} className="profile-modal" role="dialog" aria-modal="true" aria-label="Abdul Rahim profile" initial={{ opacity: 0, y: 18, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.96 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} onClick={(event) => event.stopPropagation()}>
              <button className="profile-modal-close" type="button" onClick={() => setProfileOpen(false)} aria-label="Close profile"><FiX /></button>
              <ElectricBorder color="#8b5cf6" glowColor="#a855f7" borderRadius={26}>
                <ProfileCard
                  name="Abdul Rahim"
                  title="Software Developer · Toronto"
                  handle="Rahim023"
                  status="Available for opportunities"
                  statusColor="#67d7a3"
                  avatarUrl="https://res.cloudinary.com/divypkla0/image/upload/v1794698142/Bearded_Man_in_Beige_Coat_Transparent_Cutout_fozep5.png"
                  miniAvatarUrl="https://res.cloudinary.com/divypkla0/image/upload/v1794085279/AbdulRahim_pp_yn5t5j.jpg"
                  backdropColor="#201333"
                  tiltStrength={5}
                  onContactClick={() => { window.location.href = "mailto:rahimkhan231205@gmail.com"; }}
                />
              </ElectricBorder>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
