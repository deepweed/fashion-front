import Image from "next/image";
import Link from "next/link";
import { Phone, PhoneCall, ShoppingCart } from "lucide-react";
import SlideHeaderMenuWrapper from "./slide-menu/SlideMenuWrapper";
import { HEADER_LINKS } from "./header.data";
import Cart from "./cart/Cart";
import PhoneCallback from "./phone-call/PhoneCall";
import { HoverLayout } from "./dropdown-menu/DropLayout";
import DropdownCatalogSection from "./dropdown-menu/drop-sections/CatalogSection";
import DropdownServicesSection from "./dropdown-menu/drop-sections/ServicesSection";

const Header = () => {
  return (
    <header className="border border-b border-zinc-100 sticky top-0 z-30">
      <div className="h-18 px-4 2xl:px-22 flex items-center justify-between bg-white/95 backdrop-blur-lg">
        <Link href={"/"}>
          <Image
            src={"/logo-full.svg"}
            width={200}
            height={38}
            alt="PROхолод"
          />
        </Link>
        <nav className="hidden lg:flex lg:items-center lg:gap-x-2">
          <HoverLayout hideDelay={200}>
            <DropdownCatalogSection />
            <DropdownServicesSection />
          </HoverLayout>
          {HEADER_LINKS.map(({ title, href }, index) => (
            <Link
              className="text-sm font-medium hover:bg-zinc-100 px-3 py-2 rounded-md"
              key={index}
              href={href}
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          <Cart />
          <PhoneCallback />
        </div>
        <div className="flex items-center gap-x-2 lg:hidden">
          <Link className="p-2 bg-zinc-100 rounded-xl" href={"/cart"}>
            <ShoppingCart size={20} strokeWidth={2.1} />
          </Link>
          <Link className="p-2 bg-zinc-100 rounded-xl" href={"/cart"}>
            <Phone size={20} strokeWidth={2.1} />
          </Link>

          <SlideHeaderMenuWrapper />
        </div>
      </div>
    </header>
  );
};

export default Header;
