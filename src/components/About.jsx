import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import GradientBorder from "./motion/GradientBorder.jsx";
import ScrollReveal from "./motion/ScrollReveal.jsx";

const paragraphs = [
  "I am a computer science student focused on full-stack development using the MERN stack, with strong interest in scalable backend systems, clean APIs, and responsive user interfaces. Alongside web development, I enjoy exploring AI and machine learning, especially NLP, RAG-based applications, and building practical solutions that combine software engineering with intelligent systems.",
  "My approach is to break complex problems into manageable parts, build iteratively, and improve through continuous learning and experimentation. I enjoy solving DSA problems, developing real-world projects, and refining systems for better performance and usability. I am currently seeking internship opportunities where I can contribute to impactful products, collaborate with experienced engineers, and grow as a software developer.",
];

const decorFloat = (i, reduceMotion) =>
  reduceMotion
    ? undefined
    : {
        y: [0, -8, 4, 0],
        x: [0, i % 2 === 0 ? 6 : -6, 0],
        opacity: [0.2, 0.35, 0.2],
      };

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-featured about-section" aria-labelledby="about-heading">
      <div className="about-section-glow" aria-hidden="true" />
      <div className="section-container">
        <ScrollReveal variantIndex={0}>
          <SectionHeader
            kicker="Introduction"
            title="About me"
            id="about-heading"
            variantIndex={0}
          />
        </ScrollReveal>

        <div className="about-layout">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={`about-float-decor about-float-decor-${i + 1}`}
              aria-hidden="true"
              animate={decorFloat(i, reduceMotion)}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }
              }
            />
          ))}

          <GradientBorder className="about-card-border">
            <motion.div
              className="about-card about-card--premium glass-card"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </GradientBorder>
        </div>
      </div>
    </section>
  );
}
