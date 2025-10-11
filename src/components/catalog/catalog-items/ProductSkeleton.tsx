import { type FC } from "react";

const SkeletonLoader: FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-zinc-50 rounded-2xl h-130 w-full"
        >
          <div className="h-full w-full bg-zinc-100 rounded-xl"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
