import Link from "next/link";
import YandexMap from "./map/Map";
import Reviews from "./reviews/Reviews";

const ReviewBlock = () => {
  return (
    <div className="flex flex-col gap-4">
      <Reviews />
      <div className="my-1">
        <Link
          href={
            "https://yandex.ru/maps/org/prokholod/142837393055/reviews/?ll=38.263416%2C55.543272&tab=reviews&z=17.05"
          }
          target="_blank"
          className="text-xs md:text-lg font-medium text-blue-600 hover:text-blue-800 mt-3"
        >
          Больше реальных отзывов на Авито →
        </Link>
      </div>
      <div className="w-full">
        <YandexMap width="100%" height="400px" />
      </div>
    </div>
  );
};

export default ReviewBlock;
