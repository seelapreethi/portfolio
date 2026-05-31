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
import AnimatedCounter from "./motion/AnimatedCounter.jsx";
import PageCarousel from "./motion/PageCarousel.jsx";
import ScrollReveal from "./motion/ScrollReveal.jsx";
import GradientBorder from "./motion/GradientBorder.jsx";

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
      { label: "Focus", value: "Full-stack & ML repos", count: false },
      { label: "Activity", value: "Year-round commits", count: false },
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
      { label: "Problems", value: "200+", count: true },
      { label: "Streak", value: "Consistent practice", count: false },
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
      { label: "Practice", value: "500+", count: true },
      { label: "Badge", value: "Diamond", count: false },
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
      { label: "Badges", value: "Gold skill badges", count: false },
      { label: "Domains", value: "DSA, SQL, Python", count: false },
    ],
    embed: null,
  },
];

function ProfileCard({ profile, leetTheme, reduceMotion, index }) {
  const Icon = profile.Icon;
  const isGitHub = profile.key === "github";

  return (
    <GradientBorder className="profile-card-border">
      <motion.article
        className={`profile-card profile-card--featured profile-card--dashboard glass-card ${
          isGitHub ? "profile-card--github" : ""
        }`}
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -4, 0] }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 8 + (index % 3) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }
        }
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -6,
                boxShadow: "0 16px 36px rgba(114, 102, 160, 0.14), 0 0 20px rgba(176, 120, 146, 0.08)",
              }
        }
      >
        <div className="profile-card-glow" aria-hidden="true" />
        <motion.div
          className="profile-card-sweep"
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : { x: ["-120%", "120%"] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 4, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }
          }
        />

        <div className="profile-top">
          <div className={`profile-icon-wrap ${profile.iconClass}`}>
            <Icon className="profile-icon-svg" aria-hidden />
          </div>
          <div className="profile-headings">
            <h3>{profile.name}</h3>
            <p className="muted-text">@{profile.handle}</p>
          </div>
        </div>

        <p className="profile-blurb">{profile.blurb}</p>

        <dl className="profile-stat-grid">
          {profile.highlights.map((row) => (
            <div key={row.label} className="profile-stat profile-stat--glow">
              <dt>{row.label}</dt>
              <dd>
                {row.count ? <AnimatedCounter value={row.value} /> : row.value}
              </dd>
            </div>
          ))}
        </dl>

        {profile.embed === "leetcard" ? (
          <div className="leet-img-container">
            <img
              key={leetTheme}
              src={`https://leetcard.jacoblin.cool/${profile.handle}?theme=${leetTheme}&ext=heatmap`}
              alt={`${profile.name} stats card`}
              loading="lazy"
            />
          </div>
        ) : null}

        <div className="profile-actions">
          <a
            className="profile-link"
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open profile
            <HiArrowTopRightOnSquare aria-hidden />
          </a>
        </div>
      </motion.article>
    </GradientBorder>
  );
}

export default function CodingProfiles() {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();
  const leetTheme = theme === "light" ? "light" : "dark";

  return (
    <section id="coding-profiles" className="section-featured" aria-labelledby="profiles-heading">
      <div className="section-container">
        <ScrollReveal variantIndex={3}>
          <SectionHeader
            kicker="Platforms"
            title="Coding profiles"
            id="profiles-heading"
            variantIndex={1}
          />
        </ScrollReveal>

        <ScrollReveal variantIndex={3}>
          <PageCarousel
            items={PROFILES}
            ariaLabel="Coding profiles"
            desktop={3}
            tablet={2}
            mobile={1}
            renderItem={(profile, index) => (
              <ProfileCard
                profile={profile}
                leetTheme={leetTheme}
                reduceMotion={reduceMotion}
                index={index}
              />
            )}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
