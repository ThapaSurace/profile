import { tecStackLinks } from "@/constants/tecStackLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const TechStack = () => {
  return (
    <div className="flex gap-6 flex-wrap items-center">
      {tecStackLinks.map((link) => {
        return (
          <TooltipProvider key={link.label}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={link.imgSrc || ""}
                  width={45}
                  height={45}
                  alt={link.label}
                  className="dark:p-1 dark:rounded-md dark:bg-white hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </TooltipTrigger>
              <TooltipContent>{link.label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default TechStack;
