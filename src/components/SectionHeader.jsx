import { motion, useReducedMotion } from "framer-motion";
import { getSectionVariant } from "../motion/variants.js";

export default function SectionHeader({ kicker, title, id, variantIndex = 0 }) {
  const reduceMotion = useReducedMotion();
  const variant = getSectionVariant(variantIndex);

  return (
    <header className="section-header">
      {kicker ? (
        <motion.span
          className="section-kicker"
          initial={reduceMotion ? false : { opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-48px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {kicker}
        </motion.span>
      ) : null}
      <motion.h2
        id={id}
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-48px" }}
      >
        <span className="section-title">{title}</span>
      </motion.h2>
    </header>
  );
}
