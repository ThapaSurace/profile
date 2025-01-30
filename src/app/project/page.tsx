import { SiCodeproject } from "react-icons/si";
import Projects from "@/components/Projects";
import SlideInFromLeft from "@/components/animation/SlideInFromLeft";
import { projects } from "@/constants/projects";

const ProjectPage = () => {
  return (
    <div className="container space-y-4">
      <SlideInFromLeft delay={0.3}>
        <SiCodeproject size={40} className="mb-2" />
        <h1 className="mb-10">Some of my projects</h1>
      </SlideInFromLeft>
      <Projects items={projects} />
    </div>
  );
};

export default ProjectPage;
