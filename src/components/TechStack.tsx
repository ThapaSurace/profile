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
              className="text-4xl cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
