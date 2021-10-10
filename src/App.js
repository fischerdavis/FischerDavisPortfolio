import "./App.scss";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
