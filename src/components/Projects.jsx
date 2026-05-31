import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import SectionHeader from "./SectionHeader.jsx";
import PageCarousel from "./motion/PageCarousel.jsx";
import ScrollReveal from "./motion/ScrollReveal.jsx";
import Magnetic from "./motion/Magnetic.jsx";
import GradientBorder from "./motion/GradientBorder.jsx";
import { projects } from "../data/projects.js";

function ProjectCard({ project, onImageClick, reduceMotion }) {
  return (
    <GradientBorder className="project-card-border">
      <motion.article
        className="card project-card project-card--featured project-card--premium"
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -10,
                boxShadow: "0 18px 40px rgba(114, 102, 160, 0.12), 0 8px 24px rgba(0,0,0,0.35)",
              }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="project-card-shine"
          aria-hidden="true"
          initial={{ x: "-120%" }}
          whileHover={reduceMotion ? undefined : { x: "120%" }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        />

        {project.images?.length ? (
          <div className="project-images project-images--featured project-images--zoom">
            {project.images.slice(0, 1).map((img) => (
              <motion.div key={img} className="project-img-wrap" whileHover={reduceMotion ? undefined : { scale: 1.04 }}>
                <img
                  src={img}
                  alt=""
                  onClick={() => onImageClick(img)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onImageClick(img);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="project-thumb-placeholder project-thumb-placeholder--empty" aria-hidden="true" />
        )}

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        <div className="tech" aria-label="Tech stack">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag tech-tag--animated">
              {t}
            </span>
          ))}
        </div>

        <div className={`status ${project.status.replace(/\s/g, "-").toLowerCase()}`}>
          {project.status}
        </div>

        <div className="project-links">
          <Magnetic strength={0.3}>
            <a
              className="link-btn link-btn--premium"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden /> GitHub
            </a>
          </Magnetic>
          {project.live ? (
            <Magnetic strength={0.3}>
              <a
                className="link-btn link-btn--premium"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiArrowTopRightOnSquare aria-hidden /> Live demo
              </a>
            </Magnetic>
          ) : (
            <span className="link-btn link-btn--muted" aria-disabled="true">
              <HiArrowTopRightOnSquare aria-hidden /> Demo soon
            </span>
          )}
        </div>
      </motion.article>
    </GradientBorder>
  );
}

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-featured" aria-labelledby="projects-heading">
      <div className="section-container">
        <ScrollReveal variantIndex={1}>
          <SectionHeader
            kicker="Selected work"
            title="Projects"
            id="projects-heading"
            variantIndex={1}
          />
        </ScrollReveal>

        <ScrollReveal variantIndex={4}>
          <PageCarousel
            items={projects}
            ariaLabel="Projects"
            desktop={3}
            tablet={2}
            mobile={1}
            renderItem={(project) => (
              <ProjectCard
                project={project}
                onImageClick={setSelectedImg}
                reduceMotion={reduceMotion}
              />
            )}
          />
        </ScrollReveal>
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
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
