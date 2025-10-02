import { type ReactNode } from "react";
import { clsx } from "clsx";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: "blue" | "white" | "gray";
  disabled?: boolean;
};

const Button = ({
  children,
  className,
  onClick,
  type = "button",
  color = "blue",
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    "disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-8 cursor-pointer transition-colors";

  const colorStyles = {
    blue: "bg-blue-600 text-white hover:bg-blue-700",
    white: "bg-white text-black shadow",
    gray: "bg-zinc-200 text-black hover:bg-zinc-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, colorStyles[color], className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
