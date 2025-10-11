"use client";

import { AnimatePresence, m } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  isOpenedDefault?: boolean;
}

export const Collapsible = ({
  title,
  children,
  isOpenedDefault,
}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-3 mb-3 border-b border-zinc-200 last:border-0 last:pb-0 last:mb-0">
      <button
        className="w-full flex justify-between items-center font-semibold text-[18px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{title}</span>

        {/* Анимация стрелки */}
        <m.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-blue-500" size={18} strokeWidth={2.4} />
        </m.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <m.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="pt-4"
            >
              {children}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
