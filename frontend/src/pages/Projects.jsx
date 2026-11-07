import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowRight, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "./Projects.css";

const filters = ["All Projects", "Frontend", "Full Stack", "Java / Backend", "Data Analytics"];

export default function Projects() {
  const [active, setActive] = useState("All Projects");
  const { slug } = useParams();
  const navigate = useNavigate();
  const detail = projects.find((project) => project.slug === slug);
  const visible = useMemo(
    () => active === "All Projects" ? projects : projects.filter((project) => project.category === active),
    [active]
  );

  return (
    <div className="rt-page portfolio-projects">
      <div className="projects-heading">
        <div>
          <span className="portfolio-eyebrow">Selected work</span>
          <h1 className="rt-h2 mb-1">Projects & case studies</h1>
          <p className="rt-muted mb-0">Real builds, clearly marked development status.</p>
        </div>
        <Link to="/contact" className="rt-btn rt-btn-primary rt-btn-sm">
          Discuss a role <FaArrowRight className="ms-2" />
        </Link>
      </div>

      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={active === filter ? "active" : ""}
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="project-card"
            >
              <div className="project-preview">
                {project.liveUrl ? (
                  <iframe src={project.liveUrl} title={`${project.title} live preview`} loading="lazy" />
                ) : project.thumbnail ? (
                  <img src={project.thumbnail} alt={`${project.title} preview`} loading="lazy" />
                ) : (
                  <div className="project-preview-placeholder" aria-hidden="true">
                    <span>{project.title.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span>
                  </div>
                )}
                <span className={`project-status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-card-body">
                <span className="project-category">{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="project-tags">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <div className="project-actions">
                  <button type="button" className="rt-btn rt-btn-primary rt-btn-sm" onClick={() => navigate(`/projects/${project.slug}`)}>
                    View case study
                  </button>
                  {project.liveUrl && (
                    <a className="rt-btn rt-btn-ghost rt-btn-sm" href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live demo <FaExternalLinkAlt className="ms-2" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a className="project-icon-link" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {detail && (
          <motion.div className="case-study-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => navigate("/projects")}>
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              className="case-study-modal"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="case-study-close" type="button" onClick={() => navigate("/projects")} aria-label="Close case study"><FaTimes /></button>
              <span className={`project-status status-${detail.status.toLowerCase().replaceAll(" ", "-")}`}>{detail.status}</span>
              <h2 id="case-study-title">{detail.title}</h2>
              <p className="case-study-intro">{detail.description}</p>

              <div className="case-study-grid">
                <section><h3>Problem</h3><p>{detail.problem}</p></section>
                <section><h3>Responsibilities</h3><p>{detail.responsibilities.join ? detail.responsibilities.join(" • ") : detail.responsibilities}</p></section>
                <section><h3>Key features</h3><ul>{detail.features.map((item) => <li key={item}>{item}</li>)}</ul></section>
                <section><h3>Challenges & solutions</h3><ul>{detail.challenges.map((item, index) => <li key={item}><strong>{item}</strong> — {detail.solutions[index] || detail.solutions[0]}</li>)}</ul></section>
              </div>

              <div className="project-tags case-study-tags">
                {detail.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <p><strong>Lessons learned:</strong> {detail.lessons}</p>
              <div className="project-actions">
                {detail.liveUrl && <a className="rt-btn rt-btn-primary rt-btn-sm" href={detail.liveUrl} target="_blank" rel="noreferrer">Live demo</a>}
                {detail.githubUrl && <a className="rt-btn rt-btn-ghost rt-btn-sm" href={detail.githubUrl} target="_blank" rel="noreferrer"><FaGithub className="me-2" />GitHub</a>}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
