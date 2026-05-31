import { motion, useReducedMotion } from "framer-motion";
import { getSectionVariant } from "../../motion/variants.js";

export default function ScrollReveal({
  children,
  className = "",
  variantIndex = 0,
  delay = 0,
  as = "div",
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;
  const variant = getSectionVariant(variantIndex);

  if (reduceMotion) {
    const Static = as;
    return (
      <Static className={className} {...props}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
