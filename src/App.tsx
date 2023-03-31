import "./App.css";
import { Home } from "./pages/main/Home";
import { Certificates } from "./pages/certificates/Certificates";
import { Projects } from "./pages/projects/Projects";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
    </Routes>
  );
}

export default App;
