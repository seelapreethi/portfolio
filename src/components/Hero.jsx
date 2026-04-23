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
  className="hero-name"
  initial={{ opacity: 0, y: 20, scale: 0.98 }}
  animate={{
    opacity: 1,
    y: 0,
    scale: [1, 1.02, 1], // subtle breathing zoom
  }}
  transition={{
    opacity: { duration: 0.6 },
    y: { duration: 0.6 },
    scale: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
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

          {/* BUTTONS (🔥 upgraded interactions) */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="/resume.pdf"
              className="primary-btn"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 20px rgba(56,189,248,0.5)"
              }}
              whileTap={{ scale: 0.92 }}
            >
              <FaDownload /> Resume
            </motion.a>

            <motion.a
              href="#projects"
              className="secondary-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* ICONS (🔥 floating + hover glow) */}
          <motion.div
            className="hero-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: <FaGithub />, link: "https://github.com/seelapreethi" },
              { icon: <FaLinkedin />, link: "https://linkedin.com/in/preethiseela" },
              { icon: <SiLeetcode />, link: "https://leetcode.com/u/preethiseela8/" },
              { icon: <SiHackerrank />, link: "https://www.hackerrank.com/profile/preethi_08" },
              { icon: <SiCodechef />, link: "https://www.codechef.com/users/seelapreethi08" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{
                  y: -6,
                  scale: 1.2,
                  color: "#38bdf8"
                }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* RIGHT (🔥 floating glow animation) */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="glow-circle"></div>
        </motion.div>

      </div>
    </section>
  );
}