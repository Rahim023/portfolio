import React, { useMemo, useState } from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  const email = "rahimkhan231205@gmail.com";
  const phone = "+1 437 879 6445";

  const subject = useMemo(() => encodeURIComponent("Project Inquiry - Abdul Rahim Portfolio"), []);
  const bodyTemplate = useMemo(
    () =>
      encodeURIComponent(
        "Hi Abdul,\n\nI’d like to discuss a project/opportunity:\n\n- Company:\n- Role/Project:\n- Timeline:\n- Budget (optional):\n\nThanks,\n"
      ),
    []
  );

  return (
    <div className="rt-page">
      <div className="mb-3">
        <h2 className="rt-h2 mb-1">Contact</h2>
        <p className="rt-muted mb-0">Jobs, freelance, or collaboration — message me anytime.</p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rt-card p-4"
          >
            <h5 className="mb-2">Let’s build something</h5>
            <p className="rt-muted">
              Send a message and I’ll respond quickly. (This opens your email app.)
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("Opening your email app…");
                window.location.href = `mailto:${email}?subject=${subject}&body=${bodyTemplate}`;
                setTimeout(() => setStatus(""), 2000);
              }}
            >
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label rt-form-label">Name</label>
                  <input className="form-control rt-input" placeholder="Your name" required />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label rt-form-label">Email</label>
                  <input type="email" className="form-control rt-input" placeholder="you@example.com" required />
                </div>
                <div className="col-12">
                  <label className="form-label rt-form-label">Message</label>
                  <textarea className="form-control rt-input" rows="5" placeholder="Tell me about the role/project..." required />
                </div>
              </div>

              <div className="d-flex gap-2 flex-wrap mt-3">
                <button className="rt-btn rt-btn-primary">Send Message</button>

                <a className="rt-btn rt-btn-ghost" href={`mailto:${email}?subject=${subject}&body=${bodyTemplate}`}>
                  Email Directly
                </a>

                <a
                  className="rt-btn rt-btn-soft"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"
                >
                  Message on LinkedIn
                </a>
              </div>

              {status && <div className="rt-mutedSmall mt-2">{status}</div>}
            </form>
          </motion.div>
        </div>

        <div className="col-12 col-lg-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rt-card p-4"
          >
            <h5 className="mb-3">Contact Info</h5>

            <div className="rt-infoLine">
              <FaEnvelope /> <span>{email}</span>
            </div>
            <div className="rt-infoLine">
              <FaPhone /> <span>{phone}</span>
            </div>

            <div className="rt-callout mt-3">
              <div className="fw-semibold">Availability</div>
              <div className="rt-mutedSmall">Open to internships / junior dev roles / freelance</div>
            </div>

            <hr className="rt-hr" />

            <h6 className="mb-2">Social</h6>
            <div className="d-flex gap-2 flex-wrap">
              <a className="rt-btn rt-btn-ghost rt-btn-sm" target="_blank" rel="noreferrer" href="https://www.instagram.com/rxhim_khan/?__pwa=1">
                <FaInstagram className="me-2" /> Instagram
              </a>
              <a className="rt-btn rt-btn-ghost rt-btn-sm" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abdul-rahim-4806a6283/">
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
              <a className="rt-btn rt-btn-ghost rt-btn-sm" target="_blank" rel="noreferrer" href="https://github.com/Rahim023">
                <FaGithub className="me-2" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
