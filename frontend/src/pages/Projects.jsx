import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    title: "Discussion Board (Full-Stack)",
    desc: "MERN social app with authentication, protected routes, CRUD posts, and database-backed interactions.",
    tags: ["MERN", "JWT", "MongoDB", "Node/Express", "Bootstrap"],
    live: "",
    github: "https://github.com/Rahim023",
    status: "Ready",
    accent: "blue"
  },
  {
    title: "Royal Threads (E-Commerce)",
    desc: "Premium fashion storefront with modern UI, product flows, and scalable backend direction.",
    tags: ["React", "Node", "MongoDB", "AWS S3", "UI/UX"],
    live: "",
    github: "https://github.com/Rahim023",
    status: "In Progress",
    accent: "purple"
  },
  {
    title: "Coming Soon: Data + Dashboard",
    desc: "Interactive dashboard with charts, API data, filtering, and clean analytics layout.",
    tags: ["React", "APIs", "Charts", "Data Visual"],
    live: "",
    github: "https://github.com/Rahim023",
    status: "Planned",
    accent: "teal"
  }
];

export default function Projects() {
  return (
    <div className="rt-page">
      <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-3">
        <div>
          <h2 className="rt-h2 mb-1">Projects</h2>
          <p className="rt-muted mb-0">Real builds with UI + backend + database thinking.</p>
        </div>

        <div className="d-flex gap-2 flex-wrap">
          <Link to="/contact" className="rt-btn rt-btn-primary rt-btn-sm">
            Hire Me <FaArrowRight className="ms-2" />
          </Link>
          <a className="rt-btn rt-btn-ghost rt-btn-sm" href="/Abdul_Rahim_Resume_Final_feedback.docx" download>
            Resume
          </a>
        </div>
      </div>

      <div className="row g-3">
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="col-12 col-lg-6">
            <div className={`rt-projectCard rt-accent-${p.accent}`}>
              <div className="d-flex align-items-start justify-content-between gap-3">
                <div>
                  <h5 className="mb-1">{p.title}</h5>
                  <p className="rt-muted small mb-3">{p.desc}</p>
                </div>

                <span className={`rt-status rt-status-${p.status.replace(" ", "").toLowerCase()}`}>
                  {p.status}
                </span>
              </div>

              <div className="d-flex flex-wrap gap-2 mb-3">
                {p.tags.map((t, j) => (
                  <span key={j} className="rt-chip">{t}</span>
                ))}
              </div>

              <div className="d-flex gap-2 flex-wrap">
                {p.live ? (
                  <a className="rt-btn rt-btn-soft rt-btn-sm" href={p.live} target="_blank" rel="noreferrer">
                    Live <FiExternalLink className="ms-2" />
                  </a>
                ) : (
                  <button className="rt-btn rt-btn-soft rt-btn-sm" disabled>
                    Live (soon)
                  </button>
                )}

                <a className="rt-btn rt-btn-ghost rt-btn-sm" href={p.github} target="_blank" rel="noreferrer">
                  GitHub <FaGithub className="ms-2" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
