"use client";

import { SlidePanel } from "@/components/ui/SlidePanel";
import { Menu } from "lucide-react";
import { useState } from "react";

const SlideHeaderMenuWrapper = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <Menu size={20} strokeWidth={2.1} />
      </button>

      <SlidePanel
        isOpen={open}
        onClose={() => setOpen(false)}
        position="left"
        title="Фильтры"
      >
        Hello
      </SlidePanel>
    </>
  );
};

export default SlideHeaderMenuWrapper;
