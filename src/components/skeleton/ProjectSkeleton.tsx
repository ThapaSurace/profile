import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(4)].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center md:flex-row gap-3 md:gap-8 cursor-pointer"
        >
          <div
            className={`rounded-md relative w-full md:flex-[1]  h-60 shadow`}
          >
            <Skeleton className="rounded-md object-cover object-center h-full" />
          </div>
          <div className={`flex-[1] flex flex-col justify-between gap-4`}>
            <div>
              <Skeleton className="mb-4 w-full h-8" />

              <div className="space-y-1">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-[50%] h-4" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 flex-wrap">
                {[...Array(4)].map((tag: any, index: any) => (
                  <Skeleton key={index} className="flex-1 h-4 rounded-full" />
                ))}
              </div>
              <div className="flex justify-center md:justify-start gap-4 items-center">
                <Skeleton className="w-16 h-10" />
                <Skeleton className="w-16 h-10" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSkeleton;
