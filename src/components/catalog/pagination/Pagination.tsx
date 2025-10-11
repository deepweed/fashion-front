import Button from "@/components/ui/Button";
import { type FC } from "react";

interface IPagination {
  numberPages: number;
  changePage: (page: string) => void;
  currentPage?: string;
}

const Pagination: FC<IPagination> = ({
  numberPages,
  changePage,
  currentPage = 1,
}) => {
  return (
    <div className="text-center mt-10">
      {Array.from({
        length: numberPages > 1 ? Math.ceil(numberPages) : 1,
      }).map((_, index) => {
        const pageNumber = (index + 1).toString();

        return (
          <Button
            key={pageNumber}
            color="gray"
            onClick={() => changePage(pageNumber)}
            className="px-5 py-3 rounded-full text-zinc-600"
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
