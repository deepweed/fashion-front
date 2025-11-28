import Link from "next/link";
import { HoverItem } from "../DropItem";
import { ChevronDown } from "lucide-react";

const DropdownCatalogSection = () => {
  return (
    <HoverItem
      id="catalog"
      trigger={
        <Link
          className="flex items-center gap-x-2 text-sm font-medium hover:bg-zinc-100 px-3 py-2 rounded-md"
          href={"/catalog"}
        >
          Каталог <ChevronDown size={14} />
        </Link>
      }
    >
      <div className="max-w-400 mx-auto">hello</div>
    </HoverItem>
  );
};

export default DropdownCatalogSection;
