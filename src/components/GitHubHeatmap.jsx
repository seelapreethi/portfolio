import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function GitHubHeatmap() {
  const { theme } = useTheme();

  return (
    <section id="github-activity" aria-labelledby="github-heading">
      <div className="section-container">
        <SectionHeader
          kicker="Open source"
          title="GitHub activity"
          id="github-heading"
        />

        <motion.div
          className="heatmap-shell"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="heatmap-header">
            <p className="heatmap-intro">
              Public contribution history for{" "}
              <strong>seelapreethi</strong>. The graph reflects steady iteration
              across coursework, side projects, and maintenance.
            </p>
            <a
              className="heatmap-external link-btn"
              href="https://github.com/seelapreethi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
              <HiArrowTopRightOnSquare aria-hidden />
            </a>
          </div>
          <div className="heatmap-inner">
            <GitHubCalendar
              username="seelapreethi"
              blockSize={11}
              blockMargin={4}
              fontSize={12}
              colorScheme={theme}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
