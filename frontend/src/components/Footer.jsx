import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="signature-footer">
      <motion.div className="footer-cta" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
        <span className="footer-kicker">Available for select opportunities</span>
        <div>
          <p>Have an idea worth building?</p>
          <Link to="/contact">Start a conversation <FiArrowUpRight /></Link>
        </div>
      </motion.div>
      <div className="footer-inner">
        <div className="footer-name"><span>Abdul</span><strong>Rahim.</strong></div>
        <div className="footer-meta">
          <div><span>Role</span><p>Software Developer</p></div>
          <div><span>Location</span><p>Toronto, Ontario</p></div>
          <div><span>Contact</span><a href="mailto:rahimkhan231205@gmail.com"><FaEnvelope /> rahimkhan231205@gmail.com</a></div>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link><Link to="/projects">Projects</Link><Link to="/contact">Contact</Link>
          <a href="/abdulRahim_Resume.pdf" download>Resume</a>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/Rahim023" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/abdul-rahim-4806a6283/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><FaArrowUp /></button>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Abdul Rahim</span><span>React / Node / Java</span></div>
    </footer>
  );
}
