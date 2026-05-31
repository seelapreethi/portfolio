import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import AnimatedCounter from "./motion/AnimatedCounter.jsx";

export default function Stats() {
  const reduceMotion = useReducedMotion();
  const stats = [
    { label: "DSA problems", value: "700+", numeric: true },
    { label: "Projects", value: "5+", numeric: true },
    { label: "Technologies", value: "6+", numeric: true },
    { label: "CGPA", value: "9.6", numeric: true },
  ];

  return (
    <section id="profile" aria-labelledby="profile-heading">
      <div className="section-container">
        <SectionHeader
          kicker="At a glance"
          title="Profile overview"
          id="profile-heading"
          variantIndex={2}
        />

        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-pill stat-pill--premium"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
            >
              <span className="stat-value">
                {s.numeric ? (
                  <AnimatedCounter value={s.value} />
                ) : (
                  s.value
                )}
              </span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
