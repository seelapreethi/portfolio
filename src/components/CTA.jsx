import { motion, useReducedMotion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-glow cta-glow-1" aria-hidden="true" />
      <div className="cta-glow cta-glow-2" aria-hidden="true" />

      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="cta-heading">Open to internships</h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          I am looking for roles where I can contribute to production systems,
          learn from senior engineers, and grow as a full-stack developer with
          exposure to AI-driven features.
        </motion.p>

        <div className="cta-tags">
          <span>Internships</span>
          <span>MERN · AI/ML · DSA</span>
          <span>Remote or onsite</span>
        </div>

        <motion.a
          href="mailto:preethiseela8@gmail.com"
          className="cta-btn"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        >
          Email me
          <HiArrowTopRightOnSquare aria-hidden />
        </motion.a>
      </motion.div>
    </section>
  );
}
