import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ToTop from "./components/ToTop";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
      <Contact />
      <ToTop />
    </>
  );
}

export default App;
