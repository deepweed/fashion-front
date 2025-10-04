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
      color="gray"
      className="mt-5 h-10 rounded-lg"
      onClick={resetHandler}
    >
      <RefreshCcw size={16} />
      Сбросить фильтры
    </Button>
  );
}
