import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-full">
      <Header />
      <Content />
      <Cards />
    </div>
  );
}

export default App;
