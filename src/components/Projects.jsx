import { motion } from "framer-motion";

const projects = [
  {
    title: "Semantic Search Engine",
    desc: "NLP-based search using transformers",
    tech: ["Python", "FastAPI", "NLP"],
    link: "https://github.com/seelapreethi/Semantic_Document_Search_Engine",
    status: "Completed"
  },
  {
    title: "Study Planner",
    desc: "Full-stack MERN app with CRUD operations",
    tech: ["React", "Node", "MongoDB"],
    link: "https://github.com/seelapreethi/studyplanner-1",
    status: "Completed"
  },
  {
    title: "Sentiment Analysis Platform",
    desc: "Real-time sentiment analysis system",
    tech: ["FastAPI", "WebSockets"],
    link: "https://github.com/seelapreethi/Sentiment_Platform_",
    status: "Improving UI"
  },
  {
    title: "Image Classification System",
    desc: "ResNet50 based model for image classification",
    tech: ["TensorFlow", "Transfer Learning"],
    link: "https://github.com/seelapreethi/Custom_Image_Classification",
    status: "Improving UI"
  },
  {
    title: "Roadmap Generator",
    desc: "Generates learning paths dynamically",
    tech: ["MERN"],
    link: "https://github.com/seelapreethi/personalized-roadmap-generator",
    status: "In Progress"
  }
];

export default function Projects() {

  // 🔥 container animation (stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // 🔥 card animation
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects">
      <div className="section-container">

        {/* 🔥 Section Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        {/* 🔥 Grid Animation */}
        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {projects.map((p, i) => (
            <motion.div
              className="card project-card"
              key={i}
              variants={cardVariant}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tech">
                {p.tech.map(t => (
                  <span key={t}>#{t}</span>
                ))}
              </div>

              <p><b>Status:</b> {p.status}</p>

              <a href={p.link} target="_blank" rel="noreferrer">
                GitHub →
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}