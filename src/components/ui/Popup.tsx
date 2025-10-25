import { createPortal } from "react-dom";
import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  const popupContent = (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40"
        >
          <m.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full mt-30"
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl font-bold">{title}</h1>
                <div className="p-2 bg-zinc-100 rounded-full cursor-pointer">
                  <X
                    size={12}
                    strokeWidth={2.5}
                    className="text-zinc-600"
                    onClick={onClose}
                  />
                </div>
              </div>
              {children}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );

  return typeof window !== "undefined"
    ? createPortal(popupContent, document.body)
    : null;
};

export default Popup;
