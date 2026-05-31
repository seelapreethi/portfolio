import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useRef } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";
import TypingText from "./motion/TypingText.jsx";
import Magnetic from "./motion/Magnetic.jsx";

const PROFILE_IMAGE = "/images/profile.jpg";

const SOCIAL = [
  { icon: FaGithub, href: "https://github.com/seelapreethi", label: "GitHub profile" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/preethiseela", label: "LinkedIn profile" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/preethiseela8/", label: "LeetCode profile" },
  { icon: SiHackerrank, href: "https://www.hackerrank.com/profile/preethi_08", label: "HackerRank profile" },
  { icon: SiCodechef, href: "https://www.codechef.com/users/seelapreethi08", label: "CodeChef profile" },
];

const NAME_WORDS = ["Preethi", "Seela"];

const nameContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const nameWord = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(35);
  const photoX = useMotionValue(0);
  const photoY = useMotionValue(0);
  const textX = useMotionValue(0);
  const textY = useMotionValue(0);
  const smoothX = useSpring(spotX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(spotY, { stiffness: 90, damping: 24 });
  const smoothPhotoX = useSpring(photoX, { stiffness: 120, damping: 22 });
  const smoothPhotoY = useSpring(photoY, { stiffness: 120, damping: 22 });
  const smoothTextX = useSpring(textX, { stiffness: 80, damping: 26 });
  const smoothTextY = useSpring(textY, { stiffness: 80, damping: 26 });
  const spotlightLeft = useTransform(smoothX, (v) => `${v}%`);
  const spotlightTop = useTransform(smoothY, (v) => `${v}%`);

  const onHeroMove = useCallback(
    (e) => {
      if (reduceMotion || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const py = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      spotX.set(((e.clientX - rect.left) / rect.width) * 100);
      spotY.set(((e.clientY - rect.top) / rect.height) * 100);
      photoX.set(px * 8);
      photoY.set(py * 8);
      textX.set(px * -4);
      textY.set(py * -3);
    },
    [reduceMotion, spotX, spotY, photoX, photoY, textX, textY]
  );

  return (
    <section
      id="hero"
      className="hero section-featured"
      aria-labelledby="hero-heading"
      ref={heroRef}
      onMouseMove={onHeroMove}
    >
      {!reduceMotion ? (
        <motion.div
          className="hero-spotlight-glow"
          aria-hidden="true"
          style={{
            left: spotlightLeft,
            top: spotlightTop,
            x: "-50%",
            y: "-50%",
          }}
        />
      ) : null}

      <div className="section-container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            style={{ x: smoothTextX, y: smoothTextY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="hero-availability"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="hero-availability-dot" aria-hidden="true" />
              Open to internships
            </motion.div>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <span aria-hidden="true" />
              Full-stack · AI/ML · Problem solving
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="hero-name hero-name--gradient"
              variants={nameContainer}
              initial="hidden"
              animate="visible"
            >
              {NAME_WORDS.map((word, i) => (
                <motion.span
                  key={word}
                  className="hero-name-word"
                  variants={nameWord}
                >
                  {word}
                  {i < NAME_WORDS.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <TypingText
                text="Aspiring software engineer · MERN · AI/ML"
                className="hero-role-typing"
                speed={42}
                delay={600}
              />
            </motion.p>

            <motion.p
              className="hero-lead"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45 }}
            >
              I design and build full-stack web applications from frontend to backend,
              with a strong focus on clean architecture, performance, and user experience.
              I am especially interested in AI-powered applications, machine learning systems,
              and solving real-world problems through scalable software and continuous learning.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.38 }}
            >
              <Magnetic strength={0.22}>
                <motion.a
                  href="/resume.pdf"
                  className="primary-btn btn-shine btn-gradient-purple-pink"
                  download
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <FaDownload aria-hidden /> Resume
                </motion.a>
              </Magnetic>

              <Magnetic strength={0.22}>
                <motion.a
                  href="#projects"
                  className="secondary-btn btn-shine btn-gradient-purple-cyan"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  View projects
                </motion.a>
              </Magnetic>

              <Magnetic strength={0.18}>
                <motion.a
                  href="#contact"
                  className="secondary-btn hero-btn-ghost btn-shine"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  Contact
                </motion.a>
              </Magnetic>
            </motion.div>

            <motion.div
              className="hero-icons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.38 }}
            >
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.05 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                >
                  <Icon aria-hidden />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: smoothPhotoX, y: smoothPhotoY }}
          >
            <div className="hero-photo-glow" aria-hidden="true" />
            <div className="hero-photo-ring" aria-hidden="true" />
            <motion.div
              className="hero-photo-wrap"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -10, 0] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }
              whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            >
              <img
                src={PROFILE_IMAGE}
                alt="Preethi Seela — profile photo"
                className="hero-photo"
                width={300}
                height={300}
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.add("hero-photo-fallback--visible");
                }}
              />
              <div className="hero-photo-fallback" aria-hidden="true">
                PS
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
