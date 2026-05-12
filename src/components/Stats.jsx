import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";

export default function Stats() {
  const reduceMotion = useReducedMotion();
  const stats = [
    { label: "DSA problems", value: "700+" },
    { label: "Projects", value: "5+" },
    { label: "Technologies", value: "6+" },
    { label: "CGPA", value: "9.6" },
  ];

  return (
    <section id="profile" aria-labelledby="profile-heading">
      <div className="section-container">
        <SectionHeader
          kicker="At a glance"
          title="Profile overview"
          id="profile-heading"
        />

        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-pill"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
            >
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
