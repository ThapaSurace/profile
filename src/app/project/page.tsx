import { SiCodeproject } from "react-icons/si";
import Projects from "@/components/Projects";
import SlideInFromLeft from "@/components/animation/SlideInFromLeft";
import { projects } from "@/constants/projects";

const ProjectPage = () => {
  return (
    <div className="container space-y-4">
      <SlideInFromLeft delay={0.3} className="flex items-center gap-1 mb-10">
        <SiCodeproject size={40} className="mb-2" />
        <h1 className="">Some of my projects</h1>
      </SlideInFromLeft>
      <Projects items={projects} />
    </div>
  );
};

export default ProjectPage;
