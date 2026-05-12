import { useState, useEffect } from "react";
import { FaBars, FaRegMoon, FaRegSun, FaXmark } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext.jsx";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#profile", label: "Profile" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#coding-profiles", label: "Profiles" },
  { href: "#github-activity", label: "GitHub" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
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
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`} aria-label="Primary">
      <div className="nav-container">
        <div className="logo">
          <a href="#hero" onClick={closeDrawer}>
            Preethi Seela
          </a>
        </div>

        <div className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
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

      <div
        id="nav-drawer"
        className={`nav-drawer ${open ? "open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeDrawer}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
