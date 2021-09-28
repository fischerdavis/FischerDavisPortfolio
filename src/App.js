import "./App.scss";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
