import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Projects } from "../data/Projects";
import { BasicWrapper } from "./BasicWrapper";
export const ProjectCards = () => {
  const image: string = `lele`;

  return (
    <BasicWrapper pageTitle={`Hello`}>
      <div className="flex flex-row flex-wrap items-center justify-center pt-16 h-screen">
        {Projects.map((el) => {
          return (
            <ProjectCard
              liveDemo={true}
              sourceCode={true}
              image={el.image}
              projectName={el.name}
              createDate={el.date}
              description={el.description}
            />
          );
        })}
      </div>
    </BasicWrapper>
  );
};
