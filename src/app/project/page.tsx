import { SiCodeproject } from "react-icons/si";
import Projects from "@/components/Projects";
import { Suspense } from "react";
import ProjectSkeleton from "@/components/skeleton/ProjectSkeleton";
import { Separator } from "@/components/ui/separator";


const ProjectPage = () => {
  return (
    <div className="container space-y-10">
      <div>
        <SiCodeproject size={40} className="mb-2" />
        <h1 className="mb-10">Some of my projects</h1>
      </div>
      <Separator />
      <Suspense fallback={<ProjectSkeleton />}>
        <Projects />
      </Suspense>
  
    </div>
  );
};

export default ProjectPage;
