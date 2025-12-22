import React from "react";
import PhotoCarousel from "../components/PhotoCarousel";
import { FaCode, FaPalette, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const photos = [
    "/images/Screenshot 2025-10-15 100129.png",
    "/images/Screenshot 2025-10-12 153637.png",
    "/images/mypic1.png",
  ];

  const skills = [
    "React", "Node/Express", "MongoDB", "MySQL/SQL",
    "JWT Auth", "AWS S3", "REST APIs", "Bootstrap"
  ];

  return (
    <div className="home-bg">
      <div className="row g-4 align-items-stretch">
        {/* LEFT */}
        <div className="col-12 col-lg-5 d-flex">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-card p-4 w-100 d-flex flex-column justify-content-between"
          >
            <div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="icon-circle">
                  <FaStar size={18} />
                </div>
                <div>
                  <h1 className="section-heading mb-1">Hi, I’m Abdul Rahim</h1>
                  <p className="text-muted small mb-0">
                    Full-Stack MERN Developer • AWS • SQL/NoSQL
                  </p>
                </div>
              </div>

              <p className="text-secondary mb-3">
                I build fast, modern web apps with secure authentication, clean UI, and real backend/database flows.
                I love shipping projects that feel premium and work reliably.
              </p>

              <div className="trust-strip">
                <div className="trust-item">
                  <div className="trust-kpi">MERN</div>
                  <div className="trust-label">Full-stack builds</div>
                </div>
                <div className="trust-item">
                  <div className="trust-kpi">JWT</div>
                  <div className="trust-label">Auth + roles</div>
                </div>
                <div className="trust-item">
                  <div className="trust-kpi">AWS</div>
                  <div className="trust-label">S3 + deploy ready</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="mb-0 text-primary fw-semibold">Core Skills</h6>
                  <span className="text-muted small">Ready for real projects</span>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {skills.map((s, i) => (
                    <span key={i} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4 d-flex gap-2 flex-wrap">
                <a className="btn btn-royal" href="/projects">See Projects</a>
                <a className="btn btn-outline-dark btn-soft" href="/contact">Let’s Talk</a>
                <a
                  className="btn btn-outline-secondary btn-soft"
                  href="/Abdul_Rahim_Resume_Final_feedback.docx"
                  download
                >
                  Resume
                </a>
              </div>

              <div className="mt-4">
                <h6 className="mb-2 text-primary fw-semibold">Extra</h6>
                <div className="d-flex gap-2 flex-wrap">
                  <div className="mini-card">
                    <div className="d-flex align-items-center gap-2">
                      <FaCode /> <small>Clean coding</small>
                    </div>
                  </div>
                  <div className="mini-card">
                    <div className="d-flex align-items-center gap-2">
                      <FaPalette /> <small>Strong UI sense</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="col-12 col-lg-7 d-flex">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="hero-card p-3 w-100 d-flex flex-column justify-content-between"
          >
            <div>
              <div className="d-flex align-items-center justify-content-between px-1">
                <h5 className="section-heading mb-2">Featured Work</h5>
                <span className="text-muted small">UI • Backend • Database</span>
              </div>

              <PhotoCarousel images={photos} interval={4500} />

              <div className="row mt-3 g-3">
                {[
                  { img: "/images/mypic1.png", caption: "UI & Branding" },
                  { img: "/images/Screenshot 2025-10-12 153637.png", caption: "Database + Logic" },
                  { img: "/images/Screenshot 2025-10-15 100129.png", caption: "Feature Build" },
                ].map((item, index) => (
                  <motion.div whileHover={{ scale: 1.02 }} key={index} className="col-6 col-md-4">
                    <div className="card card-portrait shadow-sm overflow-hidden rounded-4 border-0">
                      <img src={item.img} alt={item.caption} className="img-fluid" />
                      <div className="p-2">
                        <small className="text-muted">{item.caption}</small>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h6 className="mb-2 d-flex align-items-center gap-2 text-primary fw-semibold">
                <FaMapMarkerAlt /> My Location
              </h6>
              <div className="map-container overflow-hidden">
                <iframe
                  title="My Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.493033953357!2d-79.3831846845008!3d43.6532267791218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d77a77fbe9%3A0x7e3bdebcd9af11cb!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1672480000000!5m2!1sen!2sca"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
