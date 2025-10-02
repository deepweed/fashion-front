import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { Menu, Phone, ShoppingCart } from "lucide-react";
import SlideHeaderMenuWrapper from "./slide-menu/SlideMenuWrapper";

const Header = () => {
  return (
    <header className="border border-b border-zinc-100 sticky top-0 z-30">
      <div className="h-20 px-4 flex items-center justify-between bg-white/95 backdrop-blur-lg">
        <Link href={"/"}>
          <Image
            src={"/logo-full.svg"}
            width={200}
            height={38}
            alt="PROхолод"
          />
        </Link>
        <div className="flex items-center gap-x-6">
          <ShoppingCart size={20} strokeWidth={2.1} />
          <Phone size={20} strokeWidth={2.1} />
          <SlideHeaderMenuWrapper />
        </div>
      </div>
    </header>
  );
};

export default Header;
