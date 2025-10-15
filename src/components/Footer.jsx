import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer py-4 text-center">
      <div className="d-flex justify-content-center gap-3 mb-3">
        <a className="social-btn d-inline-flex align-items-center gap-2" href="https://www.instagram.com/rxhim_khan/?__pwa=1"><FaInstagram/> Instagram</a>
        <a className="social-btn d-inline-flex align-items-center gap-2" href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"><FaLinkedin/> LinkedIn</a>
        <a className="social-btn d-inline-flex align-items-center gap-2" href="https://github.com/Rahim023"><FaGithub/> GitHub</a>
      </div>
      <small className="text-muted">© {new Date().getFullYear()}Abdul Rahim — Built with React, Bootstrap & Framer Motion</small>
    </footer>
  );
}
