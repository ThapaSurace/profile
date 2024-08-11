import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { BiSolidShow } from "react-icons/bi";
import { Badge } from "./ui/badge";
import Image from "next/image";

const ProjectCard = ({ item }: projectProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 cursor-pointer hover:bg-muted/40 p-4 rounded-md group">
      <div
        className={`rounded-md relative w-full md:flex-[1] h-48 shadow ${
          item.id % 2 === 0 ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={item.img}
          fill
          alt="thumbnail"
          className="rounded-md object-cover object-center group-hover:opacity-70 transition-opacity duration-300"
        />
        <div className="hidden group-hover:flex justify-center items-center gap-4 absolute inset-0">
          <Link
            href={item.github_link}
            className="flex gap-1 items-center py-1 px-2 hover:scale-105 border bg-slate-800 text-white dark:bg-white dark:text-slate-800 transition rounded-md duration-300 ease-in-out"
          >
            <span>code</span>
            <FaGithub size={22} />
          </Link>
          <Link
            href={item.demo_link}
            className="flex gap-1 items-center py-1 px-2 hover:scale-105 border bg-slate-800 text-white dark:bg-white dark:text-slate-800 transition rounded-md duration-300 ease-in-out"
          >
            <span>demo</span>
            <BiSolidShow size={25} />
          </Link>
        </div>
      </div>
      <div
        className={`flex-[1] flex flex-col justify-between gap-4 ${
          item.id % 2 === 0 ? "md:order-2" : "md:order-1"
        }`}
      >
        <div>
          <h3 className="mb-2">{item.project_name}</h3>
          <p className="leading-normal tracking-wide text-sm">{item.desc}</p>
        </div>
        <div className="space-y-4">
          <div className="flex gap-1 flex-wrap">
            {item.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
