import { Collapsible } from "@/components/ui/Collapsible";
import AdditionalWork from "./services/AdditionalWork";
import BellunaEconom from "./services/BellunaEconom";
import BellunaInverter from "./services/BellunaInverter";
import CivilWork from "./services/CivilWork";
import DemontazhWork from "./services/DemontazhWork";
import Drainage from "./services/Drainage";
import ElectroInstallation from "./services/ElectroInstallation";
import IndustrialSplit from "./services/IndustrialSplit";
import InterblockRoute from "./services/InterblockRoute";
import MetalStruct from "./services/MetalStruct";
import MultiSplit from "./services/MultiSplit";
import MultiZone from "./services/MultiZone";
import ServiceWork from "./services/ServiceWork";
import TransportExpenses from "./services/TransportExpenses";
import WallMountedSplit from "./services/WallMountedSplit";
import WallStandartInstallation from "./services/WallStandartInstallation";
import WorkHeight from "./services/WotkHeight";

import Image from "next/image";

const ServicePage = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-5">
        Включая монтаж сплит-систем и холодильного оборудования, мы
        предоставляем ряд других услуг
      </h2>
      <div className="text-sm text-zinc-700 mb-3">
        Например, мы предлагаем широкий спектр профессиональных услуг для
        комплексного обслуживания. Включая установку зимних комплектов и
        нестандартных креплений, прокладку трасс и дренажных систем, пайку
        медных труб, электромонтаж и общестроительные работы, а также
        высокотехнологичные методы, такие как алмазное бурение и высотные работы
        с применением автовышек и альпинизма.
      </div>
      <div className="text-sm text-zinc-700">
        Кроме того, выполняем демонтаж внутреннего и наружного оборудования
        любой мощности, а также оказываем сервисное обслуживание с выездом на
        объект, диагностику и мелкий ремонт. Все работы выполняются
        квалифицированными мастерами с использованием современного оборудования
        и качественных материалов, обеспечивая надежность и долговечность вашего
        оборудования.
      </div>
      <div className="border-b border-zinc-100 w-full my-10"></div>
      <h2 className="text-xl font-semibold mb-5">Как заказать услугу?</h2>
      <div className="text-sm text-zinc-700 mb-3">
        Чтобы заказать услугу, достаточно выбрать подходящую сплит-систему или
        холодильное оборудование на нашем сайте и оформить заявку. В процессе
        дальнейшего обсуждения вы можете указать необходимые дополнительные
        работы или опции.
      </div>
      <div className="text-sm text-zinc-700 mb-3">
        Если у вас возникнут вопросы, воспользуйтесь формой обратного звонка,
        выбрав пункт «Консультация по услугам», или позвоните напрямую по
        телефону <span className="text-blue-600">8 (800) 444-44-44</span>, и
        наши специалисты с радостью помогут вам подобрать и оформить все
        необходимые услуги.
      </div>
      <Image
        className="mb-10"
        src={"/timeless.png"}
        width={1280}
        height={900}
        alt="tIMELESS"
      />
      <div className="text-sm text-zinc-700 mb-3">
        Ниже представлено описание основных работ и условий, которые входят в
        стандартный монтаж у нас.
      </div>
      <div className="flex flex-col gap-y-4 mb-5">
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>
            Выезд монтажной бригады по г. Раменское и г. Жуковский и в радиусе 5
            км, свыше 5 км - 30 руб./км
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>
            Cверление отверстия в стене для прокладки межблочных коммуникаций,
            толщина стены не более 60 см
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>
            Монтаж внутреннего блока, монтаж наружного блока кондиционера
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>
            Прокладка фреоновой магистрали в сборке длиной до 3 м.п., дренажной
            трубы, кабеля электропитания
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Обжимка электрических (пвс) кабелей</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Металлопластиковая труба для отвода конденсата</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Герметизация отверстия</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Обмотка трассы тефлоновой (пвх) лентой</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Работа с использованием пылесоса</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Уборка зоны работ</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Пуско-наладка кондиционера, проверка основных функций</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Фиксация трассы к фасаду</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Работа на высоте не более 2,5 м</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Фасад здания не вентилируемый, не "мокрый"</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>
            Свободны доступ из окна/с балкона, внешний блок крепится на
            кронштейны
          </div>
        </div>
      </div>
      <h3 className="text-sm font-semibold mb-5">
        Расходный материал входящий в стоимость стандартного монтажа:
      </h3>
      <div className="flex flex-col gap-y-4 mb-5">
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Труба медная по нормативу к кондиционеру (до 3 м.п.)</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Теплоизоляция (до 3 м.п.)</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Кронштейн окрашенный белый — комплект одна пара</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Короб пластиковый декоративный: 74*55 мм до 0.50 м.п</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Кабель ПВС:3*1,5 мм кв до 3 м.п., 4*1,5 мм кв до 4 м.п.)</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Электрическая вилка — 1 шт.</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Труба дренажная гофрированная 16 мм – до 3 м.п.</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Тефлоновая (пвх) лента</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Комплект метизов для монтажа</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="text-zinc-300">—</span>
          <div>Металлопластиковая труба для отвода конденсата – до 0.6 м.п</div>
        </div>
      </div>
      <div className="border-b border-zinc-100 w-full my-10"></div>
      <Collapsible title="Настенные сплит-системы (стандартный монтаж)">
        <WallStandartInstallation />
      </Collapsible>

      <Collapsible title="Настенные сплит-системы (монтаж блоков)">
        <WallMountedSplit />
      </Collapsible>

      <Collapsible title="Полупромышленные сплит-системы (монтаж блоков)">
        <IndustrialSplit />
      </Collapsible>

      <Collapsible title="Мульти-сплит системы">
        <MultiSplit />
      </Collapsible>

      <Collapsible title="Холодильное оборудование Belluna (Лайт, Эконом)">
        <BellunaEconom />
      </Collapsible>

      <Collapsible title="Холодильное оборудование Belluna (Инвертор, Шубы)">
        <BellunaInverter />
      </Collapsible>

      <Collapsible title="Мультизональные системы RMX, VRV">
        <MultiZone />
      </Collapsible>

      <Collapsible title="Дополнительные работы и опции">
        <AdditionalWork />
      </Collapsible>

      <Collapsible title="Межблочная трасса">
        <InterblockRoute />
      </Collapsible>

      <Collapsible title="Дренаж">
        <Drainage />
      </Collapsible>

      <Collapsible title="Электромонтаж">
        <ElectroInstallation />
      </Collapsible>

      <Collapsible title="Общестроительные работы">
        <CivilWork />
      </Collapsible>

      <Collapsible title="Металлоконструкции">
        <MetalStruct />
      </Collapsible>

      <Collapsible title="Высотные работы">
        <WorkHeight />
      </Collapsible>

      <Collapsible title="Демонтажные работы">
        <DemontazhWork />
      </Collapsible>

      <Collapsible title="Сервисные работы">
        <ServiceWork />
      </Collapsible>

      <Collapsible title="Транспортные и другие расходы">
        <TransportExpenses />
      </Collapsible>
    </div>
  );
};

export default ServicePage;
