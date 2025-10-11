import type { FC, PropsWithChildren } from "react";

interface IFilterWrapper {
  title: string;
}

const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({
  title,
  children,
}) => {
  return (
    <div className="mb-3">
      <div className="mb-3 font-semibold text-[18px]">{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default FilterWrapper;
