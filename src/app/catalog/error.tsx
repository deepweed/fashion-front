"use client";

import Heading from "@/components/ui/Heading";

export default function CatalogError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-10 text-center">
      <Heading className="mb-5">Каталог недоступен</Heading>
      <p className="text-gray-500 mb-5">
        {error.message || "Не удалось загрузить каталог. Попробуйте позже."}
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
      >
        Повторить попытку
      </button>
    </div>
  );
}
