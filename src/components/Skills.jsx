import { motion } from "framer-motion";
import { FaJava, FaPython, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTensorflow } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "C" },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Docker", icon: <FaDocker /> }
  ];

  return (
    <section id="skills">
      <div className="section-container">

        {/* SECTION TITLE ANIMATION */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        {/* GRID ANIMATION */}
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              className="card skill-card"
              key={i}

              /* ENTRY ANIMATION */
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}

              /* HOVER ANIMATION */
              whileHover={{
                scale: 1.08,
                y: -5
              }}

              transition={{ duration: 0.3 }}
            >
              <div className="icon">
                {skill.icon || "⚙️"}
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}