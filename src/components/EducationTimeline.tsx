interface EducationItemProps {
  label?: string;
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({
  label,
  date,
  title,
  description,
}: EducationItemProps) => {
  return (
    <div className="relative pl-8 md:pl-32 py-6 group">
      {/* Purple label */}

      {/* Vertical line, Date, Title, and Circle marker */}
      <div
        className="flex flex-col md:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 md:before:left-0 
      before:h-full before:px-px before:bg-slate-300 md:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 
      after:absolute after:left-2 md:after:left-0 after:w-2 after:h-2 after:bg-slate-900 after:border-4 after:box-content after:border-slate-50 
      after:rounded-full md:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
      >
        <div
          className="md:absolute -left-2 translate-y-0.5 inline-flex items-center justify-center text-xs w-24 h-6 mb-3 
        md:mb-0 rounded-full dark:bg-gray-700 bg-gray-800 text-white"
        >
          {date}
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <span className="font-light text-xs text-secondary-foreground">
              {label}
            </span>
            <h3>{title}</h3>
          </div>
          {/* Content */}
          <p className="text-secondary-foreground text-xs tracking-wider leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

interface EducationProps {
  educationData: EducationItemProps[];
}

const Timeline = ({ educationData }: EducationProps) => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="">
        <div className="-my-6">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              label={item.label}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
