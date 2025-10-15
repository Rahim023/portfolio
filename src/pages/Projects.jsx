import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Discussion Board",
    desc: "Social media app- Where user can show up and perform actions on users post",
    tags: ["Database Managment", "JWT authorization", "Bootstrap"],
    link: ""
  },
  {
    title: "New Project- COMING SOON",
    desc: "High-detail embroidered portraits and commissioned wearable art.",
    tags: ["Embroidery", "Art", "Commissions"],
    link: "#"
  },
  {
    title: "New Project- COMING SOON",
    desc: "React app showcasing astronomical data, charts and animations.",
    tags: ["React", "API", "Data Visual"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="section-heading">Projects</h3>
      </div>

      <div className="row g-3">
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ translateY: -6 }} className="col-12 col-md-6">
            <div className="card p-3 card-portrait h-100 d-flex flex-column justify-content-between">
              <div>
                <h5 className="mb-1">{p.title}</h5>
                <p className="text-muted small mb-2">{p.desc}</p>
                <div className="d-flex gap-2 flex-wrap">
                  {p.tags.map((t, j) => (
                    <span key={j} className="badge bg-light text-dark border">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <a className="btn btn-outline-primary btn-sm" href={p.link}>
                  View <FiExternalLink style={{ marginLeft: 6 }} />
                </a>
                <small className="text-muted">Case study available on request</small>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
