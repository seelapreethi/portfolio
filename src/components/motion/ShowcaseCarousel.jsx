import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function ShowcaseCarousel({
  items,
  renderItem,
  ariaLabel = "Showcase carousel",
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const count = items.length;

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!count) return null;

  return (
    <div className={`showcase-carousel ${className}`} aria-label={ariaLabel}>
      <div className="showcase-nav">
        <button
          type="button"
          className="showcase-arrow"
          onClick={() => go(-1)}
          aria-label="Previous item"
        >
          <FaChevronLeft aria-hidden />
          <span className="showcase-arrow-label">Previous</span>
        </button>

        <div className="showcase-counter" aria-live="polite">
          <span className="showcase-counter-current">{index + 1}</span>
          <span className="showcase-counter-sep">/</span>
          <span className="showcase-counter-total">{count}</span>
        </div>

        <button
          type="button"
          className="showcase-arrow"
          onClick={() => go(1)}
          aria-label="Next item"
        >
          <span className="showcase-arrow-label">Next</span>
          <FaChevronRight aria-hidden />
        </button>
      </div>

      <div className="showcase-stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={items[index].id ?? index}
            className="showcase-slide"
            initial={reduceMotion ? false : { opacity: 0, x: 48, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -48, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderItem(items[index], index)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="showcase-dots" role="tablist" aria-label="Showcase items">
        {items.map((item, i) => (
          <button
            key={item.id ?? i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to item ${i + 1}`}
            className={`showcase-dot${i === index ? " active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
