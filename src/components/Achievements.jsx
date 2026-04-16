import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section>
      <div className="section-container">

        {/* SECTION TITLE ANIMATION */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        {/* LIST ANIMATION */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          
          {[
            "500+ problems on CodeChef (Diamond Badge)",
            "200+ problems on LeetCode",
            "JLPT N5 Certified",
            "NPTEL IoT (88% Elite)"
          ].map((item, index) => (
            
            <motion.li
              key={index}
              className="achievement-item"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>

          ))}

        </motion.ul>

      </div>
    </section>
  );
}