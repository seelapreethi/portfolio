import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function GitHubHeatmap() {
  return (
    <section>
      <div className="section-container">

        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          GitHub Contributions
        </motion.h2>

        {/* Animated Heatmap Card */}
        <motion.div
          className="heatmap-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <GitHubCalendar
            username="seelapreethi"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
          />
        </motion.div>

      </div>
    </section>
  );
}