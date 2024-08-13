"use client";
import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Separator } from "@/components/ui/separator";

const Projects = () => {
  return (
    <div className="space-y-20">
      {projects.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: item.id * 0.1 }}
        >
          <ProjectCard item={item} />
          <Separator className="mt-6" />
        </motion.div>
      ))}
          
    </div>
  );
};

export default Projects;
