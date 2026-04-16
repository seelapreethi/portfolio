import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* CARD */}
        <motion.div
          className="card experience-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3>MERN Stack Developer Intern</h3>
          <p className="exp-company">Aim Technologies | May – July 2025</p>

          <ul>
            <li>Built 2 full-stack MERN applications</li>
            <li>Developed REST APIs with authentication</li>
            <li>Integrated MongoDB Atlas</li>
            <li>Worked in Agile environment</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}