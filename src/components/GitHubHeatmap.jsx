import {GitHubCalendar} from "react-github-calendar";
import { motion } from "framer-motion";

export default function GitHubHeatmap() {
  return (
    <section>
      <div className="section-container">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          GitHub Activity
        </motion.h2>

        {/* OUTER FLOATING WRAPPER */}
        <motion.div
          className="heatmap-card animated-heatmap"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          animate={{
            y: [0, -6, 0]
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          viewport={{ once: true }}
        >

          {/* INNER CONTENT */}
          <motion.div
            className="heatmap-inner"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <GitHubCalendar
              username="seelapreethi"
              blockSize={9}
              blockMargin={3}
              fontSize={12}
              colorScheme="dark"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}