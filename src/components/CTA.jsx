import { motion, useReducedMotion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="section-container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="cta-badge">
            <span className="cta-badge-dot" aria-hidden="true" />
            Available for opportunities
          </div>

          <h2 id="cta-heading">Open to internships</h2>

          <p>
            I am looking for roles where I can contribute to production systems,
            learn from senior engineers, and grow as a full-stack developer with
            exposure to AI-driven features.
          </p>

          <div className="cta-tags">
            <span>Internships</span>
            <span>MERN · AI/ML · DSA</span>
            <span>Remote or onsite</span>
          </div>

          <motion.a
            href="mailto:preethiseela8@gmail.com"
            className="primary-btn cta-btn btn-shine btn-gradient-purple-pink"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Email me
            <HiArrowTopRightOnSquare aria-hidden />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
