import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaCertificate, FaBrain } from "react-icons/fa";

const achievements = [
  {
    text: "500+ problems on CodeChef (Diamond Badge)",
    icon: <FaTrophy />
  },
  {
    text: "200+ problems on LeetCode",
    icon: <FaCode />
  },
  {
    text: "JLPT N5 Qualified",
    icon: <FaCertificate />
  },
  {
    text: "NPTEL IoT (88% Elite)",
    icon: <FaBrain />
  }
];

export default function Achievements() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section>
      <div className="section-container">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>

        {/* GRID */}
        <motion.div
          className="achievements-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
        >

          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className="achievement-card"
              variants={item}
              whileHover={{ scale: 1.05, y: -6 }}
            >
              <div className="achievement-icon">
                {a.icon}
              </div>

              <p>{a.text}</p>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}