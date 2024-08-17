import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import SlideInFromLeft from "@/components/animation/SlideInFromLeft";

const Projects = () => {
  return (
    <div className="space-y-20">
      {projects.map((item) => (
        <SlideInFromLeft key={item.id} xOffset={-50} delay={item.id * 0.6}>
          <ProjectCard item={item} />
        </SlideInFromLeft>
      ))}
    </div>
  );
};

export default Projects;
