import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Discussion Board (Full-Stack)",
    desc: "MERN social app with authentication, protected routes, CRUD posts, and database-backed interactions.",
    tags: ["MERN", "JWT", "MongoDB", "Node/Express", "Bootstrap"],
    live: "",
    github: "https://github.com/Rahim023",
    status: "Ready"
  },
  {
    title: "Royal Threads (E-Commerce)",
    desc: "Premium fashion storefront with modern UI, product flows, and scalable backend direction.",
    tags: ["React", "Node", "MongoDB", "AWS S3", "UI/UX"],
    live: "#",
    github: "https://github.com/Rahim023",
    status: "In Progress"
  },
  {
    title: "Coming Soon: Data + Dashboard",
    desc: "Interactive dashboard with charts, API data, filtering, and clean analytics layout.",
    tags: ["React", "APIs", "Charts", "Data Visual"],
    live: "#",
    github: "https://github.com/Rahim023",
    status: "Planned"
  }
];

export default function Projects() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h3 className="section-heading mb-1">Projects</h3>
          <p className="text-muted mb-0">Real builds with UI + backend + database thinking.</p>
        </div>
        <a className="btn btn-outline-dark btn-soft" href="/contact">
          Hire Me
        </a>
      </div>

      <div className="row g-3">
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="col-12 col-md-6">
            <div className="card p-3 card-portrait h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-start justify-content-between gap-2">
                  <div>
                    <h5 className="mb-1">{p.title}</h5>
                    <p className="text-muted small mb-2">{p.desc}</p>
                  </div>
                  <span className={`status-pill status-${p.status.replace(" ", "").toLowerCase()}`}>
                    {p.status}
                  </span>
                </div>

                <div className="d-flex gap-2 flex-wrap">
                  {p.tags.map((t, j) => (
                    <span key={j} className="skill-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mt-3 d-flex gap-2 flex-wrap">
                <a className="btn btn-outline-primary btn-sm btn-soft" href={p.live} target="_blank" rel="noreferrer">
                  Live <FiExternalLink style={{ marginLeft: 6 }} />
                </a>
                <a className="btn btn-outline-dark btn-sm btn-soft" href={p.github} target="_blank" rel="noreferrer">
                  GitHub <FaGithub style={{ marginLeft: 6 }} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
