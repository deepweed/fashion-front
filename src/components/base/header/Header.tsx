import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  GraduationCap,
  Phone,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import SlideHeaderMenuWrapper from "./slide-menu/SlideMenuWrapper";
import Button from "@/components/ui/Button";
import { HEADER_LINKS } from "./header.data";

const Header = () => {
  return (
    <header className="border border-b border-zinc-100 sticky top-0 z-30">
      <div className="h-20 px-4 flex items-center justify-between 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto bg-white/95 backdrop-blur-lg">
        <div className="flex items-center gap-x-20">
          <Link href={"/"}>
            <Image
              src={"/logo-full.svg"}
              width={200}
              height={38}
              alt="PROхолод"
            />
          </Link>
          <nav className="hidden lg:flex lg:items-center lg:gap-x-7">
            {HEADER_LINKS.map(({ title, href }, index) => (
              <Link
                className="text-sm text-zinc-500 hover:text-blue-600 transition-colors duration-300"
                key={index}
                href={href}
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          <Link
            className="flex items-center gap-x-2 text-blue-700"
            href={"/cart"}
          >
            <ShoppingBasket size={16} strokeWidth={2.5} />
            <span className="text-sm font-medium">Корзина</span>
          </Link>
          <div className="flex items-center gap-x-2">
            {/* TODO: вынести, при наведении выпадающее меню со ссылками */}
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-4 border-double border-white">
              <GraduationCap
                className="text-white"
                size={16}
                strokeWidth={2.5}
              />
            </div>
            <ChevronDown
              className="text-blue-600"
              size={16}
              strokeWidth={2.5}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-6 lg:hidden">
          <ShoppingCart size={20} strokeWidth={2.1} />
          <Phone size={20} strokeWidth={2.1} />
          <SlideHeaderMenuWrapper />
        </div>
      </div>
    </header>
  );
};

export default Header;
