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

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
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
      </main>
    </>
  );
}

export default App;
