// components/SlidePanel.tsx

import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";
import React, { type PropsWithChildren } from "react";

type Position = "left" | "right";

export interface SlidePanelProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  position?: Position;
  title?: string;
}

export const SlidePanel: React.FC<SlidePanelProps> = ({
  isOpen,
  onClose,
  position = "left",
  title,
  children,
}) => {
  const HEADER_SHIFT_PX = 96;
  /* variants для разных направлений */
  const variants = {
    left: {
      hidden: { x: "-100%", y: 0 },
      visible: { x: 0, y: 0 },
    },
    right: {
      hidden: { y: `calc(-100% - ${HEADER_SHIFT_PX}px)` },
      visible: { y: HEADER_SHIFT_PX },
      exit: { y: `calc(-100% - ${HEADER_SHIFT_PX}px)` },
    },
  } as const;

  /* вычисляем основные классы в зависимости от позиции */
  const baseClasses =
    "fixed bg-white shadow-xl overflow-y-auto z-40 flex flex-col";
  const positionClasses =
    position === "left"
      ? "top-0 left-0 h-screen w-[80vw] xl:w-[25vw]"
      : "top-0 left-0 h-screen w-[80vw] xl:w-[25vw]";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <m.div
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Сама выезжающая панель */}
          <m.aside
            className={`${baseClasses} ${positionClasses}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants[position]}
            transition={{ type: "tween", duration: 0.35 }}
          >
            {position === "left" ? (
              <div className="flex justify-between items-center p-7 mb-10">
                <h2 className="font-semibold text-3xl">{title}</h2>
                <X size={34} onClick={onClose} />
              </div>
            ) : null}
            {children}
          </m.aside>
        </>
      )}
    </AnimatePresence>
  );
};
