import { ProjectCard } from "./Cards/ProjectCard";
import { Projects } from "../data/Projects";
import { BasicWrapper } from "./BasicWrapper";
import { Certifications } from "../data/Certifications";
import { CertificationCard } from "./Cards/CertificationCard";
import { HonorableCertificates } from "./Certifications/SingleCertificate";
import { HiAcademicCap } from "react-icons/hi";
export const ProjectCards = () => {
  const image: string = `lele`;

  return (
    <BasicWrapper
      pageTitle={`Personal Projects`}
      bgImage={true}
      isProjects={true}
    >
      <div className="flex flex-row flex-wrap items-center justify-center pt-16 h-fit">
        {Projects.map((el) => {
          return (
            <ProjectCard
              key={el.image}
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
      <div className="flex flex-row flex-wrap items-center justify-center pt-24 h-fit mb-8 mt-8">
        {Certifications.map((certificate) => (
          <CertificationCard
            name={certificate.name}
            img={certificate.img}
            url={certificate.url}
            key={certificate.img}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center lg:text-2xl md:text-lg sm:text-regular font-bold">
        <HiAcademicCap className="my-auto" />
        <div>Honorable mentions:</div>
      </div>
      <div className="flex flex-row flex-wrap justify-center mb-8">
        <HonorableCertificates
          name={`Javascript Advanced - SoftUni`}
          link="https://github.com/DiyanPv/JavasScript--Advanced/tree/main"
        />
        <HonorableCertificates
          name={`Javascript Applications - SoftUni`}
          link="https://github.com/DiyanPv/JS-Applications-Demos"
        />
        <HonorableCertificates
          name={`HTML & CSS - SoftUni`}
          link="https://github.com/DiyanPv/HTML-CSS-SoftUni"
        />
        <HonorableCertificates
          name={`Patrick Collins 32 hour Solidity Course`}
          link="https://github.com/DiyanPv/Lottery-Blitz"
        />
      </div>
    </BasicWrapper>
  );
};
