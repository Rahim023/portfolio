import React, { useId } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCheckCircle, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const item = { hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } };

  // ✅ put your image here (public folder)
  const profileImg = "/images/profile.png"; // change if needed

  // ✅ unique modal id so it never conflicts
  const modalId = useId().replace(/:/g, "");

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="navbar navbar-expand-lg navbar-dark rt-navPro"
      >
        <div className="container-fluid px-2 px-md-3">
          {/* Brand */}
          <motion.div variants={item} className="d-flex align-items-center gap-3">
            <Link
              className="navbar-brand d-flex align-items-center gap-2 rt-brandPro"
              to="/"
            >
              {/* ✅ Profile image button (opens modal) */}
              <button
                type="button"
                className="rt-avatarBtn"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
                aria-label="Open profile preview"
              >
                <img
                  src={profileImg}
                  alt="Abdul Rahim"
                  className="rt-avatarImg"
                  onError={(e) => {
                    // fallback if image missing
                    e.currentTarget.src =
                      "https://via.placeholder.com/120x120.png?text=AR";
                  }}
                />
              </button>

              <div className="d-none d-sm-block" style={{ lineHeight: 1 }}>
                <div className="rt-brand-name">Abdul Rahim</div>
                <small className="rt-brand-sub">
                  Full-Stack (MERN) • AWS • SQL/NoSQL
                </small>
              </div>
            </Link>

            {/* Status pill */}
            <div className="d-none d-md-flex rt-navStatus">
              <FaCheckCircle className="me-2" />
              Available
            </div>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler border-0 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FiMenu size={22} />
          </button>

          {/* Nav items */}
          <motion.div variants={item} className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <NavLink className="rt-navlinkPro rt-navlinkPill" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="rt-navlinkPro rt-navlinkPill" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="rt-navlinkPro rt-navlinkPill" to="/contact">
                  Contact
                </NavLink>
              </li>

              {/* Social icons (desktop) */}
              <li className="nav-item d-none d-lg-flex align-items-center gap-2 ms-lg-2">
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
              <li className="nav-item ms-lg-2 d-flex gap-2 mt-2 mt-lg-0">
                <a
                  className="rt-navbtn rt-navbtn-ghost rt-navbtnPro"
                  href="/Abdul_Rahim_Resume_Final_feedback.docx"
                  download
                >
                  Download Resume
                </a>

                <Link to="/contact" className="rt-navbtn rt-navbtn-primary rt-navbtnPro">
                  Hire Me
                </Link>
              </li>

              {/* Social icons (mobile) */}
              <li className="nav-item d-lg-none mt-3">
                <div className="d-flex gap-2">
                  <a
                    className="rt-navIcon w-100 justify-content-center"
                    href="https://github.com/Rahim023"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="me-2" /> GitHub
                  </a>
                  <a
                    className="rt-navIcon w-100 justify-content-center"
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

      {/* ✅ Bootstrap Modal (Profile popup) */}
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rt-modalGlass">
            <div className="rt-modalHeader">
              <div className="d-flex align-items-center gap-2">
                <div className="rt-modalTitle">Abdul Rahim</div>
                <span className="rt-modalTag">Profile</span>
              </div>

              <button
                type="button"
                className="rt-modalClose"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            <div className="rt-modalBody">
              <div className="rt-modalAvatarWrap">
                <img
                  src={profileImg}
                  alt="Abdul Rahim Profile"
                  className="rt-modalAvatar"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x400.png?text=AR";
                  }}
                />
              </div>

              <div className="rt-modalSub">
                Full-Stack (MERN) • AWS • SQL/NoSQL
              </div>

              <div className="d-flex flex-wrap gap-2 mt-3">
                <a
                  className="rt-btn rt-btn-soft rt-btn-sm"
                  href="https://github.com/Rahim023"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rt-btn rt-btn-soft rt-btn-sm"
                  href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <Link className="rt-btn rt-btn-primary rt-btn-sm" to="/contact" data-bs-dismiss="modal">
                  Contact
                </Link>
              </div>
            </div>

            <div className="rt-modalFooter">
              <span className="rt-mutedSmall">Tip: Replace /images/profile.jpg with your real photo.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
