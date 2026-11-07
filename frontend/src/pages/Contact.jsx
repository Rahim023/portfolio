import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight, Check, CircleAlert, LoaderCircle, MailCheck, X } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const email = "rahimkhan231205@gmail.com";

  useEffect(() => {
    if (!status || status.type === "error") return undefined;
    const timer = window.setTimeout(() => setStatus(null), 5200);
    return () => window.clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    if (!status) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setStatus(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;
    const name = String(data.get("name") || "").trim();
    const senderEmail = String(data.get("email") || "").trim();
    const subjectText = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2 || subjectText.length < 3 || message.length < 20) {
      setStatus({ type: "error", title: "A few details are missing", message: "Please complete every field with enough detail before sending." });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: senderEmail, subject: subjectText, message, website: String(data.get("website") || "") })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Unable to send your message.");
      setStatus({ type: "success", title: "Message sent", message: "Thank you. Your message has reached Abdul’s inbox." });
      form.reset();
    } catch (error) {
      setStatus({ type: "error", title: "Message not sent", message: error.message || "Unable to send your message. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-editorial">
      <motion.div className="contact-heading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="contact-index">04 / Contact</span>
        <h1>Let’s build<br /><i>something meaningful.</i></h1>
      </motion.div>
      <div className="contact-layout">
        <aside className="contact-details">
          <p>Have a role, project, or idea in mind? I’m open to junior developer opportunities and thoughtful freelance work.</p>
          <a className="contact-email" href={`mailto:${email}`}><FaEnvelope /><span>{email}</span></a>
          <div className="contact-socials">
            <a href="https://github.com/Rahim023" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abdul-rahim-4806a6283/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
          <div className="availability"><i /><span>Available for opportunities</span></div>
        </aside>
        <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="form-row">
            <label>Name<input name="name" minLength="2" maxLength="80" required autoComplete="name" placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" maxLength="254" required autoComplete="email" placeholder="you@example.com" /></label>
          </div>
          <label>Subject<input name="subject" minLength="3" maxLength="120" required placeholder="Role, project, or collaboration" /></label>
          <label>Message<textarea name="message" minLength="20" maxLength="2000" rows="5" required placeholder="Tell me a little about what you’re building..." /></label>
          <div className="honeypot" aria-hidden="true"><input name="website" tabIndex="-1" autoComplete="off" /></div>
          <motion.button type="submit" disabled={submitting} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            <span>{submitting ? "Sending…" : "Send message"}</span>
            {submitting ? <LoaderCircle className="contact-loader" size={17} /> : <ArrowRight size={17} />}
          </motion.button>
        </motion.form>
      </div>
      <AnimatePresence>
        {status && (
          <motion.div className="contact-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setStatus(null)}>
            <motion.div
              className={`contact-modal ${status.type}`}
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="contact-modal-close" type="button" onClick={() => setStatus(null)} aria-label="Close message"><X size={18} /></button>
              <motion.div className="contact-modal-icon" initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", delay: 0.12 }}>
                {status.type === "success" ? <MailCheck size={28} /> : <CircleAlert size={28} />}
              </motion.div>
              <span className="contact-modal-label">{status.type === "success" ? "Delivery confirmed" : "Action required"}</span>
              <h2 id="contact-modal-title">{status.title}</h2>
              <p>{status.message}</p>
              <motion.button type="button" onClick={() => setStatus(null)} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                {status.type === "success" ? <><Check size={16} /> Done</> : <>Try again <ArrowRight size={16} /></>}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
