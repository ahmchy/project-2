import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project from "./components/ProjectCard";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { projects } from "./utils/project";
import { skills } from "./utils/skills";
import TechCard from "./components/TechCard";

function App() {
  return (
    <Router>
      <div className="flex relative"  >
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero  />} />
            <Route path="/projects" element={<Project projects={projects} />} />
            <Route path="/skills" element={<TechCard skills={skills} />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
