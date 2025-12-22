import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

export default function NavBar() {
  const item = { hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      className="navbar navbar-expand-lg navbar-dark rt-navPro"
    >
      <div className="container-fluid px-2 px-md-3">
        <motion.div variants={item} className="d-flex align-items-center gap-3">
          <Link className="navbar-brand d-flex align-items-center gap-2 rt-brandPro" to="/">
            <div className="rt-brand-badge rt-brand-badgePro">AR</div>

            <div style={{ lineHeight: 1 }}>
              <div className="rt-brand-name">Abdul Rahim</div>
              <small className="rt-brand-sub">Full-Stack (MERN) • AWS • SQL/NoSQL</small>
            </div>
          </Link>
        </motion.div>

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

        <motion.div variants={item} className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink className="rt-navlinkPro" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="rt-navlinkPro" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="rt-navlinkPro" to="/contact">
                Contact
              </NavLink>
            </li>

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
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}
