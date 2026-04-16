import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        {/* CONTENT */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p>
            <FaEnvelope /> preethiseela8@gmail.com
          </p>

          <div className="contact-links">

            <a href="https://github.com/seelapreethi" target="_blank">
              <FaGithub /> GitHub
            </a>

            <a href="https://www.linkedin.com/in/preethiseela" target="_blank">
              <FaLinkedin /> LinkedIn
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}