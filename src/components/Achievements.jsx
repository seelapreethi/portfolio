import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaCode, FaTrophy, FaCertificate, FaBrain } from "react-icons/fa";
import SectionHeader from "./SectionHeader.jsx";
import PageCarousel from "./motion/PageCarousel.jsx";
import AnimatedCounter from "./motion/AnimatedCounter.jsx";
import ScrollReveal from "./motion/ScrollReveal.jsx";

const CATEGORIES = [
  {
    id: "coding",
    label: "Coding achievements",
    items: [
      {
        id: "codechef",
        text: "500+ problems on CodeChef (Diamond badge)",
        icon: FaTrophy,
        count: "500+",
      },
      {
        id: "leetcode",
        text: "200+ problems on LeetCode",
        icon: FaCode,
        count: "200+",
      },
    ],
  },
  {
    id: "certifications",
    label: "Certifications & learning",
    items: [
      {
        id: "jlpt",
        text: "JLPT N5 Certified",
        icon: FaCertificate,
        badge: "Certification",
      },
      {
        id: "nptel",
        text: "NPTEL IoT (88%, Elite track)",
        icon: FaBrain,
        badge: "Certification",
        count: "88%",
      },
    ],
  },
  {
    id: "other",
    label: "Other achievements",
    items: [
      {
        id: "learning",
        text: "Continuous learning across full-stack, AI/ML, and system design",
        icon: FaBrain,
      },
      {
        id: "hackathons",
        text: "Active in hackathons, open-source, and peer collaboration",
        icon: FaTrophy,
      },
    ],
  },
];

function AchievementCard({ item, reduceMotion }) {
  const Icon = item.icon;

  return (
    <motion.article
      className={`achievement-card achievement-card--featured${item.badge ? " achievement-card--cert" : ""}`}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      {item.badge ? (
        <span className="achievement-badge-label">{item.badge}</span>
      ) : null}
      <div className="achievement-icon" aria-hidden="true">
        <Icon />
      </div>
      {item.count ? (
        <p className="achievement-count">
          <AnimatedCounter value={item.count} />
        </p>
      ) : null}
      <p>{item.text}</p>
    </motion.article>
  );
}

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const reduceMotion = useReducedMotion();
  const category = CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];

  return (
    <section id="achievements" className="section-featured" aria-labelledby="achievements-heading">
      <div className="section-container achievements-section">
        <SectionHeader
          kicker="Highlights"
          title="Achievements"
          id="achievements-heading"
          variantIndex={0}
        />

        <ScrollReveal variantIndex={2}>
          <div className="achievement-tabs" role="tablist" aria-label="Achievement categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`achievement-tab${activeCategory === cat.id ? " active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <PageCarousel
            key={category.id}
            items={category.items}
            ariaLabel={`${category.label}`}
            desktop={2}
            tablet={2}
            mobile={1}
            renderItem={(item) => (
              <AchievementCard item={item} reduceMotion={reduceMotion} />
            )}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
