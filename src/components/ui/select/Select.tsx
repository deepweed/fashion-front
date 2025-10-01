import { useOutside } from "@/hooks/useOutside";
import cn from "clsx";
import { ChevronDown } from "lucide-react";
import { type ISelect } from "./select.interface";

export function Select<K>({
  data,
  onChange,
  value,
  title,
  isMobile,
}: ISelect<K>) {
  const { isShow, ref, setIsShow } = useOutside(false);

  return (
    <div className="relative inline-block text-left w-full" ref={ref}>
      <button
        onClick={() => setIsShow(!isShow)}
        className={
          isMobile
            ? "flex items-center gap-x-2 text-zinc-500 text-[12px] font-medium"
            : "w-full bg-zinc-100 border border-slate-300 rounded-md shadow-sm px-3 py-2 sm:px-4 sm:py-2 font-medium text-zinc-600 hover:bg-slate-200 text-left z-10 truncate"
        }
      >
        {title && <span className="text-zinc-500">{title}:</span>}
        <span className="truncate max-w-[40px] block">
          {value?.label || "Выбрать"}
        </span>
        <ChevronDown size={16} strokeWidth={2} className="text-zinc-400" />
      </button>
      {isShow && (
        <ul
          className="absolute z-10 mt-1 w-full bg-zinc-100 max-h-60 
             rounded-md py-1 border border-slate-300 shadow-sm 
             overflow-auto focus:outline-none text-sm"
          role="listbox"
        >
          {data.map((item) => (
            <li
              key={item.key?.toString()}
              className={cn(
                "text-zinc-600 cursor-pointer select-none relative py-2 pl-3 pr-9"
              )}
              onClick={() => {
                onChange(item);
                setIsShow(false);
              }}
            >
              <span
                className={cn("block truncate", {
                  "font-semibold": item.key === value?.key,
                })}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
