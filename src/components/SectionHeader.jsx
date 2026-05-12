import { motion } from "framer-motion";

export default function SectionHeader({ kicker, title, id }) {
  return (
    <header className="section-header">
      {kicker ? (
        <span className="section-kicker">{kicker}</span>
      ) : null}
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-48px" }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
    </header>
  );
}
