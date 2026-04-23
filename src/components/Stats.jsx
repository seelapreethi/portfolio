import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "DSA Problems", value: "700+" },
    { label: "Projects", value: "4+" },
    { label: "Technologies", value: "6+" },
    { label: "CGPA", value: "9.6" }
  ];

  return (
    <section>
      <div className="section-container">
        <h2>Profile Overview</h2>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="stat-pill"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
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