import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubHeatmap from "./components/GitHubHeatmap";
import CodingProfiles from "./components/CodingProfiles";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* QUICK IMPACT */}
      <Stats />

      {/* ABOUT */}
      <About />

      {/* SKILLS */}
      <Skills />
      <Experience />

      {/* PROJECTS */}
      <Projects />

      {/* GITHUB HEATMAP (IMPORTANT) */}
      <GitHubHeatmap />

      {/* CODING PROFILES */}
      <CodingProfiles />

      {/* EXPERIENCE */}
      

      {/* ACHIEVEMENTS */}
      <Achievements />

      {/* CALL TO ACTION */}
      <CTA />

      {/* CONTACT */}
      <Contact />
    </>
  );
}

export default App;