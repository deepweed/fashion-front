import Link from "next/link";
import { ReviewData } from "./review.data";

const Reviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {ReviewData.map((review, index) => (
        <div
          className="w-full bg-white p-5 shadow-sm flex flex-col rounded-3xl"
          key={index}
        >
          <h3 className="text-sm font-medium mb-2">{review.name}</h3>
          <p className="text-xs leading-tight line-clamp-3 max-w-full">
            {review.description}
          </p>
          <Link
            href={
              "https://yandex.ru/maps/org/prokholod/142837393055/reviews/?ll=38.263416%2C55.543272&tab=reviews&z=17.05"
            }
            target="_blank"
            className="text-xs font-medium text-blue-600 hover:text-blue-800 mt-3"
          >
            Реальный отзыв с Яндекс.Карты
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
