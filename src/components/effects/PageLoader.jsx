import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const PROFILE_IMAGE = "/images/profile.jpg";

export default function PageLoader({ onComplete }) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const duration = reduceMotion ? 0 : skipped ? 0 : 1100;
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [reduceMotion, skipped, onComplete]);

  const skip = () => {
    setSkipped(true);
    setVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="page-loader"
          role="status"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="page-loader-inner">
            <motion.div
              className="page-loader-logo"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.88, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={PROFILE_IMAGE}
                alt=""
                className="page-loader-mark page-loader-photo"
                width={72}
                height={72}
                decoding="async"
              />
              <span className="page-loader-name">Preethi Seela</span>
            </motion.div>

            {!reduceMotion ? (
              <motion.div
                className="page-loader-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
          </div>

          <button type="button" className="page-loader-skip" onClick={skip}>
            Skip intro
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
