import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

const SOCIAL = [
  {
    icon: FaGithub,
    href: "https://github.com/seelapreethi",
    label: "GitHub profile",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/preethiseela",
    label: "LinkedIn profile",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/preethiseela8/",
    label: "LeetCode profile",
  },
  {
    icon: SiHackerrank,
    href: "https://www.hackerrank.com/profile/preethi_08",
    label: "HackerRank profile",
  },
  {
    icon: SiCodechef,
    href: "https://www.codechef.com/users/seelapreethi08",
    label: "CodeChef profile",
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="section-container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span aria-hidden="true" />
              Full-stack · AI/ML · Problem solving
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="hero-name"
              initial={{ opacity: 0, y: 18 }}
              animate={{
                opacity: 1,
                y: 0,
                ...(reduceMotion
                  ? {}
                  : { scale: [1, 1.01, 1] }),
              }}
              transition={{
                opacity: { duration: 0.55 },
                y: { duration: 0.55 },
                scale: reduceMotion
                  ? undefined
                  : { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              Preethi Seela
            </motion.h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              Aspiring software engineer · <span>MERN</span> · <span>AI/ML</span>
            </motion.p>

            <motion.p
              className="hero-lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.5 }}
            >
              I design and build full-stack web applications from frontend to backend,
              with a strong focus on clean architecture, performance, and user experience.
              I am especially interested in AI-powered applications, machine learning systems,
              and solving real-world problems through scalable software and continuous learning.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.45 }}
            >
              <motion.a
                href="/resume.pdf"
                className="primary-btn"
                download
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                <FaDownload aria-hidden /> Resume
              </motion.a>

              <motion.a
                href="#projects"
                className="secondary-btn"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                View projects
              </motion.a>

              <motion.a
                href="#contact"
                className="secondary-btn hero-btn-ghost"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                Contact
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-icons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.45 }}
            >
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                >
                  <Icon aria-hidden />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{
              opacity: 1,
              scale: 1,
              ...(reduceMotion ? {} : { y: [0, -8, 0] }),
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.15 },
              scale: { duration: 0.6, delay: 0.15 },
              y: reduceMotion
                ? undefined
                : { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="glow-circle" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
