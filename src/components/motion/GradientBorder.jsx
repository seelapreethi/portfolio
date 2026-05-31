import { motion, useReducedMotion } from "framer-motion";

export default function GradientBorder({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`gradient-border-wrap ${className}`}>
      <motion.div
        className="gradient-border-glow"
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { rotate: [0, 360] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 12, repeat: Infinity, ease: "linear" }
        }
      />
      <div className="gradient-border-inner">{children}</div>
    </div>
  );
}
