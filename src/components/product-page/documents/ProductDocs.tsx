import type { IProduct } from "@/types/product.interface";
import { FileSpreadsheet } from "lucide-react";
import Link from "next/link";

interface IProductsDocs {
  product: IProduct;
}

const ProductDocs = ({ product }: IProductsDocs) => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-xl font-semibold">Документация</h2>

      {product.documents && product.documents.length > 0 ? (
        <div className="flex flex-col gap-2">
          {product.documents?.map((doc) => (
            <a
              key={doc.id}
              href={doc.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-5 p-3 bg-zinc-100 rounded-lg"
            >
              <FileSpreadsheet size={16} className="text-red-700" />
              <span className="text-sm font-medium">{doc.title}</span>
            </a>
          ))}
        </div>
      ) : (
        <span className="text-sm">Документация отсутствует</span>
      )}
    </div>
  );
};

export default ProductDocs;
