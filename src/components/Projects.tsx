import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import { Separator } from "@/components/ui/separator";
import SlideInFromLeft from "@/components/animation/SlideInFromLeft";

const Projects = () => {
  return (
    <div className="space-y-20">
      {projects.map((item) => (
        <SlideInFromLeft xOffset={-50} delay={item.id * 0.6}>
          <ProjectCard item={item} />
          <Separator className="mt-6" />
        </SlideInFromLeft>
      ))}
    </div>
  );
};

export default Projects;
