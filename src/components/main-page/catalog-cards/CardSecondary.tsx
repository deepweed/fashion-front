import cn from "clsx";
import Image from "next/image";
import Link from "next/link";

interface ICardSecondary {
  href: string;
  alt: string;
  imageLink: string;
}

const CardSecondary = ({ href, alt, imageLink }: ICardSecondary) => {
  return (
    <Link
      href={href}
      className="w-30 h-20 bg-white border border-zinc-100 rounded-4xl flex items-center justify-center hover:border-zinc-200"
    >
      <Image
        className="p-3 object-contain"
        src={imageLink}
        width={100}
        height={50}
        alt={alt}
      />
    </Link>
  );
};

export default CardSecondary;
