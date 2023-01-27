import React from "react";
import "./App.css";
import { BasicWrapper } from "./components/BasicWrapper";
import { ProjectCards } from "./components/Cards";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { TechnologiesComponent } from "./components/Technologies";
const scrollr = require(`scrollr`);
function App() {
  console.log(scrollr);
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <TechnologiesComponent />
      <ProjectCards />
      <Content />
      <BasicWrapper />
    </div>
  );
}

export default App;