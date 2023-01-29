import React from "react";
import { ProjectCard } from "./Cards/ProjectCard";
import { Projects } from "../data/Projects";
import { BasicWrapper } from "./BasicWrapper";
import { Certifications } from "../data/Certifications";
import { CertificationCard } from "./Cards/CertificationCard";
export const ProjectCards = () => {
  const image: string = `lele`;

  return (
    <BasicWrapper pageTitle={`Personal Projects`} bgImage={true}      isProjects={true}>
      <div className="flex flex-row flex-wrap items-center justify-center pt-16 h-fit">
        {Projects.map((el) => {
          return (
            <ProjectCard
           
              liveDemo={el.liveDemo}
              sourceCode={el.sourceCode}
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

export const CertificationCards = () => {
  return (
    <BasicWrapper pageTitle="Certifications">
    <div className="flex flex-row flex-wrap items-center justify-center pt-24 h-fit">
      {Certifications.map((certificate) => (
        <CertificationCard name={certificate.name} />
      ))}
    </div>
    </BasicWrapper>
  );
};
