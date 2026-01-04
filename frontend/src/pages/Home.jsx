import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import PhotoGrid from "../components/PhotoGrid";
import LogoLoop from "../components/logoloop";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaBolt,
  FaDatabase,
  FaCloud,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaSearch,
  FaCode,
  FaRocket,
  FaCheck,
  FaStar,
} from "react-icons/fa";

export default function Home() {
  const [stats] = useState({
    projects: 8,
    commits: 450,
    lines: "50k+",
    apis: 12,
  });

  const photos = useMemo(
    () => [
      "/images/Screenshot 2025-10-15 100129.png",
      "/images/Screenshot 2025-10-12 153637.png",
      "/images/mypic1.png",
      "/images/WhatsApp Image 2025-12-24 at 7.39.53 PM.png",
      "/images/rahim2.png",
      "/images/rahim3.png",
    ],
    []
  );

  const skills = useMemo(
    () => [
      "React",
      "Node/Express",
      "MongoDB",
      "MySQL/SQL",
      "JWT Auth",
      "AWS S3",
      "REST APIs",
      "Bootstrap",
      "Framer Motion",
      "Three.js",
    ],
    []
  );

  const highlights = useMemo(
    () => [
      {
        icon: <FaBolt />,
        title: "Fast UI + smooth motion",
        desc: "Modern layout, micro-interactions, and premium transitions.",
      },
      {
        icon: <FaDatabase />,
        title: "Real backend + DB flows",
        desc: "JWT auth, protected routes, CRUD, roles, and data modeling.",
      },
      {
        icon: <FaCloud />,
        title: "Cloud-ready builds",
        desc: "S3 assets, deploy-friendly setups, and scalable patterns.",
      },
    ],
    []
  );

  // Skills search
  const [skillQuery, setSkillQuery] = useState("");
  const q = skillQuery.trim().toLowerCase();
  const filteredSkills = useMemo(() => {
    if (!q) return skills;
    return skills.filter((s) => s.toLowerCase().includes(q));
  }, [skills, q]);

  return (
    <div className="rt-home">
      {/* Background */}
      <div className="rt-bg">
        <div className="rt-radial r1" />
        <div className="rt-radial r2" />
        <div className="rt-noise" />
      </div>

      {/* Centered shell */}
      <div className="rt-shell">
        {/* HOME TOP BAR */}
        <div className="rt-homebar">
          <div className="rt-homebar-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rt-availability"
            >
              <span className="rt-dot" />
              Available for opportunities
            </motion.div>

            <div className="rt-skillSearch">
              <FaSearch className="rt-sicon" />
              <input
                value={skillQuery}
                onChange={(e) => setSkillQuery(e.target.value)}
                placeholder="Search skills (React, JWT, AWS, SQL...)"
                aria-label="Search skills"
              />
              {skillQuery ? (
                <button
                  type="button"
                  className="rt-sclear"
                  onClick={() => setSkillQuery("")}
                >
                  Clear
                </button>
              ) : null}
            </div>
          </div>

          <div className="rt-homebar-right">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rt-iconbtn"
              href="https://github.com/Rahim023"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rt-iconbtn"
              href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>

        {/* ROW 1: Full width main info */}
        <div className="row g-4 align-items-stretch">
          <div className="col-12 d-flex">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="rt-card rt-cardPad w-100 d-flex flex-column"
            >
              <div>
                <div className="rt-kicker">Full-Stack MERN • AWS • SQL/NoSQL</div>

                <h1 className="rt-title mt-2">
                  Abdul Rahim
                  <span className="rt-glow"> builds premium web experiences.</span>
                </h1>

                <p className="rt-lead mt-3">
                  I build fast, modern web apps with secure authentication, clean UI, and real
                  backend/database flows — designed to feel premium and work reliably.
                </p>

                {/* STATS GRID */}
                <div className="rt-statsGrid mt-4">
                  {[
                    { icon: <FaCode />, value: stats.lines, label: "Lines of Code" },
                    { icon: <FaCheckCircle />, value: stats.projects, label: "Projects Built" },
                    { icon: <FaRocket />, value: stats.apis, label: "APIs Created" },
                    { icon: <FaStar />, value: stats.commits, label: "Git Commits" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="rt-stat-card"
                    >
                      <div className="rt-stat-icon">{stat.icon}</div>
                      <div className="rt-stat-kpi">{stat.value}</div>
                      <div className="rt-stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/projects" className="rt-btn rt-btn-primary">
                      See Projects <FaArrowRight className="ms-2" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/contact" className="rt-btn rt-btn-ghost">
                      Let's Talk
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                    <a
                      className="rt-btn rt-btn-soft"
                      href="/Abdul_Rahim_Resume_Final_feedback.docx"
                      download
                    >
                      Download Resume
                    </a>
                  </motion.div>
                </div>

                {/* Skills chips */}
                <div className="rt-marquee mt-4">
                  <div className="rt-marquee-track" style={{ animation: "none" }}>
                    {(filteredSkills.length ? filteredSkills : ["No match"]).map((s, i) => (
                      <motion.span
                        key={i}
                        className="rt-chip"
                        whileHover={{ scale: 1.05 }}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <div className="rt-divider" />
                <div className="rt-section-title mb-2">Focus areas</div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <motion.div
                      className="rt-miniCard h-100"
                      whileHover={{ y: -4 }}
                    >
                      <div className="rt-miniTag">Current goal</div>
                      <div className="rt-miniTitle">Junior / Intern Role</div>
                      <div className="rt-miniMeta">
                        Frontend + Backend • Real-world builds
                      </div>
                    </motion.div>
                  </div>

                  <div className="col-12 col-md-6">
                    <motion.div
                      className="rt-miniCard h-100"
                      whileHover={{ y: -4 }}
                    >
                      <div className="rt-miniTag">Strength</div>
                      <div className="rt-miniTitle">Clean UI + Auth</div>
                      <div className="rt-miniMeta">
                        JWT • Protected routes • CRUD
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ROW 2: Dynamic Skills Loop */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <LogoLoop skills={skills} />
        </motion.div>

        {/* ROW 3: Photos Grid */}
        <div className="row g-4 mt-4 align-items-stretch">
          <div className="col-12 d-flex">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rt-card rt-cardPad w-100"
            >
              <div className="rt-section-title">Featured Work</div>
              <div className="rt-section-sub">Portfolio & Projects</div>

              <div className="rt-photoGridWrap mt-3">
                <PhotoGrid photos={photos} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ROW 4: Highlights Grid */}
        <div className="row g-4 mt-4 align-items-stretch">
          <div className="col-12 d-flex">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rt-card rt-cardPad w-100"
            >
              <div className="rt-section-title">Why hire me?</div>
              <div className="rt-section-sub">
                Proof points recruiters care about.
              </div>

              <div className="row g-3 mt-3">
                {[
                  {
                    icon: <FaBolt />,
                    title: "Fast UI + smooth motion",
                    desc: "Modern layout, micro-interactions, and premium transitions.",
                  },
                  {
                    icon: <FaDatabase />,
                    title: "Real backend + DB flows",
                    desc: "JWT auth, protected routes, CRUD, roles, and data modeling.",
                  },
                  {
                    icon: <FaCloud />,
                    title: "Cloud-ready builds",
                    desc: "S3 assets, deploy-friendly setups, and scalable patterns.",
                  },
                ].map((h, i) => (
                  <div className="col-12 col-md-4" key={i}>
                    <motion.div
                      className="rt-miniCard h-100 rt-miniHover"
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    >
                      <div className="rt-lineIcon mb-3">{h.icon}</div>
                      <div className="rt-miniTitle">{h.title}</div>
                      <div className="rt-miniMeta">{h.desc}</div>
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="rt-divider" />

              <div className="rt-proofRow">
                <motion.div className="rt-proofPill" whileHover={{ scale: 1.02 }}>
                  <FaCheck className="me-2" /> Clean component structure
                </motion.div>
                <motion.div className="rt-proofPill" whileHover={{ scale: 1.02 }}>
                  <FaCheckCircle className="me-2" /> JWT + protected routes + roles
                </motion.div>
                <motion.div className="rt-proofPill" whileHover={{ scale: 1.02 }}>
                  <FaDatabase className="me-2" /> APIs + DB workflows (SQL/NoSQL)
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ROW 5: Map Section */}
        <div className="row g-4 mt-4 align-items-stretch">
          <div className="col-12 d-flex">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rt-card rt-cardPad w-100"
            >
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div className="rt-section-title">
                  <FaMapMarkerAlt className="me-2" />
                  Toronto, ON
                </div>
                <span className="rt-mutedSmall">Open to remote</span>
              </div>

              <div className="rt-mapWrap mt-3">
                <iframe
                  title="Toronto"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.493033953357!2d-79.3831846845008!3d43.6532267791218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d77a77fbe9%3A0x7e3bdebcd9af11cb!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1672480000000!5m2!1sen!2sca"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
