"use client";

import { SlidePanel } from "@/components/ui/SlidePanel";
import { ChartNoAxesGantt } from "lucide-react";
import { useState } from "react";

const SlideFiltersWrapper = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2 text-zinc-500 text-[12px] font-medium"
      >
        <ChartNoAxesGantt size={10} strokeWidth={2} />
        <span>Показать все фильтры</span>
      </button>

      <SlidePanel
        isOpen={open}
        onClose={() => setOpen(false)}
        position="left"
        title="Фильтры"
      >
        <div className="px-7 flex flex-col gap-y-5">
          Filters Here <span>gf</span>
        </div>
      </SlidePanel>
    </>
  );
};

export default SlideFiltersWrapper;
