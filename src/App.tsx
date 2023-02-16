import React from "react";
import "./App.css";

import { ProjectCards } from "./components/Cards/MappedCards/Cards";
import { Content } from "./components/Layout/OpeningPage/Content";
import { Header } from "./components/Layout/Header/Header";
import { TechnologiesComponent } from "./components/Technologies/Technologies";
import { Certifications } from "./components/Certifications/Certifications";
function App() {
  return (
    <div>
      <Header />
      <Content />
      <ProjectCards />
      <Certifications/>
    </div>
  );
}

export default App;
