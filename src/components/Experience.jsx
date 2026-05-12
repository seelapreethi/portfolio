import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";

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
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="section-container">
        <SectionHeader kicker="Work" title="Experience" id="experience-heading" />

        <div className="experience-list">
          {roles.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.title}`}
              className="experience-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="timeline-rail" aria-hidden="true" />
              <div className="experience-body">
                {job.internship ? (
                  <div className="internship-badge">Internship</div>
                ) : null}
                <h3 className="exp-role">{job.title}</h3>
                <p className="exp-company">
                  <strong>{job.company}</strong> · {job.duration}
                </p>
                <ul className="exp-list">
                  {job.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="exp-tech-label">Technologies</div>
                <div className="tech-pills">
                  {job.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
