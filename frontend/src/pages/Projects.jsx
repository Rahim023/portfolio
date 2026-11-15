import React, { useMemo, useRef, useState } from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import CircularCarousel from "../components/CircularCarousel";
import SkillsOrb from "../components/SkillsOrb";
import { projects } from "../data/projects";
import "./Projects.css";

const filters = ["All Projects", "Frontend", "Full Stack", "Java / Backend", "Data Analytics"];

function ProjectLivePreview({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <details className="project-live-preview" onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary>Explore the live preview</summary>
      {open && <iframe src={project.liveUrl} title={`${project.title} live preview`} loading="lazy" />}
    </details>
  );
}

export default function Projects() {
  const { slug } = useParams();
  const [active, setActive] = useState("All Projects");
  const [selectedId, setSelectedId] = useState(() => projects.find((project) => project.slug === slug)?.id || projects[0]?.id);
  const [focusRequest, setFocusRequest] = useState(null);
  const detailRef = useRef(null);
  const visible = useMemo(
    () => active === "All Projects" ? projects : projects.filter((project) => project.category === active),
    [active]
  );
  const selected = visible.find((project) => project.id === selectedId) || visible[0];
  const selectedIndex = selected ? visible.indexOf(selected) : 0;
  const carouselItems = useMemo(() => visible.map((project) => ({
    src: project.thumbnail,
    alt: `${project.title} preview`,
    title: project.title,
    subtitle: project.category,
  })), [visible]);

  const selectFilter = (filter) => {
    if (filter === active) return;
    const next = filter === "All Projects" ? projects : projects.filter((project) => project.category === filter);
    setActive(filter);
    setSelectedId(next[0]?.id);
    setFocusRequest(null);
  };

  const selectProject = (index) => {
    setSelectedId(visible[index].id);
    setFocusRequest({ index });
  };

  return (
    <div className="portfolio-projects">
      <header className="projects-heading" data-scroll-reveal>
        <div>
          <span className="projects-eyebrow"><span /> SELECTED WORK / 2026</span>
          <h1>Ideas into <em>impact.</em></h1>
          <p>A closer look at the projects, decisions, and details behind the work.</p>
        </div>
        <Link to="/contact" className="projects-contact">Let's work together <FaArrowRight /></Link>
      </header>

      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button key={filter} type="button" className={active === filter ? "active" : ""} onClick={() => selectFilter(filter)} aria-pressed={active === filter}>
            {filter}
          </button>
        ))}
      </div>

      {selected ? (
        <div className="projects-showcase">
          <section className="project-selector" aria-label="Choose a project">
            <div className="project-selector-top">
              <span>THE PROJECT INDEX</span>
              <span>{String(selectedIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}</span>
            </div>
            <div className="project-carousel-stage">
              <div className="project-carousel-orb"><SkillsOrb /></div>
              <CircularCarousel
                key={active}
                items={carouselItems}
                preset="orbit"
                intro="rise"
                autoplay="off"
                cardWidth={230}
                aspectRatio={0.88}
                gap={24}
                depthFade={0.25}
                fadeColor="#15101d"
                initialIndex={selectedIndex}
                focusRequest={focusRequest}
                onChange={(index) => setSelectedId(visible[index].id)}
                onItemClick={(_, index) => setSelectedId(visible[index].id)}
              />
            </div>
            <p className="project-carousel-hint"><span aria-hidden="true">↔</span> Drag, use arrow keys, or select a project below</p>
            <div className="project-selector-list" aria-label="Project list">
              {visible.map((project, index) => (
                <button key={project.id} type="button" className={project.id === selected.id ? "active" : ""} aria-pressed={project.id === selected.id} onClick={() => selectProject(index)}>
                  <span className="project-selector-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-selector-name">{project.title}<small>{project.category}</small></span>
                  <span className="project-selector-arrow" aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
            <button type="button" className="project-detail-jump" onClick={() => detailRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" })}>
              View project details <span aria-hidden="true">↓</span>
            </button>
          </section>

          <article ref={detailRef} className="project-detail" aria-labelledby="selected-project-title">
            <div className="project-detail-top">
              <span>CASE STUDY / {String(selectedIndex + 1).padStart(2, "0")}</span>
              <span className={`project-detail-status status-${selected.status.toLowerCase().replaceAll(" ", "-")}`}><i />{selected.status}</span>
            </div>
            <div className="project-detail-intro">
              <span className="project-detail-category">{selected.category}</span>
              <h2 id="selected-project-title">{selected.title}</h2>
              <p className="project-detail-summary">{selected.summary}</p>
              <p>{selected.description}</p>
            </div>
            <div className="project-detail-actions">
              {selected.liveUrl && <a className="project-detail-primary" href={selected.liveUrl} target="_blank" rel="noreferrer">Live project <FaExternalLinkAlt /></a>}
              {selected.githubUrl && <a className="project-detail-secondary" href={selected.githubUrl} target="_blank" rel="noreferrer"><FaGithub /> View repository</a>}
            </div>
            {selected.liveUrl && <ProjectLivePreview key={selected.id} project={selected} />}
            <div className="project-detail-section">
              <span className="project-detail-label">01 / THE BRIEF</span>
              <h3>The challenge.</h3>
              <p>{selected.problem}</p>
            </div>
            <div className="project-detail-section">
              <span className="project-detail-label">02 / THE WORK</span>
              <h3>Role &amp; responsibilities.</h3>
              <ul>{selected.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="project-detail-section">
              <span className="project-detail-label">03 / IN FOCUS</span>
              <h3>{selected.status === "Planned" ? "Planned features." : "Key features."}</h3>
              <ul>{selected.features.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="project-detail-section">
              <span className="project-detail-label">04 / THE PROCESS</span>
              <h3>{selected.status === "Planned" ? "Challenges & approach." : "Challenges & solutions."}</h3>
              {selected.challenges.map((challenge, index) => (
                <div className="project-detail-challenge" key={challenge}>
                  <strong>{challenge}</strong>
                  <p>{selected.solutions[index] || selected.solutions[0]}</p>
                </div>
              ))}
            </div>
            <div className="project-detail-section">
              <span className="project-detail-label">05 / THE TOOLKIT</span>
              <h3>{selected.status === "Planned" ? "Planned toolkit." : "Built with."}</h3>
              <div className="project-detail-tags">{selected.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
            <div className="project-detail-section project-detail-lesson">
              <span className="project-detail-label">06 / TAKEAWAY</span>
              <h3>Lessons learned.</h3>
              <p>{Array.isArray(selected.lessons) ? selected.lessons.join(" ") : selected.lessons}</p>
            </div>
          </article>
        </div>
      ) : (
        <div className="projects-empty" role="status">
          <span>NOTHING HERE YET</span>
          <h2>More work is on its way.</h2>
          <p>There are no projects in this category yet.</p>
          <button type="button" onClick={() => selectFilter("All Projects")}>View all projects <FaArrowRight /></button>
        </div>
      )}
    </div>
  );
}
