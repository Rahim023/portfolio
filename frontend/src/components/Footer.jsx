import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const email = "rahimkhan231205@gmail.com";
  const phone = "+1 437 879 6445";

  return (
    <footer className="rt-footerPro">
      <div className="container">
        <div className="rt-footerTopLine" />

        <div className="rt-footerGrid">
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
              I build premium web apps with clean UI, real backend/database flows, and secure authentication.
            </p>

            <div className="rt-footerMeta">
              <div className="rt-footerMetaRow"><FaEnvelope /> <span>{email}</span></div>
              <div className="rt-footerMetaRow"><FaPhoneAlt /> <span>{phone}</span></div>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="rt-footerTitle">Quick Links</div>
            <div className="rt-footerLinks">
              <Link to="/" className="rt-footerLink">Home</Link>
              <Link to="/projects" className="rt-footerLink">Projects</Link>
              <Link to="/contact" className="rt-footerLink">Contact</Link>
              <a className="rt-footerLink" href="/Abdul_Rahim_Resume_Final_feedback.docx" download>
                Download Resume
              </a>
            </div>
          </div>

          {/* CTA + Social */}
          <div>
            <div className="rt-footerTitle">Let’s work</div>
            <div className="rt-footerCtaBox">
              <div className="rt-footerCtaText">
                Open to junior dev roles, internships, and freelance.
              </div>
              <Link to="/contact" className="rt-btn rt-btnPrimary rt-btnSmallFull">
                Hire / Contact Me
              </Link>
              <div className="rt-footerBadge">Available now</div>
            </div>

            <div className="rt-footerSocialRow">
              <a className="rt-socialBtn" target="_blank" rel="noreferrer" href="https://www.instagram.com/rxhim_khan/?__pwa=1">
                <FaInstagram />
              </a>
              <a className="rt-socialBtn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abdul-rahim-4806a6283/">
                <FaLinkedin />
              </a>
              <a className="rt-socialBtn" target="_blank" rel="noreferrer" href="https://github.com/Rahim023">
                <FaGithub />
              </a>
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
