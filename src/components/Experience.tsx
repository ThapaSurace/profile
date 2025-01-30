import { Badge } from "./ui/badge";

export default function ExperienceTimeline() {
  const timelineItems = [
    {
      time: "Jul - Aug 2024",
      title: "React.js and Next.js Trainer",
      description:
        "Conducted a 35-hour training program at Himalayan Bank, teaching participants how to build robust web applications with React.js and Next.js.",
    },
    {
      time: "Jun - Jul 2024",
      title: "React.js Trainer",
      description:
        "Led a 30-hour React.js course at Texas College of Management and IT, focusing on practical modern web development skills.",
    },
    {
      time: "May - Jun 2024",
      title: "MERN Stack Trainer",
      description:
        "Delivered a 40-hour comprehensive course on MERN stack development at Orchid International College.",
    },
  ];
  return (
    <div>
      {timelineItems.map((item, index) => (
        <div className="flex gap-x-3" key={index}>
          {/* Left Content */}

          <Badge className="min-w-[120px] h-8 flex justify-center items-center text-white dark:text-slate-800">
            {item.time}
          </Badge>

          {/* End Left Content */}

          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-800 dark:bg-neutral-300"></div>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <Badge className="md:hidden mb-4" variant="outline">
              {item.time}
            </Badge>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            {item.description && (
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                {item.description}
              </p>
            )}
          </div>
          {/* End Right Content */}
        </div>
      ))}
    </div>
  );
}
