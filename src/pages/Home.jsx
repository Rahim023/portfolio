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

  return (
    <div
      className="container-fluid py-5 home-bg"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row g-4 align-items-stretch">
        {/* Left column - About */}
        <div className="col-12 col-lg-5 d-flex">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-4 hero-card w-100 d-flex flex-column justify-content-between"
          >
            <div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="icon-circle bg-primary text-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm">
                  <FaStar size={18} />
                </div>
                <div>
                  <h1 className="section-heading mb-0 fw-bold text-dark">
                    Hi, I’m Abdul Rahim
                  </h1>
                  <p className="text-muted small mb-2">
                    MERN Stack Developer • Data Analyst • Artist
                  </p>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-secondary"
              >
                I’m a MERN Stack developer based in Toronto, skilled in
                creating responsive, dynamic websites with experience in SQL
                (MySQL), NoSQL (MongoDB), and cloud platforms like AWS.
              </motion.p>

              <div className="mt-3">
                <h6 className="mb-2 text-primary fw-semibold">Core Skills</h6>
                <div className="d-flex flex-wrap gap-2">
                  {[
                    "React",
                    "Bootstrap",
                    "AWS",
                    "JavaScript",
                    "MongoDB",
                    "Flutter",
                    ".NET",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="badge bg-light text-dark border border-secondary px-3 py-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 d-flex gap-2 flex-wrap">
                <a className="btn btn-royal" href="/projects">
                  See Projects
                </a>
                <a className="btn btn-outline-primary" href="/contact">
                  Contact
                </a>
              </div>

              <div className="mt-4">
                <h6 className="mb-2 text-primary fw-semibold">
                  Hobbies & Interests
                </h6>
                <div className="d-flex gap-2 flex-wrap">
                  <div className="card p-2 card-portrait border-0 shadow-sm">
                    <div className="d-flex align-items-center gap-2">
                      <FaPalette /> <small>Portraits & Art</small>
                    </div>
                  </div>
                  <div className="card p-2 card-portrait border-0 shadow-sm">
                    <div className="d-flex align-items-center gap-2">
                      <FaCode /> <small>Space & Coding</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column - Photos & Map */}
        <div className="col-12 col-lg-7 d-flex">
          <div className="card p-3 hero-card w-100 d-flex flex-column justify-content-between">
            <div>
              <h5 className="mb-3 section-heading text-primary fw-bold">
                Featured Photos
              </h5>
              <PhotoCarousel images={photos} interval={4500} />

              <div className="row mt-4 g-3">
                {[
                  {
                    img: "/images/mypic1.png",
                    caption: "Portrait Series",
                  },
                  {
                    img: "/images/Screenshot 2025-10-12 153637.png",
                    caption: "Embroidery Work",
                  },
                  {
                    img: "/images/Screenshot 2025-10-15 100129.png",
                    caption: "Custom Designs",
                  },
                ].map((item, index) => (
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    key={index}
                    className="col-6 col-md-4"
                  >
                    <div className="card card-portrait shadow-sm overflow-hidden rounded-4 border-0">
                      <img
                        src={item.img}
                        alt={item.caption}
                        className="img-fluid"
                      />
                      <div className="p-2">
                        <small className="text-muted">{item.caption}</small>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 d-flex gap-2 flex-wrap">
            
                <a
                  className="btn btn-outline-secondary"
                  href="/Abdul_Rahim_Resume_Final_feedback.docx"
                  download
                >
                  Resume
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-4">
              <h6 className="mb-2 d-flex align-items-center gap-2 text-primary fw-semibold">
                <FaMapMarkerAlt />
                My Location
              </h6>
              <div className="map-container rounded-4 overflow-hidden border border-secondary shadow-sm">
                <iframe
                  title="My Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.493033953357!2d-79.3831846845008!3d43.6532267791218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d77a77fbe9%3A0x7e3bdebcd9af11cb!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1672480000000!5m2!1sen!2sca"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
