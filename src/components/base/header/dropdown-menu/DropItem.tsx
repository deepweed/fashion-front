"use client";

import { AnimatePresence, m } from "framer-motion";
import React from "react";
import clsx from "clsx";
import { useHoverMenu } from "./DropLayout";

interface HoverItemProps {
  id: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const HoverItem = ({
  id,
  trigger,
  children,
  className,
}: HoverItemProps) => {
  const { openKey, openPanel, scheduleClose, cancelClose } = useHoverMenu();
  const open = openKey === id;

  const handleEnter = () => openPanel(id);
  const handleLeave = () => scheduleClose();

  return (
    <div className="relative inline-block">
      <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {trigger}
      </div>

      <AnimatePresence mode="wait">
        {open && (
          <m.div
            key={id}
            onMouseEnter={cancelClose}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={clsx(
              "fixed left-1/2 -translate-x-1/2 top-18 z-40",
              "bg-white p-8 shadow-xs",
              "w-full" /* === customize styles for your project === */,
              className
            )}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
