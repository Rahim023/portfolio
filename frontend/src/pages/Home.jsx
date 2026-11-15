import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight, FaGithub, FaJava, FaLinkedin, FaCloud } from "react-icons/fa";
import {
  SiBootstrap, SiCss3, SiExpress, SiFramer, SiGit, SiGithub,
  SiHtml5, SiJavascript, SiMicrosoftsqlserver, SiMongodb, SiMysql, SiNetlify,
  SiMongoose, SiNodedotjs, SiOpenai, SiPostman, SiReact, SiSpringboot, SiTailwindcss, SiVite
} from "react-icons/si";
import { Braces, Database, Terminal, Sparkles, Layers3, Server, Wrench, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import ElectricBorder from "../components/ElectricBorder";
import Folder from "../components/Folder";
import Lightning from "../components/Lightning";
import ParticleText from "../components/ParticleText";
import SkillsOrb from "../components/SkillsOrb";
import StarBorder from "../components/StarBorder";
import "./Home.css";

const frontendSkills = ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "Framer Motion", "React Components", "HTML", "CSS", "Lucide Icons"];
const backendSkills = ["Node.js", "Express.js", "Mongoose", "REST APIs", "Nodemailer", "SMTP", "Cloudinary", "Java", "Spring Boot", "Admin Dashboards"];
const databaseSkills = ["MongoDB", "MySQL", "SQL Server", "SQL", "Excel", "Power Query", "Power Pivot", "Data Modeling"];
const toolSkills = ["Git", "GitHub", "VS Code", "Postman", "Vite", "Netlify", "GitHub Copilot", "Claude", "ChatGPT", "AI-Assisted Debugging"];

