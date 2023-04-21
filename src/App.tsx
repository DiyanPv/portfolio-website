import "./App.css";
import { Home } from "./pages/main/Home";
import { Certificates } from "./pages/certificates/Certificates";
import { Projects } from "./pages/projects/Projects";
import { About } from "./pages/about/About.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
