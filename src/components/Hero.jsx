import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="section-container hero-content">

        {/* LEFT */}
        <div className="hero-text">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Preethi Seela
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Aspiring Software Engineer <span>| MERN | AI/ML</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Passionate Computer Science student building scalable full-stack
            applications and AI-powered systems.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="/resume.pdf" className="primary-btn">
              <FaDownload /> Resume
            </a>

            <a href="#projects" className="secondary-btn">
              View Projects
            </a>
          </motion.div>

          {/* ICONS */}
          <motion.div
            className="hero-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/seelapreethi" target="_blank">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/preethiseela" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://leetcode.com/u/preethiseela8/" target="_blank">
              <SiLeetcode />
            </a>

            <a href="https://www.hackerrank.com/profile/preethi_08" target="_blank">
              <SiHackerrank />
            </a>

            <a href="https://www.codechef.com/users/seelapreethi08" target="_blank">
              <SiCodechef />
            </a>
          </motion.div>

        </div>

        {/* RIGHT */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="glow-circle"></div>
        </motion.div>

      </div>
    </section>
  );
}