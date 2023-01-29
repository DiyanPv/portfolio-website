import React from "react";
import "./App.css";
import { BasicWrapper } from "./components/BasicWrapper";
import { ProjectCards } from "./components/Cards";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { TechnologiesComponent } from "./components/Technologies";
function App() {
  return (
    <div>
      <Header />
      <Content />

      <ProjectCards />

      <BasicWrapper />
    </div>
  );
}

export default App;
