import React from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="row g-4">
      <div className="col-12 col-md-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="card p-4 hero-card">
          <h4 className="section-heading">Get in touch</h4>
          <p className="text-muted">Interested in a collaboration or commission? Send a message — I reply within a few days.</p>

          <form onSubmit={(e) => { e.preventDefault(); alert("Demo: message sent"); }}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" placeholder="Your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button className="btn btn-royal">Send Message</button>
          </form>
        </motion.div>
      </div>

      <div className="col-12 col-md-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .12 }} className="card p-4 hero-card">
          <h5>Contact Info</h5>
          <p className="mb-1"><FaEnvelope style={{ marginRight: 8 }} />rahimkhan231205@gmail.com</p>
          <p className="mb-1"><FaPhone style={{ marginRight: 8 }} /> +1 437 879 6445</p>
          <p className="mb-2"><strong>Location:</strong> Toronto, Canada</p>

          <hr />

          <h6>Social</h6>
          <div className="d-flex gap-2">
            <a className="btn btn-outline-secondary btn-sm" href="https://www.instagram.com/rxhim_khan/?__pwa=1"><FaInstagram/> Instagram</a>
            <a className="btn btn-outline-secondary btn-sm" href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"><FaLinkedin/> LinkedIn</a>
            <a className="btn btn-outline-secondary btn-sm" href="https://github.com/Rahim023"><FaGithub/> GitHub</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
