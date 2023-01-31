import { CertificationCards } from "../Cards";
export const Certifications = () => {
  return (
    <div className="h-fit flex flex-col mb-8">
        <div className="certificationTransition"></div>
      <div className="bg-certifications">
        <CertificationCards />
      </div>
    </div>
  );
};
