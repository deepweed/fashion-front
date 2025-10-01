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
      onClick={onClick}
      className={cn("flex items-center gap-x-2 cursor-pointer")}
    >
      <span className="w-5 h-5 border border-zinc-300 rounded-md flex items-center justify-center">
        {isChecked && <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>}
      </span>
      <span className="text-md">{children}</span>
    </button>
  );
};

export default Checkbox;
