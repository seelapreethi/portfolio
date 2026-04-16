import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section style={{ textAlign: "center" }}>

      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Looking for Opportunities
      </motion.h2>

      {/* Paragraph Animation */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I am actively looking for internship opportunities.
      </motion.p>

      {/* Button Animation */}
      <motion.a
        href="mailto:preethiseela8@gmail.com"
        className="primary-btn"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{ display: "inline-block", marginTop: "20px" }}
      >
        Contact Me
      </motion.a>

    </section>
  );
}