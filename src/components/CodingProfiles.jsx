import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";
import { motion } from "framer-motion";

export default function CodingProfiles() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section>
      <div className="section-container">

        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Coding Profiles
        </motion.h2>

        {/* 🔥 GRID */}
        <motion.div
          className="profiles-grid upgraded"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* 🔥 LEETCODE */}
          <motion.div
            className="profile-card glass"
            variants={card}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div className="profile-top">
              <SiLeetcode className="profile-icon lc" />
              <div>
                <h3>LeetCode</h3>
                <p className="muted-text">Consistent Problem Solving</p>
              </div>
            </div>

            {/* ✅ AUTO-UPDATING IMAGE */}
            <div className="leet-img-container">
              <img
                src="https://leetcard.jacoblin.cool/preethiseela8?theme=dark&ext=heatmap"
                alt="leetcode stats"
              />
            </div>
          </motion.div>

          {/* 🔥 CODECHEF */}
          <motion.div
            className="profile-card glass"
            variants={card}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div className="profile-top">
              <SiCodechef className="profile-icon cc" />
              <div>
                <h3>CodeChef</h3>
                <p className="muted-text">Competitive Coding</p>
              </div>
            </div>

            <div className="profile-stats">
              <span>500+ Problems</span>
              <span className="badge small">⭐ Diamond</span>
            </div>
          </motion.div>

          {/* 🔥 HACKERRANK */}
          <motion.div
            className="profile-card glass"
            variants={card}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div className="profile-top">
              <SiHackerrank className="profile-icon hr" />
              <div>
                <h3>HackerRank</h3>
                <p className="muted-text">Skill Certifications</p>
              </div>
            </div>

            <div className="profile-stats">
              <span>Gold Badges</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}