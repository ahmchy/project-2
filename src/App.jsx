import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import TechCard from "./components/TechCard";
import { projects } from "./utils/project";
import { skills } from "./utils/skills";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <TechCard skills={skills} />
        <ProjectCard projects={projects} />
        <Footer />
      </div>
    </>
  );
}

export default App;
