"use client";
import useFiltersStore from "@/store/catalog.store";
import Button from "@/components/ui/Button";

import { RefreshCcw } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function ResetButton() {
  const { reset } = useFiltersStore();
  const router = useRouter();
  const pathname = usePathname();

  const resetHandler = () => {
    reset();
    router.replace(pathname);
  };

  return (
    <Button
      color="white"
      className="mt-5 h-12 rounded-2xl border border-zinc-100"
      onClick={resetHandler}
    >
      <RefreshCcw size={16} />
      Сбросить фильтры
    </Button>
  );
}
