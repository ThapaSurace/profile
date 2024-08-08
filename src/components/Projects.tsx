"use client";
import { projects } from "@/constants/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { BiSolidShow } from "react-icons/bi";
import { Badge } from "./ui/badge";
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
          <Link href="" className="flex flex-col items-center md:flex-row gap-3 md:gap-8 cursor-pointer">
            <div
              className={`rounded-md relative w-full md:flex-[1]  h-60 shadow ${item.id % 2 === 0 ? "md:order-1" : "md:order-2"}`}
            >
              <Image
                src={item.img}
                fill
                alt="thumbnail"
                className="rounded-md object-cover object-center"
              />
            </div>
            <div
              className={`flex-[1] flex flex-col justify-between gap-4 ${item.id % 2 === 0 ? "md:order-2" : "md:order-1"}`}
            >
              <div>
                <h3 className="mb-2">
                  {item.project_name}
                </h3>

                <p className="">
                  {item.desc}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-1 flex-wrap">
                  {item.tags.map((tag, index) => (
                    <Badge
                      key={index}
                     variant='secondary'
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center md:justify-start gap-4 items-center">
                  <div className="flex gap-1 items-center py-1 px-2 transition rounded-md duration-300 ease-in-out">
                    <span className="font-semibold text-xl">code</span>
                    <FaGithub size={22} />
                  </div>
                  <div className="flex gap-1 items-center py-1 px-2 transition rounded-md duration-300 ease-in-out">
                    <span className="font-semibold text-xl">demo</span>
                    <BiSolidShow size={25} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
