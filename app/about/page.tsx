import React from "react";
import { Metadata } from "next";
import profile from "@/public/PHI.jpg";
import Image from "next/image";
import InfoText from "@/components/common/ui/InfoText";

export const metadata: Metadata = {
  title: "About",
  description: "This is the about section of Phinehas Osei-Tutu",
};

const About: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-10 my-16">
        <div className="md:w-1/4 p-5">
          <Image
            src={profile}
            alt="profile-pic"
            className="rounded-2xl w-full"
            width={300}
            height={500}
            priority={true}
          />
        </div>

        <div className="md:w-3/4 flex flex-col  gap-5">
          {" "}
          <InfoText
            header="About Me"
            description={` I am Phinehas Osei-Tutu. I am a graduate of Kwame Nkrumah University
            of Science and Technology, Kumasi, where I studied Computer
            Engineering for my undergrad and currently on a contract with
            SeveighTech. My studies made me to have passion for software
            engineering and that encouraged me to get into frontend development.
            This helped me to gain valuable coding experience in programming
            language such as JavaScript utilizing its framework, React and
            TailwindCSS to build intuitive user interface. My resilient,
            dependable and problem solving skills set me apart from the rest.
            With my coding experience and collaborative nature, I can work with
            UI/UX Designers and Backend Developers to build amazing and high
            performance software. If you are looking for frontend developer as a
            Freelancer to ease your life of building great user interface, do
            not hesitate to contact me. I `}
          />
          <div className="flex flex-col gap-2">
            <InfoText header="Education" description="" />
            <div className="text-sm">
              <p className="text-white">Pro-Dev Frontend Developer Course</p>
              <p>ALX Africa.</p>
              <p>
                Relevant course: Professional Foundation, and Software
                Engineering
              </p>
            </div>

            <div className="text-sm">
              <p className="text-white">
                BSc. Computer Engineering (FIRST CLASS HONOR)
              </p>
              <p>Kwame Nkrumah University of Science and Technology, Kumasi</p>
              <p>Relevant course: Software Engineering</p>
            </div>

            <div className="text-sm">
              <p className="text-white">W.A.S.S.C.E (Science)</p>
              <p>Ghana Senior High School, Koforidua.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
