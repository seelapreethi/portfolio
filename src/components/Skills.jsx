import { motion, useReducedMotion } from "framer-motion";
import {
  SiC,
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiGithub,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

import { FaBrain } from "react-icons/fa";
import SectionHeader from "./SectionHeader.jsx";

const skillGroups = [
  {
    title: "Programming languages",
    items: [
      { name: "C", Icon: SiC },
      { name: "Java", Icon: SiOpenjdk },
      { name: "Python", Icon: SiPython },
      { name: "JavaScript", Icon: SiJavascript },
    ],
  },

  {
    title: "Frontend",
    items: [
      { name: "React", Icon: SiReact },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "JavaScript", Icon: SiJavascript },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "REST API development" },
      { name: "API routing" },
    ],
  },

  {
    title: "Databases",
    items: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "SQL", Icon: SiMysql },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "Docker", Icon: SiDocker },
      { name: "GitHub", Icon: SiGithub },
      { name: "VS Code" },
      { name: "Vercel" },
    ],
  },

  {
    title: "AI / ML",
    items: [
      { name: "Python", Icon: SiPython },
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "NLP", Icon: FaBrain },
      { name: "Deep learning", Icon: SiPytorch },
      { name: "LangChain" },
      { name: "RAG" },
    ],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionHeader
          kicker="Stack"
          title="Skills"
          id="skills-heading"
        />

        <div className="skills-groups">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="skill-group card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.42 }}
              viewport={{ once: true, margin: "-36px" }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
            >
              <h3>{group.title}</h3>

              <div className="skill-row" role="list">
                {group.items.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="skill-chip"
                    role="listitem"
                  >
                    {Icon && <Icon aria-hidden="true" />}
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}