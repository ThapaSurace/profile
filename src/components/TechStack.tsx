"use client";
import { tecStackLinks } from "@/constants/tecStackLinks";

const TechStack = () => {
  return (
    <div className="flex gap-4 items-center">
      {tecStackLinks.map((link) => {
        const Icon = link.icon;
        const color = link.className;
        return (
          <div key={link.label}>
            <Icon
              color={color}
              size={50}
              className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out dark:bg-white p-1 rounded-md"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
