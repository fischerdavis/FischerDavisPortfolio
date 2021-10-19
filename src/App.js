import "./App.scss";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Projects />
      {/*<Contact />*/}
      <Footer />
    </div>
  );
}

export default App;
