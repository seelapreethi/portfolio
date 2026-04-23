import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="cta-section">

      {/* glow background blobs */}
      <div className="cta-glow cta-glow-1" />
      <div className="cta-glow cta-glow-2" />

      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
        </motion.h2>

        {/* subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I’m actively looking for internship opportunities and looking forward to work on real-world projects.
        </motion.p>

        {/* badges */}
        <div className="cta-tags">
          <span>💼 Open to Internships</span>
          <span> MERN • AI • DSA</span>
          <span>🌍 Remote / Onsite</span>
        </div>

        {/* button */}
        <motion.a
          href="mailto:preethiseela8@gmail.com"
          className="cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✉️ Contact Me
        </motion.a>

      </motion.div>
    </section>
  );
}