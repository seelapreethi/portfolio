import { motion, useReducedMotion } from "framer-motion";
import { FaCode, FaTrophy, FaCertificate, FaBrain } from "react-icons/fa";
import SectionHeader from "./SectionHeader.jsx";

const achievements = [
  {
    text: "500+ problems on CodeChef (Diamond badge)",
    icon: FaTrophy,
    cert: false,
  },
  {
    text: "200+ problems on LeetCode",
    icon: FaCode,
    cert: false,
  },
  {
    text: "JLPT N5 Certified",
    icon: FaCertificate,
    cert: true,
    badge: "Certification",
  },
  {
    text: "NPTEL IoT (88%, Elite track)",
    icon: FaBrain,
    cert: true,
    badge: "Certification",
  },
];

export default function Achievements() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="achievements" aria-labelledby="achievements-heading">
      <div className="section-container">
        <SectionHeader
          kicker="Highlights"
          title="Achievements"
          id="achievements-heading"
        />

        <motion.div
          className="achievements-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <motion.article
                key={a.text}
                className={`achievement-card${a.cert ? " achievement-card--cert" : ""}`}
                variants={item}
                whileHover={reduceMotion ? undefined : { y: -3 }}
              >
                {a.cert ? (
                  <span className="achievement-badge-label">{a.badge}</span>
                ) : null}
                <div className="achievement-icon" aria-hidden="true">
                  <Icon />
                </div>
                <p>{a.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
