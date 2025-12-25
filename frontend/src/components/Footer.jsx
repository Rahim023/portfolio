import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function Footer() {
  const email = "rahimkhan231205@gmail.com";
  const phone = "+1 437 879 6445";
  const location = "Toronto, ON";

  return (
    <footer className="rt-footerPro">
      <div className="container">
        <div className="rt-footerTopLine" />

        <div className="rt-footerGrid rt-footerGridEnhanced">
          {/* Brand */}
          <div>
            <div className="rt-footerBrand">
              <div className="rt-footerLogo">AR</div>
              <div>
                <div className="rt-footerName">Abdul Rahim</div>
                <div className="rt-footerTag">Full-Stack MERN • AWS • SQL/NoSQL</div>
              </div>
            </div>

            <p className="rt-footerAbout">
              I build premium web apps with clean UI, real backend/database flows, and secure
              authentication — optimized for real-world performance and reliability.
            </p>

            <div className="rt-footerMeta">
              <div className="rt-footerMetaRow">
                <FaEnvelope /> <span>{email}</span>
              </div>
              <div className="rt-footerMetaRow">
                <FaPhoneAlt /> <span>{phone}</span>
              </div>
              <div className="rt-footerMetaRow">
                <FaMapMarkerAlt /> <span>{location}</span>
              </div>
            </div>

            <div className="rt-footerSocialRow">
              <a
                className="rt-socialBtn"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/rxhim_khan/?__pwa=1"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="rt-socialBtn"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                className="rt-socialBtn"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Rahim023"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="rt-footerTitle">Quick Links</div>
            <div className="rt-footerLinks">
              <Link to="/" className="rt-footerLink">
                Home
              </Link>
              <Link to="/projects" className="rt-footerLink">
                Projects
              </Link>
              <Link to="/contact" className="rt-footerLink">
                Contact
              </Link>
              <a className="rt-footerLink" href="/Abdul_Rahim_Resume_Final_feedback.docx" download>
                Download Resume
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div className="rt-footerTitle">Let’s work</div>

            <div className="rt-footerCtaBox rt-footerCtaBoxEnhanced">
              <div className="rt-footerCtaHead">
                <div className="rt-footerCtaTitle">
                  <FaCheckCircle className="me-2" />
                  Available now
                </div>
                <div className="rt-footerBadge">Junior / Intern / Freelance</div>
              </div>

              <div className="rt-footerCtaText">
                Want a developer who can handle UI + backend + databases with a clean structure?
                Let’s build something professional.
              </div>

              <div className="d-flex flex-wrap gap-2">
                <Link to="/contact" className="rt-btn rt-btn-primary rt-btn-sm">
                  Hire / Contact Me
                </Link>
                <Link to="/projects" className="rt-btn rt-btn-ghost rt-btn-sm">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rt-footerBottom">
          <small>© {new Date().getFullYear()} Abdul Rahim — React • Bootstrap • Framer Motion</small>
        </div>
      </div>
    </footer>
  );
}
