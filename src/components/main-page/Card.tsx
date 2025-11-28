import Link from "next/link";

interface ICardProps {
  title?: string;
  desc?: string;
  className?: string;
}

const Card = () => {
  return (
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
  );
};

export default Card;
