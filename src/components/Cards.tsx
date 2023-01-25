import React from "react";
import { Card } from "primereact/card";
import { ProjectCard } from "./ProjectCard";
const Cards = () => {
  const image: string = `lele`;

  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      <ProjectCard image={image} />
      <ProjectCard image={image} />
      <ProjectCard image={image} />
    </div>
  );
};

export default Cards;
