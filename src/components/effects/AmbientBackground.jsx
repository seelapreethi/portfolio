import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useCallback, useRef } from "react";

const FLOATING_TEXT = [
  { text: "Preethi", size: "clamp(3rem, 8vw, 6rem)", top: "12%", left: "6%", duration: 28, x: [0, 40, -20, 0], y: [0, -30, 20, 0] },
  { text: "Seela", size: "clamp(2.5rem, 6vw, 4.5rem)", top: "55%", left: "72%", duration: 32, x: [0, -35, 25, 0], y: [0, 25, -40, 0] },
  { text: "Preethi Seela", size: "clamp(2rem, 5vw, 3.5rem)", top: "78%", left: "18%", duration: 36, x: [0, 50, -30, 0], y: [0, -20, 35, 0] },
  { text: "Preethi", size: "clamp(1.8rem, 4vw, 3rem)", top: "35%", left: "82%", duration: 24, x: [0, -25, 15, 0], y: [0, 40, -25, 0] },
  { text: "Seela", size: "clamp(2.2rem, 5vw, 3.8rem)", top: "22%", left: "48%", duration: 30, x: [0, 30, -40, 0], y: [0, -35, 15, 0] },
];

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  size: i % 5 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
  top: `${(i * 17 + 7) % 92}%`,
  left: `${(i * 23 + 11) % 94}%`,
  glow: i % 4 === 0,
  duration: 6 + (i % 7) * 1.2,
  delay: (i % 5) * 0.8,
}));

const LIGHTS = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  size: 80 + i * 30,
  top: `${15 + i * 14}%`,
  left: `${10 + i * 15}%`,
  duration: 10 + i * 2,
}));

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 28 });
  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const parallaxSlowX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const parallaxSlowY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const onMove = useCallback(
    (e) => {
      if (reduceMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [reduceMotion, mouseX, mouseY]
  );

  return (
    <div
      ref={containerRef}
      className="ambient-bg"
      aria-hidden="true"
      onMouseMove={onMove}
    >
      <div className="ambient-gradient-mesh" />
      <div className="ambient-dot-grid" />

      <motion.div
        className="ambient-layer ambient-layer--text"
        style={reduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
      >
        {FLOATING_TEXT.map((item) => (
          <motion.span
            key={`${item.text}-${item.top}`}
            className="ambient-float-text"
            style={{
              fontSize: item.size,
              top: item.top,
              left: item.left,
            }}
            animate={
              reduceMotion
                ? undefined
                : { x: item.x, y: item.y }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: item.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            {item.text}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="ambient-layer ambient-layer--particles"
        style={reduceMotion ? undefined : { x: parallaxSlowX, y: parallaxSlowY }}
      >
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className={`ambient-particle ${p.glow ? "ambient-particle--glow" : ""}`}
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -12, 8, 0],
                    x: [0, 6, -4, 0],
                    opacity: [0.15, 0.45, 0.2, 0.15],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </motion.div>

      <motion.div
        className="ambient-layer ambient-layer--lights"
        style={reduceMotion ? undefined : { x: parallaxSlowX, y: parallaxSlowY }}
      >
        {LIGHTS.map((light) => (
          <motion.span
            key={light.id}
            className="ambient-light-orb"
            style={{
              width: light.size,
              height: light.size,
              top: light.top,
              left: light.left,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.12, 0.22, 0.12],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: light.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </motion.div>
    </div>
  );
}
