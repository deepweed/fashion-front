import BlogCards from "@/components/main-page/blog-cards/BlogCards";
import CardSwiper from "@/components/main-page/catalog-cards/card-swiper/CardSwiper";
import ReviewBlock from "@/components/main-page/review-cards/ReviewBlock";
import Services from "@/components/main-page/service-cards/Services";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 2xl:px-0">
      <div className="w-full max-w-310 mx-auto my-10 lg:my-20">
        {/* БЛОК КАТАЛОГА */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-5">
          <Link
            className="w-full lg:w-2/3 flex bg-zinc-50 h-38 lg:h-96 rounded-3xl md:rounded-4xl 
             bg-[url('/images/cards/split_card_1.png')] 
             bg-no-repeat bg-position-[right_-100px_center] bg-size-[60%] hover:bg-size-[59%] hover:bg-zinc-100/90 transition-all duration-300"
            href={"/catalog"}
          >
            <div className="w-3/4 md:w-2/3 flex flex-col gap-y-2 md:gap-y-5 p-5 md:p-10">
              <h1 className="text-lg md:text-3xl lg:text-4xl font-medium leading-tight">
                Каталог кондиционеров и сплит-систем
              </h1>
              <span className="w-2/3 text-xs md:text-lg">
                Надёжные решения для вашего пространства и отдыха
              </span>
            </div>
          </Link>

          <Link
            href={"/catalog/belluna"}
            className="
    w-full lg:w-1/3 bg-zinc-800 h-30 lg:h-96 rounded-3xl md:rounded-4xl overflow-hidden
    bg-[url('/images/cards/split_card_2.png')]
    bg-no-repeat
    bg-size-[50%]
    bg-position-[right_-50px_center]
    bg-bottom-10
    lg:bg-size-[120%]
    hover:bg-size-[119%]
    lg:bg-position-[bottom_-65px_center]
    hover:bg-zinc-900/90 transition-all duration-300
  "
          >
            <div className="text-white flex flex-col gap-y-3 p-5 md:p-10">
              <h1 className="w-full md:w-2/3 text-lg md:text-3xl lg:text-4xl font-medium leading-tight">
                Холодильное оборудование
              </h1>
              <span className="w-1/2 md:w-full text-xs md:text-lg">
                Идеальные решения для вашего бизнеса
              </span>
            </div>
          </Link>
        </div>

        {/* БЛОК С БРЕНДАМИ */}
        <CardSwiper />
      </div>

      {/* БЛОГ */}
      <div className="max-w-310 mx-auto">
        <BlogCards />
      </div>

      {/* БЛОК С УСЛУГАМИ */}
      <div className="max-w-310 mx-auto py-20">
        <h2 className="text-4xl font-semibold mb-15">Услуги и прочие работы</h2>
        <Services />
      </div>

      {/* БЛОК С ОТЗЫВАМИ И КАРТОЙ */}
      <div className="max-w-310 mx-auto">
        <h2 className="text-4xl font-semibold mb-10">Отзывы наших клиентов</h2>
        <ReviewBlock />
      </div>
    </main>
  );
}
