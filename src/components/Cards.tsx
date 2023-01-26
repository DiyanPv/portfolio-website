import React from "react";
import { Card } from "primereact/card";
import { ProjectCard } from "./ProjectCard";
import { Technologies } from "../data/Technologies";
import { Projects } from "../data/Projects";
export const ProjectCards = () => {
  const image: string = `lele`;

  return (
    <div className="flex flex-row flex-wrap items-center justify-center pt-16 h-screen">
      {Projects.map((el) => {
        return <ProjectCard image={el.image} />;
      })}
    </div>
  );
};
