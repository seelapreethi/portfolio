import { motion, useReducedMotion } from "framer-motion";
import {
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
  SiGithub,
} from "react-icons/si";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext.jsx";
import SectionHeader from "./SectionHeader.jsx";

const PROFILES = [
  {
    key: "github",
    name: "GitHub",
    handle: "seelapreethi",
    blurb: "Repositories, contributions, and open-source experiments.",
    href: "https://github.com/seelapreethi",
    Icon: SiGithub,
    iconClass: "profile-icon gh",
    highlights: [
      { label: "Focus", value: "Full-stack & ML repos" },
      { label: "Activity", value: "Year-round commits" },
    ],
    embed: null,
  },
  {
    key: "leetcode",
    name: "LeetCode",
    handle: "preethiseela8",
    blurb: "Daily practice, patterns, and contest preparation.",
    href: "https://leetcode.com/u/preethiseela8/",
    Icon: SiLeetcode,
    iconClass: "profile-icon lc",
    highlights: [
      { label: "Problems", value: "200+ solved" },
      { label: "Streak", value: "Consistent practice" },
    ],
    embed: "leetcard",
  },
  {
    key: "codechef",
    name: "CodeChef",
    handle: "seelapreethi08",
    blurb: "Competitive programming and rated contests.",
    href: "https://www.codechef.com/users/seelapreethi08",
    Icon: SiCodechef,
    iconClass: "profile-icon cc",
    highlights: [
      { label: "Practice", value: "500+ problems" },
      { label: "Badge", value: "Diamond" },
    ],
    embed: null,
  },
  {
    key: "hackerrank",
    name: "HackerRank",
    handle: "preethi_08",
    blurb: "Verified skills and problem sets across domains.",
    href: "https://www.hackerrank.com/profile/preethi_08",
    Icon: SiHackerrank,
    iconClass: "profile-icon hr",
    highlights: [
      { label: "Badges", value: "Gold skill badges" },
      { label: "Domains", value: "DSA, SQL, Python" },
    ],
    embed: null,
  },
];

export default function CodingProfiles() {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  const leetTheme = theme === "light" ? "light" : "dark";

  return (
    <section id="coding-profiles" aria-labelledby="profiles-heading">
      <div className="section-container">
        <SectionHeader
          kicker="Platforms"
          title="Coding profiles"
          id="profiles-heading"
        />

        <motion.div
          className="profiles-grid upgraded"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {PROFILES.map((p) => {
            const Icon = p.Icon;
            return (
            <motion.article
              key={p.key}
              className="profile-card glass"
              variants={card}
              whileHover={reduceMotion ? undefined : { y: -4 }}
            >
              <div className="profile-top">
                <div className={`profile-icon-wrap ${p.iconClass}`}>
                  <Icon className="profile-icon-svg" aria-hidden />
                </div>
                <div className="profile-headings">
                  <h3>{p.name}</h3>
                  <p className="muted-text">@{p.handle}</p>
                </div>
              </div>

              <p className="profile-blurb">{p.blurb}</p>

              <dl className="profile-stat-grid">
                {p.highlights.map((row) => (
                  <div key={row.label} className="profile-stat">
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>

              {p.embed === "leetcard" ? (
                <div className="leet-img-container">
                  <img
                    key={leetTheme}
                    src={`https://leetcard.jacoblin.cool/${p.handle}?theme=${leetTheme}&ext=heatmap`}
                    alt={`${p.name} stats card`}
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="profile-actions">
                <a
                  className="profile-link"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open profile
                  <HiArrowTopRightOnSquare aria-hidden />
                </a>
              </div>
            </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
