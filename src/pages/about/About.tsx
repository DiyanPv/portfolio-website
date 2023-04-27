import React from "react";
import { Header } from "../../components/Layout/Header/Header";
import { IContactDetails } from "../../interfaces/IContactDetails";
export const About = () => {
  const ContactDetails = ({
    name,
    email,
    phone,
    linkedin,
  }: IContactDetails) => {
    return (
      <div className="flex font-bold mt-10 justify-between sm:text-xs">
        <div>
          <div className="flex flex-col">
            <h2 className="skyblue">Name</h2>
            <p>{name}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="skyblue">Email</h2>
            <p>{email}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <h2 className="skyblue">Phone</h2>
            <p>{phone}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="skyblue">Linkedin</h2>
            <p className="hover:cursor-pointer hover:text-white">
              <a
                href="https://www.linkedin.com/in/diyan-p-b640b120a/"
                target="_blank"
              >
                {linkedin}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className=" flex justify-between">
        <div className="flexgrow ">
          <h1>aa</h1>
        </div>
        <div className="flexgrow mr-10 flex justify-center flex-col h-screen">
          <p className="font-mono text-2xl sm:text-xs">
            Hi, my name is Diyan. I am a front-end developer using React and I
            am very passionate and dedicated to my work. I enjoy designing
            websites and creating custom solutions for clients in an effective
            manner.
          </p>

          <ContactDetails
            name={"Diyan Yanev"}
            email={"diyanpetrov61@gmail.com"}
            phone={"0895290605"}
            linkedin={"Click Here"}
          />
        </div>
      </div>
    </div>
  );
};
