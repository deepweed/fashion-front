import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react"; // пример иконки

const Footer = () => {
  return (
    <footer className="px-4 2xl:px-0 2xl:max-w-[1640px] 2xl:mx-auto mt-20">
      <div className="border-t border-zinc-200">
        {/* Верхний блок: логотип + иконки */}
        <div className="flex items-center justify-between py-6">
          <Link href={"/"}>
            <Image
              src={"/logo-full.svg"}
              width={200}
              height={38}
              alt="PROхолод"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Link 1">
              <X className="w-5 h-5 text-zinc-600 hover:text-zinc-900 transition" />
            </Link>
            <Link href="#" aria-label="Link 2">
              <X className="w-5 h-5 text-zinc-600 hover:text-zinc-900 transition" />
            </Link>
          </div>
        </div>

        {/* Нижний блок: сетка ссылок и подписка */}
        <div className="flex flex-col xl:flex-row xl:justify-between gap-10 my-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-10 text-sm">
            {/* Resources */}
            <div>
              <h4 className="font-medium mb-3 text-zinc-900">Основное</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <Link href="#">Основной каталог</Link>
                </li>
                <li>
                  <Link href="#">Холодильное оборудование</Link>
                </li>
                <li>
                  <Link href="#">Каталог Ballu</Link>
                </li>
                <li>
                  <Link href="#">Каталог Biryusa</Link>
                </li>
                <li>
                  <Link href="#">Каталог Dahaci</Link>
                </li>
                <li>
                  <Link href="#">Каталог Hisense</Link>
                </li>
                <li>
                  <Link href="#">Каталог Ishimatsu</Link>
                </li>
                <li>
                  <Link href="#">Каталог TCL</Link>
                </li>
                <li>
                  <Link href="#">Каталог Shuft</Link>
                </li>
                <li>
                  <Link href="#">Каталог Mitsubishi Electric</Link>
                </li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h4 className="font-medium mb-3 text-zinc-900">Услуги</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <Link href="#">Дренаж</Link>
                </li>
                <li>
                  <Link href="#">Отверстие</Link>
                </li>
                <li>
                  <Link href="#">Колесо</Link>
                </li>
                <li>
                  <Link href="#">Вилка</Link>
                </li>
                <li>
                  <Link href="#">Лопата</Link>
                </li>
                <li>
                  <Link href="#">Грабли</Link>
                </li>
                <li>
                  <Link href="#">Забор</Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-medium mb-3 text-zinc-900">Блог</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <Link href="#">Как выбрать кондей</Link>
                </li>
                <li>
                  <Link href="#">Уход за оборудованием</Link>
                </li>
                <li>
                  <Link href="#">Монтаж самостоятельно</Link>
                </li>
                <li>
                  <Link href="#">Еще что то например</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-zinc-900">Дополнительно</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <Link href="#">Next.js + Vercel</Link>
                </li>
                <li>
                  <Link href="#">Open Source Software</Link>
                </li>
                <li>
                  <Link href="#">GitHub</Link>
                </li>
                <li>
                  <Link href="#">Bluesky</Link>
                </li>
                <li>
                  <Link href="#">X</Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-medium mb-3 text-zinc-900">Юридеческое</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Cookie Preferences</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div className="max-w-sm">
            <h4 className="font-semibold mb-3 text-zinc-900">Рекивизиты</h4>
            <p className="text-sm text-zinc-600 mb-3">реквизиты тут</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
