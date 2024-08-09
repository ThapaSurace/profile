import { experience } from "@/constants/timeline";
const Timeline = () => {
  return (
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
        {experience.map((item) => (
          <div key={item.id} className="grid gap-1 relative">
            <div className="aspect-square w-3 bg-gray-950 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <h3 className="text-gray-800 dark:text-white text-base">
             {item.date} - {item.org}
            </h3>
            <p className="font-medium text-gray-600 dark:text-gray-300 text-sm">
             {item.desc}
            </p>
          </div>
        ))}
      </div>
  );
};

export default Timeline;
