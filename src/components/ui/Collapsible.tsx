"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export const Collapsible = ({ title, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-1 mb-2">
      <button
        className="w-full flex justify-between items-center font-semibold text-sm transition-colors duration-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
      </button>

      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isOpen && <div className="pt-2">{children}</div>}
      </div>
    </div>
  );
};
