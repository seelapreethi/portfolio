import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";
import { motion } from "framer-motion";

export default function CodingProfiles() {
  return (
    <section>
      <div className="section-container">

        {/* TITLE ANIMATION */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Coding Profiles
        </motion.h2>

        {/* GRID ANIMATION */}
        <motion.div
          className="profiles-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >

          {/* LEETCODE */}
          <motion.div
            className="card profile-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <SiLeetcode className="profile-icon" />
            <h3>LeetCode</h3>

            <div className="leet-img-container">
              <img
                src="https://leetcard.jacoblin.cool/preethiseela8?theme=dark&ext=contest"
                alt="leetcode stats"
              />
            </div>
          </motion.div>

          {/* CODECHEF */}
          <motion.div
            className="card profile-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <SiCodechef className="profile-icon" />
            <h3>CodeChef</h3>
            <p>500+ Problems</p>
            <span className="badge">Diamond</span>
          </motion.div>

          {/* HACKERRANK */}
          <motion.div
            className="card profile-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <SiHackerrank className="profile-icon" />
            <h3>HackerRank</h3>
            <p>Gold Badges</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}