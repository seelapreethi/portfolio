import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import GitHubHeatmap from "./components/GitHubHeatmap";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import PageLoader from "./components/effects/PageLoader.jsx";
import AmbientBackground from "./components/effects/AmbientBackground.jsx";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <PageLoader onComplete={() => setLoaded(true)} />
      {loaded ? <AmbientBackground /> : null}

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        {loaded ? (
          <motion.main
            id="main-content"
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <CodingProfiles />
            <GitHubHeatmap />
            <Achievements />
            <Contact />
            <CTA />
          </motion.main>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default App;
