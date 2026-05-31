import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

function parseValue(value) {
  const str = String(value);
  const match = str.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: str, decimals: 0 };
  const num = parseFloat(match[1]);
  const suffix = match[2] ?? "";
  const decimals = (match[1].split(".")[1] ?? "").length;
  return { num, suffix, decimals };
}

export default function AnimatedCounter({
  value,
  duration = 1.4,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const { num, suffix, decimals } = parseValue(value);
  const [display, setDisplay] = useState(() =>
    reduceMotion ? String(value) : `0${suffix}`
  );

  useEffect(() => {
    if (!inView || reduceMotion) return undefined;

    let start;
    let rafId;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      setDisplay(`${decimals ? current.toFixed(decimals) : Math.round(current)}${suffix}`);
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, num, suffix, decimals, duration, reduceMotion]);

  return (
    <motion.span ref={ref} className={className}>
      {reduceMotion ? value : display}
    </motion.span>
  );
}
