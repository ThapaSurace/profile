import SlideInFromLeft from "@/components/animation/SlideInFromLeft";
import Timeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/Experience";
import { Separator } from "@/components/ui/separator";
import { educationData } from "@/constants/education";
import { experienceData } from "@/constants/experience";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container space-y-10">
      <SlideInFromLeft delay={0.3}>
        <div>
          <div className="flex gap-3 items-center mb-8">
            <Image src="/coding.png" width={40} height={40} alt="person" />
            <h2>About Me</h2>
          </div>
          <div>
            <p className="mb-2 text-justify">
              Hi, I’m Suresh Thapa, a dedicated MERN stack developer with a
              passion for creating dynamic and user-friendly web applications.
              With a strong foundation in front-end and back-end technologies, I
              specialize in building responsive and scalable web solutions.
            </p>
            <p className="text-justify">
              I recently completed a MERN stack course and have since applied my
              skills in several hands-on projects, including a Fiverr clone and
              an e-commerce website. My expertise spans across technologies like
              MongoDB, Express.js, React, Node.js, and Tailwind CSS, allowing me
              to craft efficient and modern web applications.
            </p>
          </div>
        </div>
        <Separator className="my-10" />
      </SlideInFromLeft>
      <SlideInFromLeft delay={0.4}>
        <div className="flex gap-3 items-center mb-8">
          <Image src="/education.png" width={40} height={40} alt="person" />
          <h2>Education</h2>
        </div>
        <Timeline educationData={educationData} />
      </SlideInFromLeft>
    </div>
  );
};

export default AboutPage;
