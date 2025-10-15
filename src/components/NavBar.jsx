import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

export default function NavBar() {
  const item = { hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      className="navbar navbar-expand-lg navbar-light position-relative navbar-fancy"
      style={{ background: "linear-gradient(180deg, rgba(255,255,255,1), rgba(255,255,255,0.98))" }}
    >
      <div className="container p-2">
        <motion.div variants={item} className="d-flex align-items-center gap-3">
          <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: "linear-gradient(180deg,#2b6ef6,#05306b)",
              display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700
            }}>AR</div>
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontSize: 15 }}>Abdul Rahim</div>
              <small style={{ fontSize: 11, color: "#3b4b6b" }}>Web Designer • MERN Stack Developer</small>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          <li className="nav-item mx-2 d-none d-lg-block">
  <Link to="/contact" className="btn btn-royal ms-3">
    Hire Me
  </Link>
</li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}
