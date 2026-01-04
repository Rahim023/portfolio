import React, { useId, useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "./NavBar.css";
import { FaGithub, FaLinkedin, FaCheckCircle, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const profileImg = "/images/profile.png";
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const modalId = useId().replace(/:/g, "");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const item = { hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className={`navbar navbar-expand-lg navbar-dark rt-navPro ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid px-2 px-md-3 px-lg-4">
          {/* Brand */}
          <motion.div
            variants={item}
            className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0"
          >
            <Link
              className="navbar-brand d-flex align-items-center gap-2 rt-brandPro flex-grow-1 min-w-0"
              to="/"
            >
              {/* Profile image button */}
              <button
                type="button"
                className="rt-avatarBtn flex-shrink-0"
                onClick={() => setModalOpen(true)}
                aria-label="Open profile preview"
              >
                <img
                  src={profileImg}
                  alt="Abdul Rahim"
                  className="rt-avatarImg"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/120x120.png?text=AR";
                  }}
                />
              </button>

              {/* Brand text - hidden on xs */}
              <div
                className="d-none d-sm-block flex-grow-1 min-w-0"
                style={{ lineHeight: 1 }}
              >
                <div className="rt-brand-name text-truncate">Abdul Rahim</div>
                <small className="rt-brand-sub d-block text-truncate">
                  Full-Stack (MERN)
                </small>
              </div>

              {/* Mobile brand text - visible on xs only */}
              <div className="d-block d-sm-none flex-grow-1 min-w-0 rt-mobileBrand">
                <div className="rt-mobileBrandMain">Abdul Rahim</div>
                <div className="rt-mobileBrandSub">Full-Stack</div>
              </div>
            </Link>

            {/* Status pill - hidden on tablet */}
            <div className="d-none d-lg-flex rt-navStatus flex-shrink-0">
              <FaCheckCircle className="me-2" />
              <span className="d-none d-xl-inline">Available</span>
            </div>
          </motion.div>

          {/* Mobile toggle button */}
          <motion.button
            variants={item}
            className="navbar-toggler border-0 text-white flex-shrink-0 rt-navToggle"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-controls="navMenu"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Nav items - Desktop */}
          <motion.div
            variants={item}
            className={`collapse navbar-collapse ${mobileOpen ? "show" : ""}`}
            id="navMenu"
            aria-expanded={mobileOpen}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2 w-100">
              {/* Nav Links */}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `rt-navlinkPro rt-navlinkPill ${isActive ? "active" : ""}`
                  }
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `rt-navlinkPro rt-navlinkPill ${isActive ? "active" : ""}`
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `rt-navlinkPro rt-navlinkPill ${isActive ? "active" : ""}`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

              {/* Social icons (desktop only) */}
              <li className="nav-item d-none d-lg-flex align-items-center gap-2 ms-lg-2 flex-shrink-0">
                <a
                  className="rt-navIcon"
                  href="https://github.com/Rahim023"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  className="rt-navIcon"
                  href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </li>

              {/* CTA buttons */}
              <li className="nav-item ms-lg-2 d-flex flex-column flex-sm-row gap-2 mt-3 mt-lg-0">
                <a
                  className="rt-navbtn rt-navbtn-ghost rt-navbtnPro w-100 w-sm-auto text-center"
                  href="/Abdul_Rahim_Resume_Final_feedback.docx"
                  download
                >
                  Resume
                </a>

                <Link
                  to="/contact"
                  className="rt-navbtn rt-navbtn-primary rt-navbtnPro w-100 w-sm-auto text-center"
                >
                  Hire Me
                </Link>
              </li>

              {/* Social icons (mobile) */}
              <li className="nav-item d-lg-none mt-3 pt-2 border-top border-secondary border-opacity-25">
                <div className="d-flex flex-column gap-2">
                  <a
                    className="rt-navIcon w-100 justify-content-center py-2 px-3 rounded-3"
                    href="https://github.com/Rahim023"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="me-2" /> GitHub
                  </a>
                  <a
                    className="rt-navIcon w-100 justify-content-center py-2 px-3 rounded-3"
                    href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="me-2" /> LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.nav>

      {/* React-controlled Modal (responsive and larger) */}
      {modalOpen && (
        <div className="rt-customModal" role="dialog" aria-modal="true">
          <div className="rt-modalBackdrop" onClick={() => setModalOpen(false)} />
          <div className="rt-modalContent" ref={modalRef}>
            <button className="rt-modalClose" onClick={() => setModalOpen(false)} aria-label="Close">
              <FaTimes />
            </button>

            <div className="rt-modalGrid">
              <div className="rt-modalImageWrap">
                <img
                  src={profileImg}
                  alt="Abdul Rahim Profile"
                  className="rt-modalImage"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x600.png?text=AR";
                  }}
                />
              </div>

              <div className="rt-modalDetails">
                <h3 className="rt-modalTitle">Abdul Rahim</h3>
                <div className="rt-modalTag">Full-Stack Developer</div>
                <p className="rt-modalMeta">MERN • AWS • SQL/NoSQL • JWT Auth</p>
                <p className="rt-modalDesc">
                  I build production-ready web applications with secure authentication, clean UX, and robust backends. Available for junior or internship roles.
                </p>

                <div className="rt-modalLinks d-flex gap-2 mt-3">
                  <a href="https://github.com/Rahim023" target="_blank" rel="noreferrer" className="rt-modalLink">
                    <FaGithub /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/abdul-rahim-4806a6283/" target="_blank" rel="noreferrer" className="rt-modalLink">
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
