import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeader kicker="Introduction" title="About me" id="about-heading" />

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <p>
            I am a computer science student focused on full-stack development using the
            MERN stack, with strong interest in scalable backend systems, clean APIs,
            and responsive user interfaces. Alongside web development, I enjoy exploring
            AI and machine learning, especially NLP, RAG-based applications, and building
            practical solutions that combine software engineering with intelligent systems.
          </p>
          <p>
            My approach is to break complex problems into manageable parts, build
            iteratively, and improve through continuous learning and experimentation.
            I enjoy solving DSA problems, developing real-world projects, and refining
            systems for better performance and usability. I am currently seeking internship
            opportunities where I can contribute to impactful products, collaborate with
            experienced engineers, and grow as a software developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
