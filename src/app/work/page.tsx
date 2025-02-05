import SlideInFromLeft from "@/components/animation/SlideInFromLeft";
import Timeline from "@/components/EducationTimeline";
import { Separator } from "@/components/ui/separator";
import { experienceData } from "@/constants/experience";
import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";

export default function WorkExperience() {
  return (
    <div className="container">
      <div>
        <SlideInFromLeft delay={0.3} className="flex gap-3 items-center mb-6">
          <Image src="/flexible.png" width={45} height={45} alt="person" />
          <h2>Work History</h2>
        </SlideInFromLeft>
        <SlideInFromLeft delay={0.4}>
          <h2 className="text-xl mb-4 flex items-center gap-2">
            1. Freelance & Contract Trainer – Dursikshya Institute (May 2024 –
            Present)
          </h2>
          <p className="mt-2">
            Worked as a contract trainer at Dursikshya Institute, delivering
            specialized training programs in React.js, Next.js, and MERN stack
            development at various institutions. Responsibilities include:
          </p>
        </SlideInFromLeft>

        <SlideInFromLeft delay={0.5}>
          <ul className="mt-3 text-sm space-y-2 ml-6 text-secondary-foreground">
            <li className="flex gap-1 items-center">
              <FaHandPointRight />
              Conducting structured training sessions on modern web development
              technologies.
            </li>
            <li className="flex gap-1 items-center">
              <FaHandPointRight />
              Designing course materials and hands-on projects for real-world
              applications.
            </li>
            <li className="flex gap-1 items-center">
              <FaHandPointRight />
              Mentoring and guiding students through coding challenges and best
              practices.
            </li>
          </ul>
        </SlideInFromLeft>

        <SlideInFromLeft delay={0.6} className="mt-8">
          <Timeline educationData={experienceData} />
        </SlideInFromLeft>

        <SlideInFromLeft delay={0.7} className="mt-8">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            2. Freelance Web Developer & Trainer (2023 – Present)
          </h2>
          <ul className="mt-3 text-sm space-y-2 ml-6 text-secondary-foreground">
            <li className="flex gap-1 items-center">
              <FaHandPointRight />
              Provides custom web development solutions using React.js, Next.js,
              and the MERN stack.{" "}
            </li>
            <li className="flex gap-1 items-center">
              <FaHandPointRight />
              Works on client-based projects, focusing on building scalable,
              high-performance web applications.
            </li>
          </ul>
        </SlideInFromLeft>
      </div>

      <SlideInFromLeft>
        <Separator className="my-10" />
      </SlideInFromLeft>

      <SlideInFromLeft>
        <div className="flex gap-3 items-center mb-6">
          <Image src="/license.png" width={30} height={30} alt="certificate" />
          <h2>Certificate</h2>
        </div>
        <p>
          I completed a 4-month MERN stack training in 2022 from Dursikshya
          Institute, gaining proficiency in MongoDB, Express.js, React.js, and
          Node.js.
        </p>
      </SlideInFromLeft>
    </div>
  );
}
