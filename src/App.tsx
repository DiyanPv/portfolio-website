import React from "react";
import "./App.css";

import { ProjectCards } from "./components/Cards/MappedCards/Cards";
import { Content } from "./components/Layout/OpeningPage/Content";
import { Header } from "./components/Layout/Header/Header";
import { Certifications } from "./components/Certifications/Certifications";
import { Routes, Route } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <ProjectCards />
      <Certifications />
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
