import cn from "clsx";
import type { FC, PropsWithChildren } from "react";

interface ICheckbox {
  isChecked: boolean;
  onClick: () => void;
  className?: string;
}

const CheckboxRounded: FC<PropsWithChildren<ICheckbox>> = ({
  isChecked,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between cursor-pointer",
        className
      )}
    >
      <span className="text-base">{children}</span>
      <span className="w-6 h-6 bg-white border border-zinc-300 rounded-full flex items-center justify-center">
        {isChecked && (
          <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
        )}
      </span>
    </button>
  );
};

export default CheckboxRounded;
