import { CertificationCards } from "../Cards";
export const Certifications = () => {
  return (
    <div className="h-fit flex flex-col">
        <div className="certificationTransition"></div>
      <div className="bg-certifications">
        <CertificationCards />
      </div>
    </div>
  );
};