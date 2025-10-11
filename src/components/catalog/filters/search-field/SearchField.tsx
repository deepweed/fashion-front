"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useFilters } from "../../useFilters";

export function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { updateQueryParams } = useFilters();

  useEffect(() => {
    updateQueryParams("search", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-zinc-400"
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Поиск по каталогу.."
        className="w-full text-sm pl-10 pr-4 py-3 rounded-xl focus:outline-none  bg-zinc-50"
      />
    </div>
  );
}
