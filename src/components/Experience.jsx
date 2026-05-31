import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import ScrollReveal from "./motion/ScrollReveal.jsx";

const roles = [
  {
    title: "MERN stack developer intern",
    company: "Aim Technologies",
    duration: "May 2025 – July 2025",
    internship: true,
    highlights: [
      "Delivered two full-stack MERN applications with authentication, routing, and role-aware views.",
      "Implemented REST APIs with secure session handling and validation on the server.",
      "Integrated MongoDB Atlas, indexing, and pragmatic schema design for production data.",
      "Collaborated in an Agile cadence with code review, demos, and incremental releases.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "REST", "Git"],
  },
];

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="section-container">
        <SectionHeader
          kicker="Work"
          title="Experience"
          id="experience-heading"
          variantIndex={4}
        />

        <ScrollReveal variantIndex={1}>
          <div className="experience-timeline">
            <div className="experience-timeline-line" aria-hidden="true">
              <motion.div
                className="experience-timeline-progress"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: reduceMotion ? 0.01 : 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="experience-list">
              {roles.map((job, index) => (
                <motion.div
                  key={`${job.company}-${job.title}`}
                  className="experience-item"
                  initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <div className="timeline-node" aria-hidden="true">
                    <motion.span
                      className="timeline-node-dot"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 18 }}
                    />
                  </div>

                  <motion.div
                    className="experience-body experience-body--premium"
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                  >
                    {job.internship ? (
                      <div className="internship-badge internship-badge--pulse">
                        <span className="internship-badge-dot" aria-hidden="true" />
                        Internship
                      </div>
                    ) : null}
                    <h3 className="exp-role">{job.title}</h3>
                    <p className="exp-company">
                      <strong>{job.company}</strong> · {job.duration}
                    </p>
                    <ul className="exp-list">
                      {job.highlights.map((line, i) => (
                        <motion.li
                          key={line}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                        >
                          {line}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="exp-tech-label">Technologies</div>
                    <div className="tech-pills">
                      {job.tech.map((t) => (
                        <span key={t} className="tech-pill tech-pill--glow">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
