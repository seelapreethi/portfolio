import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Semantic Search Engine",
    desc: "NLP-based search using transformers",
    tech: ["Python", "FastAPI", "NLP"],
    link: "https://github.com/seelapreethi/Semantic_Document_Search_Engine",
    status: "Completed",
    live: "https://semantic-search-engine-ui-6h2yzdz2azddhfuthjaa9z.streamlit.app/",
    images: [
      "/images/semantic1.png",
      "/images/semantic2.png",
      "/images/semantic3.png"
    ]
  },
  {
    title: "Study Planner",
    desc: "Full-stack MERN app with CRUD operations",
    tech: ["React", "Node", "MongoDB"],
    link: "https://github.com/seelapreethi/studyplanner-1",
    status: "Completed",
    live: ""
  },
  {
    title: "Sentiment Analysis Platform",
    desc: "Real-time sentiment analysis system",
    tech: ["FastAPI", "WebSockets"],
    link: "https://github.com/seelapreethi/Sentiment_Platform_",
    status: "Improving UI",
    live: ""
  },
  {
    title: "Image Classification System",
    desc: "ResNet50 based image classification using transfer learning",
    tech: ["TensorFlow", "Deep Learning"],
    link: "https://github.com/seelapreethi/Custom_Image_Classification",
    status: "Improving UI",
    live: ""
  },
  {
    title: "Roadmap Generator",
    desc: "Generates personalized learning paths dynamically",
    tech: ["MERN"],
    link: "https://github.com/seelapreethi/personalized-roadmap-generator",
    status: "In Progress",
    live: ""
  }
];

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects">
      <div className="section-container">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
        >

          {projects.map((p, i) => (
            <motion.div
              className="card project-card"
              key={i}
              variants={cardVariant}
              whileHover={{ scale: 1.03, y: -6 }}
            >

              {/* IMAGE GALLERY */}
              {p.images && (
                <div className="project-images">
                  {p.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={p.title}
                      onClick={() => setSelectedImg(img)}
                    />
                  ))}
                </div>
              )}

              {/* TITLE */}
              <h3 className="project-title">{p.title}</h3>

              {/* DESC */}
              <p className="project-desc">{p.desc}</p>

              {/* TECH */}
              <div className="tech">
                {p.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              {/* STATUS */}
              <div className={`status ${p.status.replace(/\s/g, "-").toLowerCase()}`}>
                {p.status}
              </div>

              {/* LINKS */}
              <div className="project-links">
                <a href={p.link} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>

      {/* 🔥 IMAGE MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="img-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="preview"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}