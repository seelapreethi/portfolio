import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePointerFine } from "../../hooks/usePointerFine.js";

export default function CustomCursor() {
  const fine = usePointerFine();
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!fine || reduceMotion) return undefined;

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e) => {
      const target = e.target;
      if (
        target instanceof Element &&
        target.closest("a, button, [role='button'], input, textarea, select, label")
      ) {
        setHovering(true);
      }
    };

    const onOut = (e) => {
      const target = e.target;
      if (
        target instanceof Element &&
        target.closest("a, button, [role='button'], input, textarea, select, label")
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [fine, reduceMotion]);

  if (!fine || reduceMotion) return null;

  return (
    <>
      <motion.div
        className="custom-cursor custom-cursor-dot"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovering ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.4 }}
      />
      <motion.div
        className="custom-cursor custom-cursor-ring"
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          scale: hovering ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.6 }}
      />
    </>
  );
}
