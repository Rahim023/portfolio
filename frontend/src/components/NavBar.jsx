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
      className="navbar navbar-expand-lg navbar-light position-relative navbar-fancy"
    >
      <div className="container-fluid px-2 px-md-3">
        <motion.div variants={item} className="d-flex align-items-center gap-3">
          <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
            <div className="brand-badge">AR</div>
            <div style={{ lineHeight: 1 }}>
              <div className="brand-name">Abdul Rahim</div>
              <small className="brand-sub">
                Full-Stack (MERN) • AWS • SQL/NoSQL
              </small>
            </div>
          </Link>
        </motion.div>

        <button
          className="navbar-toggler border-0"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <NavLink className="nav-link nav-pill" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-pill" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-pill" to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item ms-lg-2 d-flex gap-2 mt-2 mt-lg-0">
              <a
                className="btn btn-outline-dark btn-sm btn-soft"
                href="/Abdul_Rahim_Resume_Final_feedback.docx"
                download
              >
                Download Resume
              </a>
              <Link to="/contact" className="btn btn-royal btn-sm">
                Hire Me
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}
