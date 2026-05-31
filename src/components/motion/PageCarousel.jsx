import { useState, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function useItemsPerPage(desktop = 3, tablet = 2, mobile = 1) {
  const [perPage, setPerPage] = useState(desktop);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 960px)");
    const mqTablet = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (mqDesktop.matches) setPerPage(desktop);
      else if (mqTablet.matches) setPerPage(tablet);
      else setPerPage(mobile);
    };

    update();
    mqDesktop.addEventListener("change", update);
    mqTablet.addEventListener("change", update);
    return () => {
      mqDesktop.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, [desktop, tablet, mobile]);

  return perPage;
}

function chunkItems(items, size) {
  const pages = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages.length ? pages : [[]];
}

export default function PageCarousel({
  items,
  renderItem,
  ariaLabel = "Carousel",
  className = "",
  desktop = 3,
  tablet = 2,
  mobile = 1,
}) {
  const perPage = useItemsPerPage(desktop, tablet, mobile);
  const reduceMotion = useReducedMotion();
  const pages = useMemo(() => chunkItems(items, perPage), [items, perPage]);
  const [pageIndex, setPageIndex] = useState(0);

  const maxPage = pages.length - 1;
  const page = Math.min(pageIndex, maxPage);
  const currentItems = pages[page] ?? [];

  const go = useCallback(
    (dir) => {
      setPageIndex((p) => Math.max(0, Math.min(maxPage, p + dir)));
    },
    [maxPage]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!items.length) return null;

  return (
    <div className={`page-carousel ${className}`} aria-label={ariaLabel}>
      <div className="page-carousel-main">
        <button
          type="button"
          className="page-nav-btn"
          onClick={() => go(-1)}
          disabled={page === 0}
          aria-label="Previous"
        >
          <FaChevronLeft aria-hidden />
          <span>Previous</span>
        </button>

        <div className="page-carousel-viewport">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${page}-${perPage}`}
              className="page-carousel-grid"
              style={{ "--page-cols": perPage }}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {currentItems.map((item, i) => (
                <div key={item.id ?? item.key ?? `${page}-${i}`} className="page-carousel-cell">
                  {renderItem(item, page * perPage + i)}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className="page-nav-btn"
          onClick={() => go(1)}
          disabled={page >= maxPage}
          aria-label="Next"
        >
          <span>Next</span>
          <FaChevronRight aria-hidden />
        </button>
      </div>

      <div className="page-carousel-footer">
        <div className="page-carousel-dots" role="tablist" aria-label="Pages">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Page ${i + 1}`}
              className={`page-dot${i === page ? " active" : ""}`}
              onClick={() => setPageIndex(i)}
            />
          ))}
        </div>
        <span className="page-counter" aria-live="polite">
          Page {page + 1} of {pages.length}
        </span>
      </div>
    </div>
  );
}
