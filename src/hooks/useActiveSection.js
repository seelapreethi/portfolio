import { useEffect, useState } from "react";

const DEFAULT_IDS = [
  "hero",
  "profile",
  "about",
  "skills",
  "experience",
  "projects",
  "coding-profiles",
  "github-activity",
  "achievements",
  "contact",
];

export function useActiveSection(sectionIds = DEFAULT_IDS) {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.15, 0.35, 0.55] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
