import SlideInFromLeft from "@/components/animation/SlideInFromLeft";
import Timeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/Experience";
import { Separator } from "@/components/ui/separator";
import { experienceData } from "@/constants/experience";
import Image from "next/image";

export default function WorkExperience() {
  return (
    <div className="container space-y-10">
      {/* <SlideInFromLeft>
        <h1>Experience</h1>
      </SlideInFromLeft> */}

      <SlideInFromLeft>
        <div className="flex gap-3 items-center mb-8">
          <Image src="/license.png" width={30} height={30} alt="certificate" />
          <h2>Certificate</h2>
        </div>
        <p>
          I completed a 4-month MERN stack training in 2022 from Dursikshya
          Institute, gaining proficiency in MongoDB, Express.js, React.js, and
          Node.js.
        </p>
      </SlideInFromLeft>

      <SlideInFromLeft>
        <Separator className="my-10" />
      </SlideInFromLeft>

      <SlideInFromLeft className="flex gap-3 items-center mb-8">
        <Image src="/flexible.png" width={45} height={45} alt="person" />
        <h2>Work History</h2>
      </SlideInFromLeft>
      <SlideInFromLeft>
        <Timeline educationData={experienceData} />
      </SlideInFromLeft>
    </div>
  );
}
