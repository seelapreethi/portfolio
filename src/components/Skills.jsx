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
import ScrollReveal from "./motion/ScrollReveal.jsx";
import TiltCard from "./motion/TiltCard.jsx";
import { staggerContainer } from "../motion/variants.js";

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
  const container = staggerContainer(0.08, 0.05);

  return (
    <section id="skills" className="section-featured" aria-labelledby="skills-heading">
      <div className="section-container">
        <ScrollReveal variantIndex={3}>
          <SectionHeader
            kicker="Stack"
            title="Skills"
            id="skills-heading"
            variantIndex={3}
          />
        </ScrollReveal>

        <motion.div
          className="skills-groups"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <TiltCard
                className={`skill-group card skill-group--premium skill-group--float`}
                maxTilt={6}
              >
                <motion.div
                  className="skill-card-shine"
                  aria-hidden="true"
                  animate={
                    reduceMotion
                      ? undefined
                      : { x: ["-120%", "120%"] }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }
                  }
                />
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: [0, -5, 0] }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 6 + (index % 3),
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4,
                        }
                  }
                >
                  <h3>{group.title}</h3>

                  <div className="skill-row" role="list">
                    {group.items.map(({ name, Icon }) => (
                      <span key={name} className="skill-chip skill-chip--glow" role="listitem">
                        {Icon ? <Icon aria-hidden="true" /> : null}
                        {name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
