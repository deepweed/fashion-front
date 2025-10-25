"use client";

import Button from "@/components/ui/Button";
import { m, AnimatePresence } from "framer-motion";

interface OrderSuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const OrderSuccessPopup = ({
  isOpen,
  onClose,
  children,
}: OrderSuccessPopupProps) => {
  return (
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
              {children}
              <Button
                color="blue"
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium h-14 mt-5 rounded-full transition"
              >
                Хорошо
              </Button>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default OrderSuccessPopup;
