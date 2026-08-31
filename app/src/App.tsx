import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PipelineBand from "./components/PipelineBand";
import About from "./components/About";
import Experience from "./components/Experience";
import AgentWorkSection from "./components/AgentWork";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-signal focus:px-4 focus:py-3 focus:text-void"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <PipelineBand />
        <About />
        <Experience />
        <AgentWorkSection />
        <Research />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>
    </>
  );
}
