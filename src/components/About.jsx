import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="section-container">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Card Container */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Passionate Computer Science student with strong skills in Data Structures,
            Full Stack Development (MERN), and AI/ML. I enjoy building scalable
            applications and intelligent systems that solve real-world problems.
          </motion.p>

          {/* Extra line (adds depth) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Currently focusing on improving problem-solving skills, backend
            architecture, and deploying production-ready applications.
          </motion.p>

        </motion.div>

      </div>
    </section>
  );
}