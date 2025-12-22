import React, { useMemo, useState } from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  const email = "rahimkhan231205@gmail.com";
  const phone = "+1 437 879 6445";

  const subject = useMemo(() => encodeURIComponent("Project Inquiry - Abdul Rahim Portfolio"), []);
  const bodyTemplate = useMemo(
    () => encodeURIComponent("Hi Abdul,\n\nI’d like to discuss a project/opportunity:\n\n- Company:\n- Role/Project:\n- Timeline:\n- Budget (optional):\n\nThanks,\n"),
    []
  );

  return (
    <div className="row g-4">
      <div className="col-12 col-md-7">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hero-card p-4">
          <h4 className="section-heading mb-2">Let’s build something</h4>
          <p className="text-muted">
            For jobs, freelance, or collaboration — message me here or email directly.
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
                <label className="form-label">Name</label>
                <input className="form-control input-glow" placeholder="Your name" required />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control input-glow" placeholder="you@example.com" required />
              </div>
              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea className="form-control input-glow" rows="5" placeholder="Tell me about the role/project..." required />
              </div>
            </div>

            <div className="d-flex gap-2 flex-wrap mt-3">
              <button className="btn btn-royal">Send Message</button>
              <a className="btn btn-outline-dark btn-soft" href={`mailto:${email}?subject=${subject}&body=${bodyTemplate}`}>
                Email Directly
              </a>
              <a className="btn btn-outline-primary btn-soft" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abdul-rahim-4806a6283/">
                Message on LinkedIn
              </a>
            </div>

            {status && <div className="text-muted small mt-2">{status}</div>}
          </form>
        </motion.div>
      </div>

      <div className="col-12 col-md-5">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="hero-card p-4">
          <h5 className="mb-2">Contact Info</h5>
          <p className="mb-1"><FaEnvelope style={{ marginRight: 8 }} /> {email}</p>
          <p className="mb-1"><FaPhone style={{ marginRight: 8 }} /> {phone}</p>
          <p className="mb-3"><strong>Location:</strong> Toronto, Canada</p>

          <div className="callout">
            <div className="fw-semibold">Availability</div>
            <div className="text-muted small">Open to internships / junior dev roles / freelance</div>
          </div>

          <hr />

          <h6 className="mb-2">Social</h6>
          <div className="d-flex gap-2 flex-wrap">
            <a className="btn btn-outline-secondary btn-sm btn-soft" target="_blank" rel="noreferrer" href="https://www.instagram.com/rxhim_khan/?__pwa=1"><FaInstagram /> Instagram</a>
            <a className="btn btn-outline-secondary btn-sm btn-soft" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"><FaLinkedin /> LinkedIn</a>
            <a className="btn btn-outline-secondary btn-sm btn-soft" target="_blank" rel="noreferrer" href="https://github.com/Rahim023"><FaGithub /> GitHub</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
