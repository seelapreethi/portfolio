import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import SectionHeader from "./SectionHeader.jsx";

const projects = [
  {
    title: "Semantic search engine",
    desc: "Transformer-backed semantic search over documents with a FastAPI service and a focused UI for exploring results.",
    tech: ["Python", "FastAPI", "NLP"],
    link: "https://github.com/seelapreethi/Semantic_Document_Search_Engine",
    status: "Completed",
    live: "https://semantic-search-engine-ui-6h2yzdz2azddhfuthjaa9z.streamlit.app/",
    images: [
      "/images/semantic1.png",
      "/images/semantic2.png",
      "/images/semantic3.png",
    ],
  },
  {
    title: "Sentiment analysis platform",
    desc: "Real-time sentiment pipeline with FastAPI and WebSockets for streaming updates to connected clients.",
    tech: ["FastAPI", "WebSockets"],
    link: "https://github.com/seelapreethi/Sentiment_Platform_",
    status: "Improving UI",
    live: "",
  },
  {
    title: "Study planner",
    desc: "Full-stack MERN application with CRUD flows, auth-ready structure, and a clear study workflow for coursework.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/seelapreethi/studyplanner-1",
    status: "Completed",
    live: "",
  },
  {
    title: "Image classification system",
    desc: "Transfer learning with ResNet50 for custom image classification, training loop, and evaluation metrics.",
    tech: ["TensorFlow", "Deep learning"],
    link: "https://github.com/seelapreethi/Custom_Image_Classification",
    status: "Improving UI",
    live: "",
  },
  {
    title: "Roadmap generator",
    desc: "Personalized learning roadmaps generated from goals and constraints, built on the MERN stack.",
    tech: ["MERN"],
    link: "https://github.com/seelapreethi/personalized-roadmap-generator",
    status: "In Progress",
    live: "",
  },
];

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeader
          kicker="Selected work"
          title="Projects"
          id="projects-heading"
        />

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {projects.map((p) => (
            <motion.article
              className="card project-card"
              key={p.title}
              variants={cardVariant}
              whileHover={reduceMotion ? undefined : { y: -5 }}
            >
              {p.images?.length ? (
                <div className="project-images">
                  {p.images.map((img) => (
                    <img
                      key={img}
                      src={img}
                      alt=""
                      onClick={() => setSelectedImg(img)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedImg(img);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    />
                  ))}
                </div>
              ) : null}

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="tech" aria-label="Tech stack">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div
                className={`status ${p.status.replace(/\s/g, "-").toLowerCase()}`}
              >
                {p.status}
              </div>

              <div className="project-links">
                <a
                  className="link-btn"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub aria-hidden /> GitHub
                </a>
                {p.live ? (
                  <a
                    className="link-btn"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiArrowTopRightOnSquare aria-hidden /> Live demo
                  </a>
                ) : (
                  <span className="link-btn link-btn--muted" aria-disabled="true">
                    <HiArrowTopRightOnSquare aria-hidden /> Demo soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImg ? (
          <motion.div
            className="img-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged project image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setSelectedImg(null);
            }}
            tabIndex={-1}
          >
            <motion.img
              src={selectedImg}
              alt="Project screenshot enlarged"
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
