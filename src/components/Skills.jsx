import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      items: ["C", "Java", "Python", "JavaScript"]
    },
    {
      title: "Web & Backend",
      items: ["React", "Node.js", "Express", "FastAPI"]
    },
    {
      title: "Databases",
      items: ["MongoDB", "SQL", "PostgreSQL"]
    },
    {
      title: "AI/ML",
      items: ["TensorFlow", "NLP", "Deep Learning"]
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "Docker", "VS Code","GitHub"]
    }
  ];

  return (
    <section id="skills">
      <div className="section-container">

        <h2>Skills</h2>

        <div className="skills-groups">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              className="skill-group card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{group.title}</h3>

              <div className="skill-items">
                {group.items.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}