const skillBookPages = [
  { title: "Frontend", number: "01", description: "Thoughtful, responsive interfaces.", skills: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { title: "Backend", number: "02", description: "Dependable application logic and APIs.", skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"] },
  { title: "Agentic AI", number: "03", description: "AI-assisted workflows from debugging to validation.", skills: ["GitHub Copilot", "Claude", "ChatGPT"] },
];

const skillIcons = {
  "React": SiReact, "JavaScript": SiJavascript, "Tailwind CSS": SiTailwindcss,
  "Bootstrap": SiBootstrap, "Framer Motion": SiFramer, "HTML": SiHtml5, "CSS": SiCss3,
  "Node.js": SiNodedotjs, "Express.js": SiExpress, "Mongoose": SiMongoose,
  "Cloudinary": FaCloud, "Java": FaJava, "Spring Boot": SiSpringboot,
  "MongoDB": SiMongodb, "MySQL": SiMysql, "SQL Server": SiMicrosoftsqlserver,
  "Git": SiGit, "GitHub": SiGithub, "Postman": SiPostman, "Vite": SiVite,
  "Netlify": SiNetlify, "GitHub Copilot": SiGithub, "ChatGPT": SiOpenai,
  "SQL": Database, "React Components": SiReact, "Lucide Icons": Sparkles,
  "REST APIs": Braces, "Nodemailer": Terminal, "SMTP": Terminal,
  "Admin Dashboards": Server, "Excel": Database, "Power Query": Database,
  "Power Pivot": Database, "Data Modeling": Database, "VS Code": Braces,
  "Claude": Sparkles, "AI-Assisted Debugging": Wrench
};

function SkillBadge({ skill }) {
  const Icon = skillIcons[skill] || Braces;
  return <b><Icon aria-hidden="true" /><span>{skill}</span></b>;
}

function SkillMarquee({ skills, reverse = false }) {
  return (
    <div className={`skill-marquee ${reverse ? "reverse" : ""}`} aria-label="Technology list">
      <div className="skill-marquee-track">
        {[0, 1].map((copy) => (
          <div className="skill-marquee-group" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
            {skills.map((skill) => <SkillBadge skill={skill} key={`${copy}-${skill}`} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const projectHoverTimer = useRef(null);
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeSkill, setActiveSkill] = useState(0);
  const visibleProject = projects[projectIndex % projects.length] || projects[0];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSkill((current) => (current + 1) % 4);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => () => window.clearTimeout(projectHoverTimer.current), []);

  const selectProjectOnHover = (index) => {
    window.clearTimeout(projectHoverTimer.current);
    projectHoverTimer.current = window.setTimeout(() => {
      setProjectIndex((current) => current === index ? current : index);
    }, 60);
  };

  const selectProjectAndView = (index) => {
    window.clearTimeout(projectHoverTimer.current);
    setProjectIndex(index);
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="home-editorial">
      <section className="hero-section" aria-labelledby="hero-title">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="availability-pill"><i /> Open to software development opportunities</span>
          <h1 id="hero-title" className="hero-name-particles" aria-label="Abdul Rahim">
            {["Abdul", "Rahim"].map((name) => (
              <ParticleText
                key={name}
                className="hero-name-particle-effect"
                text={name}
                particleSize={3}
                density={4}
                color="#f0f2f2"
                highlightColor="#8b5cf6"
                highlightMode="motion"
                shape="circle"
                intro="scan"
                scatter={130}
                gatherDuration={1200}
                stagger={240}
                clickBurst
                burstStrength={0.8}
                pointerRepel={24}
                repelRadius={105}
                idleDrift={0}
                trigger="hover"
                fontSize="clamp(3rem, 10vw, 8rem)"
                fontWeight={850}
                fontFamily="Sora, Inter, sans-serif"
                glow={false}
              />
            ))}
          </h1>
          <div className="hero-role">Software Developer <b>/</b> React & Full Stack <b>/</b> Java</div>
          <p>Designing thoughtful interfaces.<br />Engineering reliable digital experiences.</p>
          <div className="hero-actions">
            <Link className="editorial-button primary" to="/projects">Explore my work <FaArrowRight /><StarBorder /></Link>
            <Link className="editorial-button secondary" to="/resume">View resume<StarBorder /></Link>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Rahim023" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abdul-rahim-4806a6283/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </motion.div>

        <div className="portrait-stage">
          <Lightning
            className="hero-lightning"
            color="#8b5cf6"
            bolts={1}
            spread={0.8}
            branches={0.65}
            size={0.85}
            thickness={1}
            glow={1.2}
            intensity={0.8}
            speed={0.5}
            flicker={0.6}
            mouseInteraction
            mouseStrength={0.55}
            clickStrike={false}
            intro
            fade={0.35}
            opacity={0.72}
          />
          <img
            className="hero-person"
            src="https://res.cloudinary.com/divypkla0/image/upload/v1794698142/Bearded_Man_in_Beige_Coat_Transparent_Cutout_fozep5.png"
            alt="Abdul Rahim"
          />
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll</span><FaArrowDown /></a>
      </section>

      <section className="about-editorial" id="about">
        <motion.div className="about-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-index">01 / ABOUT</span>
          <h2>Beyond<br /><i>the code.</i></h2>
        </motion.div>
        <motion.div className="about-copy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="about-lead">I build complete digital experiences — from responsive interfaces to dependable application logic.</p>
          <p>In December 2025, I graduated with a Computer Programming diploma from Sault College, Toronto. My focus is React and full-stack development, with practical experience across Node.js, REST APIs, MongoDB, MySQL, and SQL Server. I am also continuing to develop my Java and Spring Boot knowledge.</p>
        </motion.div>
        <div className="about-showcase">
          <div className="about-story">
            <ElectricBorder className="workspace-border" color="#8b5cf6" glowColor="#22d3ee" borderRadius={24}>
              <div className="developer-visual" aria-label="Developer technology workspace">
                <div className="visual-grid" />
                <div className="orbit orbit-one" /><div className="orbit orbit-two" />
                <div className="code-panel">
                  <div className="code-panel-bar"><span /><span /><span /><b>portfolio.tsx</b></div>
                  <pre><code><em>const</em> developer = {"{"}{"\n"}  name: <strong>"Abdul Rahim"</strong>,{"\n"}  focus: <strong>"Full-stack products"</strong>,{"\n"}  location: <strong>"Toronto"</strong>{"\n"}{"}"};</code></pre>
                  <div className="terminal-status"><Terminal size={13} /><span>build successful</span><motion.i animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} /></div>
                </div>
                <div className="visual-stack">
                  {[["REACT", Braces], ["NODE", Terminal], ["SQL", Database], ["API", Sparkles]].map(([label, Icon], index) => (
                    <motion.button
                      type="button"
                      key={label}
                      className={activeSkill === index ? "active" : ""}
                      onClick={() => setActiveSkill(index)}
                      whileHover={{ x: -5, scale: 1.03 }}
                      aria-label={`Highlight ${label}`}
                    >
                      <Icon size={12} /> {label}<StarBorder />
                    </motion.button>
                  ))}
                </div>
                <div className="visual-index">AR / 2026</div>
              </div>
            </ElectricBorder>
            <ElectricBorder className="education-border" color="#6a32eb" borderRadius={16}>
              <div className="education-panel" data-scroll-reveal>
                <span className="education-year">2025</span>
                <div><span>Education / Diploma</span><strong>Computer Programming</strong><small>Sault College — Toronto, Ontario</small></div>
              </div>
            </ElectricBorder>
          </div>
          <ElectricBorder className="skills-book-border" color="#f2eded" glowColor="#ff00dd" borderRadius={24} intensity={0.7} interactive={false}>
            <div className="skills-book-feature" aria-labelledby="skills-book-title">
              <div className="skills-book-heading">
                <span>THE SKILLS EDIT <i /> VOL. 01</span>
                <h3 id="skills-book-title">My <em>skills.</em></h3>
                <p>A collection of the tools and ideas behind my work.</p>
              </div>
              <div className="skills-book-visual">
                <SkillsOrb />
                <Folder mode="book" label="My skills" color="#54358d" paperColor="#181323" size={1.12} layout="row" draggable={false}>
                  {skillBookPages.map((page) => (
                    <div className="skills-book-page" key={page.title}>
                      <span className="skills-book-page-number">{page.number} / MY SKILLS</span>
                      <strong>{page.title}</strong>
                      <p>{page.description}</p>
                      <div className="skills-book-page-list">
                        {page.skills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </div>
                  ))}
                </Folder>
              </div>
              <div className="skills-book-footer">
                <ol>
                  {skillBookPages.map((page) => <li key={page.title}><span>{page.number}</span>{page.title}</li>)}
                </ol>
                <p><span aria-hidden="true">↗</span> Open the book &amp; select a page</p>
              </div>
            </div>
          </ElectricBorder>
        </div>
      </section>

      <section className="stack-editorial" id="skills">
        <div className="section-heading-row" data-scroll-reveal>
          <div><span className="section-index">02 / STACK</span><h2>Built across the stack.</h2></div>
          <p>Practical tools for thoughtful interfaces and maintainable systems.</p>
        </div>
        <div className="bento-grid">
          <motion.article className="stack-panel stack-featured" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, borderColor: "rgba(139,92,246,.38)" }} viewport={{ once: true }} transition={{ duration: .45 }}>
            <span>01</span><div className="stack-icon"><Layers3 /></div><h3>Frontend Engineering</h3><SkillMarquee skills={frontendSkills} />
            <p>Responsive React interfaces, reusable components, accessible layouts, and polished animated interactions.</p>
          </motion.article>
          <motion.article className="stack-panel stack-backend" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, borderColor: "rgba(34,211,238,.32)" }} viewport={{ once: true }} transition={{ duration: .45, delay: .08 }}>
            <span>02</span><div className="stack-icon"><Server /></div><h3>Backend</h3><SkillMarquee skills={backendSkills} reverse /><p className="stack-summary">REST APIs · Email delivery · Media services · Admin workflows</p>
          </motion.article>
          <motion.article className="stack-panel stack-database" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, borderColor: "rgba(103,215,163,.32)" }} viewport={{ once: true }} transition={{ duration: .45, delay: .16 }}>
            <span>03</span><div className="stack-icon"><Database /></div><h3>Databases</h3><SkillMarquee skills={databaseSkills} /><p className="stack-summary">Schema modeling · SQL · Excel analytics · Reporting</p>
          </motion.article>
          <motion.article className="stack-panel stack-tools" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, borderColor: "rgba(255,210,138,.28)" }} viewport={{ once: true }} transition={{ duration: .45, delay: .24 }}>
            <span>04</span><div className="stack-icon"><Wrench /></div><div className="stack-tools-copy"><h3>Developer Tools & AI</h3><SkillMarquee skills={toolSkills} reverse /></div><p className="stack-tools-note">AI-assisted debugging, root-cause analysis, and solution validation.</p>
          </motion.article>
        </div>
      </section>

      <section className="featured-editorial" id="projects">
        <div className="section-heading-row" data-scroll-reveal>
          <div><span className="section-index">03 / SELECTED WORK</span><h2>Projects with purpose.</h2></div>
          <Link className="text-link" to="/projects">View all projects <FaArrowRight /><StarBorder /></Link>
        </div>
        <article className="featured-project">
          <div className="featured-browser">
            <div className="browser-bar"><span /><span /><span /><p>{visibleProject.liveUrl?.replace("https://", "") || visibleProject.title}</p></div>
            <motion.div className="featured-preview" key={visibleProject.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .25 }}>
              {visibleProject.liveUrl ? (
                <iframe src={visibleProject.liveUrl} title={`${visibleProject.title} live website preview`} loading="lazy" />
              ) : (
                <img src={visibleProject.thumbnail} alt={`${visibleProject.title} preview`} />
              )}
            </motion.div>
          </div>
          <div className="featured-details" data-scroll-reveal>
            <span className="project-status">{visibleProject.status}</span>
            <h3>{visibleProject.title}</h3>
            <p>{visibleProject.summary}</p>
            <div className="project-tags">{visibleProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <div className="project-actions">
              {visibleProject.liveUrl && <a className="editorial-button primary" href={visibleProject.liveUrl} target="_blank" rel="noreferrer">Live demo <FaArrowRight /><StarBorder /></a>}
              {visibleProject.githubUrl && <a className="editorial-button secondary" href={visibleProject.githubUrl} target="_blank" rel="noreferrer"><FaGithub /> GitHub<StarBorder /></a>}
              <button type="button" className="text-link" onClick={() => setProjectIndex((projectIndex + 1) % projects.length)}>Next project <FaArrowRight /><StarBorder /></button>
            </div>
          </div>
        </article>
      </section>

      <section className="project-index-editorial" aria-label="Project index">
        <span className="section-index" data-scroll-reveal>04 / PROJECT INDEX</span>
        <div>
          {projects.map((project, index) => (
            <motion.button
              type="button"
              key={project.id}
              className={visibleProject.id === project.id ? "active" : ""}
              onMouseEnter={() => selectProjectOnHover(index)}
              onFocus={() => selectProjectOnHover(index)}
              onClick={() => selectProjectAndView(index)}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <span>0{index + 1}</span><strong>{project.title}</strong><small><i />{project.status}</small><motion.span className="project-index-arrow" variants={{ rest: { x: 0, rotate: 0 }, hover: { x: 5, rotate: -35 } }}><ArrowUpRight size={20} /></motion.span><StarBorder />
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  );
}
