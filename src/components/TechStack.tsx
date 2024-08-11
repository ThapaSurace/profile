
import { tecStackLinks } from "@/constants/tecStackLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TechStack = () => {
  return (
    <div className="flex gap-4 items-center">
      {tecStackLinks.map((link) => {
        const Icon = link.icon;
        const color = link.className;
        return (
          <TooltipProvider key={link.label}>
            <Tooltip>
              <TooltipTrigger>
                <div>
                  <Icon
                    color={color}
                    size={40}
                    className="cursor-pointer hover:shadow-sm hover:scale-105 transition duration-150 ease-in-out dark:bg-white dark:p-1 rounded-md"
                  />
                </div>
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
