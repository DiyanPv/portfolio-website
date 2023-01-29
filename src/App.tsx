import React from "react";
import "./App.css";

import { ProjectCards } from "./components/Cards";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { TechnologiesComponent } from "./components/Technologies";
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
