import { useEffect, useRef, useState } from "react";

export function useScrollDirection(threshold = 12) {
  const [direction, setDirection] = useState("up");
  const [scrollY, setScrollY] = useState(0);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      if (Math.abs(y - lastY.current) < threshold) return;
      setDirection(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrollY };
}
