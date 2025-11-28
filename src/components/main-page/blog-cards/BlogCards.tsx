import Link from "next/link";
import { BlogData } from "./blog-cards.data";

export default function BlogCards() {
  return (
    <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4">
      {BlogData.map((item, index) => (
        <Link key={index} href={item.link}>
          <div
            className="relative h-72 w-full md:h-80 md:w-60 lg:h-86 lg:w-62 rounded-2xl overflow-hidden shadow-lg bg-cover bg-center flex items-end p-6 text-white"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/80"></div>
            <div className="mb-5">
              <h3 className="text-sm md:text-lg font-semibold opacity-95 mb-2">
                {item.title}
              </h3>
              <p className="text-xs opacity-95">{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
