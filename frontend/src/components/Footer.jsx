import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer py-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>
          <div className="footer-title">Abdul Rahim</div>
          <div className="text-muted small">
            Full-Stack MERN • AWS • SQL/NoSQL • Toronto, Canada
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 justify-content-center">
          <Link className="footer-link" to="/projects">Projects</Link>
          <Link className="footer-link" to="/contact">Contact</Link>
          <a className="footer-link" href="/Abdul_Rahim_Resume_Final_feedback.docx" download>Resume</a>
          <span className="footer-badge">Open to work</span>
        </div>

        <div className="d-flex justify-content-center gap-2">
          <a className="social-btn" target="_blank" rel="noreferrer" href="https://www.instagram.com/rxhim_khan/?__pwa=1">
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a className="social-btn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abdul-rahim-4806a6283/">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a className="social-btn" target="_blank" rel="noreferrer" href="https://github.com/Rahim023">
            <FaGithub /> <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="text-center mt-3">
        <small className="text-muted">
          © {new Date().getFullYear()} Abdul Rahim — Built with React, Bootstrap & Framer Motion
        </small>
      </div>
    </footer>
  );
}
