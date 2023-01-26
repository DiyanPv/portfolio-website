import React from "react";
import "./App.css";
import {ProjectCards} from "./components/Cards";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { TechnologiesComponent } from "./components/Technologies";

function App() {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-white-100 w-full h-full">
      <Header />
      <Content />
      <ProjectCards />
      <TechnologiesComponent/>
    </div>
  );
}

export default App;
