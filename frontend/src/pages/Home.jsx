import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PhotoCarousel from "../components/PhotoCarousel";
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
} from "react-icons/fa";

export default function Home() {
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

  const quickProjects = useMemo(
    () => [
      { tag: "E-Commerce", title: "Royal Threads", meta: "MERN • S3 • Auth" },
      { tag: "Forum", title: "Discussion Board", meta: "MERN • JWT • CRUD" },
      { tag: "UI", title: "Advanced Portfolio", meta: "React • Motion • Clean UX" },
    ],
    []
  );

  // ✅ HR-friendly skills search
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

      {/* Centered shell (this sits below your separate NavBar) */}
      <div className="rt-shell">
        {/* ✅ HOME TOP BAR (not navbar) */}
        <div className="rt-homebar">
          <div className="rt-homebar-left">
            <div className="rt-availability">
              <span className="rt-dot" />
              Available for opportunities
            </div>

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
            <a
              className="rt-iconbtn"
              href="https://github.com/Rahim023"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="rt-iconbtn"
              href="https://www.linkedin.com/in/abdul-rahim-4806a6283/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* ✅ ROW 1: Left main info + Right photos/projects */}
        <div className="row g-4 align-items-stretch">
          {/* LEFT MAIN CARD */}
          <div className="col-12 col-lg-7 d-flex">
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
                  I build fast, modern web apps with secure authentication,
                  clean UI, and real backend/database flows — designed to feel
                  premium and work reliably.
                </p>

                <div className="row g-3 mt-2">
                  {[
                    { kpi: "MERN", label: "Full-stack builds" },
                    { kpi: "JWT", label: "Auth + roles" },
                    { kpi: "AWS", label: "S3 + deploy ready" },
                    { kpi: "UI", label: "Modern motion" },
                  ].map((s, i) => (
                    <div className="col-6" key={i}>
                      <div className="rt-stat">
                        <div className="rt-stat-kpi">{s.kpi}</div>
                        <div className="rt-stat-label">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  <Link to="/projects" className="rt-btn rt-btn-primary">
                    See Projects <FaArrowRight className="ms-2" />
                  </Link>
                  <Link to="/contact" className="rt-btn rt-btn-ghost">
                    Let’s Talk
                  </Link>
                  <a
                    className="rt-btn rt-btn-soft"
                    href="/Abdul_Rahim_Resume_Final_feedback.docx"
                    download
                  >
                    Download Resume
                  </a>
                </div>

                {/* ✅ Skills chips (respond to search) */}
                <div className="rt-marquee mt-4">
                  <div className="rt-marquee-track" style={{ animation: "none" }}>
                    {(filteredSkills.length ? filteredSkills : ["No match"]).map(
                      (s, i) => (
                        <span key={i} className="rt-chip">
                          {s}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <div className="rt-divider" />
                <div className="rt-section-title mb-2">Focus areas</div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="rt-miniCard h-100">
                      <div className="rt-miniTag">Current goal</div>
                      <div className="rt-miniTitle">Junior / Intern Role</div>
                      <div className="rt-miniMeta">
                        Frontend + Backend • Real-world builds
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="rt-miniCard h-100">
                      <div className="rt-miniTag">Strength</div>
                      <div className="rt-miniTitle">Clean UI + Auth</div>
                      <div className="rt-miniMeta">
                        JWT • Protected routes • CRUD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT PHOTOS/PROJECTS CARD */}
          <div className="col-12 col-lg-5 d-flex">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rt-card rt-cardPadSlim w-100 d-flex flex-column"
            >
              <div className="rt-featureHeader">
                <div>
                  <div className="rt-section-title">Featured Work</div>
                  <div className="rt-section-sub">UI • Backend • Database</div>
                </div>
                <div className="rt-pill">
                  <FaCheckCircle className="me-2" />
                  Production mindset
                </div>
              </div>

              <div className="rt-featureFrame mt-3">
                <PhotoCarousel images={photos} interval={4200} />
              </div>

              <div className="rt-divider" />

              <div className="row g-3">
                {quickProjects.map((p, i) => (
                  <div className="col-12" key={i}>
                    <motion.div whileHover={{ y: -5 }} className="rt-miniCard">
                      <div className="rt-miniTag">{p.tag}</div>
                      <div className="rt-miniTitle">{p.title}</div>
                      <div className="rt-miniMeta">{p.meta}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ✅ ROW 2: Left extra info + Right small map */}
        <div className="row g-4 mt-1 align-items-stretch">
          {/* Left: extra info with animation */}
          <div className="col-12 col-lg-8 d-flex">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rt-card rt-cardPad w-100"
            >
              <div className="rt-section-title">More about my work</div>
              <div className="rt-section-sub">
                Proof points recruiters can scan fast.
              </div>

              <div className="row g-3 mt-3">
                {highlights.map((h, i) => (
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
                  ✅ Clean component structure
                </motion.div>
                <motion.div className="rt-proofPill" whileHover={{ scale: 1.02 }}>
                  ✅ JWT + protected routes + roles
                </motion.div>
                <motion.div className="rt-proofPill" whileHover={{ scale: 1.02 }}>
                  ✅ APIs + DB workflows (SQL/NoSQL)
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right: small map card */}
          <div className="col-12 col-lg-4 d-flex">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="rt-card rt-cardPadSlim w-100"
            >
              <div className="d-flex align-items-center justify-content-between">
                <div className="rt-section-title">
                  <FaMapMarkerAlt className="me-2" />
                  Toronto, ON
                </div>
                <span className="rt-mutedSmall">Open to remote</span>
              </div>

              <div className="rt-mapWrap mt-2">
                <iframe
                  title="Toronto"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.493033953357!2d-79.3831846845008!3d43.6532267791218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d77a77fbe9%3A0x7e3bdebcd9af11cb!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1672480000000!5m2!1sen!2sca"
                  width="100%"
                  height="220"
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
