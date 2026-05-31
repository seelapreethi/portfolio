import { useState, useCallback, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function SlideCarousel({
  items,
  renderItem,
  ariaLabel = "Carousel",
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const count = items.length;

  const go = useCallback(
    (dir) => {
      setIndex((i) => Math.max(0, Math.min(count - 1, i + dir)));
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
    <div className={`slide-carousel ${className}`} aria-label={ariaLabel}>
      <div className="slide-carousel-main">
        <button
          type="button"
          className="slide-nav-btn"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Previous"
        >
          <FaChevronLeft aria-hidden />
        </button>

        <div className="slide-carousel-viewport">
          <motion.div
            className="slide-carousel-track"
            animate={{ x: `-${(index / count) * 100}%` }}
            transition={
              reduceMotion
                ? { duration: 0.01 }
                : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {items.map((item, i) => (
              <div key={item.id ?? item.key ?? i} className="slide-carousel-item">
                {renderItem(item, i)}
              </div>
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          className="slide-nav-btn"
          onClick={() => go(1)}
          disabled={index === count - 1}
          aria-label="Next"
        >
          <FaChevronRight aria-hidden />
        </button>
      </div>

      <div className="slide-carousel-footer">
        <div className="slide-carousel-dots" role="tablist" aria-label="Slides">
          {items.map((item, i) => (
            <button
              key={item.id ?? item.key ?? i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={`slide-dot${i === index ? " active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <span className="slide-counter" aria-live="polite">
          {index + 1} / {count}
        </span>
      </div>
    </div>
  );
}
