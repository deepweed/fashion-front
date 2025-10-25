import Image from "next/image";
import Link from "next/link";
import { Phone, PhoneCall, ShoppingCart } from "lucide-react";
import SlideHeaderMenuWrapper from "./slide-menu/SlideMenuWrapper";
import { HEADER_LINKS } from "./header.data";
import Cart from "./cart/Cart";
import PhoneCallback from "./phone-call/PhoneCall";

const Header = () => {
  return (
    <header className="border border-b border-zinc-100 sticky top-0 z-30">
      <div className="h-20 px-4 flex items-center justify-between 2xl:px-0 2xl:max-w-[1640px] 2xl:mx-auto bg-white/95 backdrop-blur-lg">
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
          <Cart />
          <PhoneCallback />
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
