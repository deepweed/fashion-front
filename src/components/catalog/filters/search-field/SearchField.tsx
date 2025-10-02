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
    <div className="relative w-full mb-6">
      <Search
        size={20}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-zinc-400"
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Поиск по каталогу.."
        className="w-full text-sm pl-10 pr-4 py-2 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent bg-zinc-100"
      />
    </div>
  );
}
