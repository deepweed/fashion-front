import cn from "clsx";
import type { FC, InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<IInput> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={cn(
        "text-sm placeholder:text-blue-200 px-3 outline-none",
        className
      )}
    />
  );
};

export default Input;
