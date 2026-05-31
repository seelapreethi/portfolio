import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function TypingText({
  text,
  speed = 55,
  delay = 400,
  className = "",
}) {
  const reduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduceMotion ? text : "");

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(text);
      return;
    }

    let timeoutId;
    let index = 0;
    setDisplayed("");

    const start = () => {
      const tick = () => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index < text.length) {
          timeoutId = window.setTimeout(tick, speed);
        }
      };
      timeoutId = window.setTimeout(tick, delay);
    };

    start();
    return () => window.clearTimeout(timeoutId);
  }, [text, speed, delay, reduceMotion]);

  return (
    <span className={className}>
      {displayed}
      {!reduceMotion && displayed.length < text.length ? (
        <span className="typing-cursor" aria-hidden="true">
          |
        </span>
      ) : null}
    </span>
  );
}
