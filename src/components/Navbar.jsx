import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaBars, FaRegMoon, FaRegSun, FaXmark } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext.jsx";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useScrollDirection } from "../hooks/useScrollDirection.js";

const NAV_LINKS = [
  { href: "#hero", label: "Home", id: "hero" },
  { href: "#profile", label: "Profile", id: "profile" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#coding-profiles", label: "Profiles", id: "coding-profiles" },
  { href: "#github-activity", label: "GitHub", id: "github-activity" },
  { href: "#achievements", label: "Achievements", id: "achievements" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));
  const { direction, scrollY } = useScrollDirection();
  const reduceMotion = useReducedMotion();
  const hidden = scrollY > 120 && direction === "down" && !open;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 960px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <motion.nav
        className={`nav nav-glass${scrolled ? " nav-scrolled" : ""}`}
        aria-label="Primary"
        initial={{ y: 0 }}
        animate={{ y: hidden && !reduceMotion ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-container">
          <div className="logo">
            <a href="#hero" onClick={closeDrawer}>
              Preethi Seela
            </a>
          </div>

          <div className="nav-links">
            {NAV_LINKS.map(({ href, label, id }) => (
              <a
                key={href}
                href={href}
                className={`nav-link${activeId === id ? " nav-link--active" : ""}`}
              >
                {label}
                {activeId === id ? (
                  <motion.span
                    className="nav-link-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
              }
            >
              {theme === "dark" ? <FaRegSun size={18} /> : <FaRegMoon size={18} />}
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="nav-drawer"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FaXmark size={20} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="nav-drawer"
            className="nav-drawer open"
            aria-hidden={false}
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map(({ href, label, id }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={closeDrawer}
                className={activeId === id ? "nav-drawer-link--active" : ""}
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
