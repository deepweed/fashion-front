import cn from "clsx";
import type { FC, PropsWithChildren } from "react";

interface ICheckbox {
  isChecked: boolean;
  onClick: () => void;
  className?: string;
}

const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({
  isChecked,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={"w-full flex items-center justify-between cursor-pointer"}
    >
      <span className="text-base">{children}</span>
      <span className="w-6 h-6 bg-white border border-zinc-300 rounded-md flex items-center justify-center">
        {isChecked && <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>}
      </span>
    </button>
  );
};

export default Checkbox;
