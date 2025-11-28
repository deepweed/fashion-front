import Image from "next/image";

const IndustrialSplit = () => {
  return (
    <section>
      <div className="text-sm text-zinc-700 mb-3">
        Стоимость межблочной трассы, сверление отверстий, электромонтажные
        работы рассчитываются отдельно по прайсу исходя из индивидуальных
        условий объекта
      </div>

      <div className="overflow-x-auto p-3 mb-5 rounded-md border border-zinc-300">
        <table className="min-w-[400px] w-full text-sm text-zinc-700 border-collapse">
          <thead>
            <tr className="bg-zinc-100">
              <th className="p-2 text-left w-12">№</th>
              <th className="p-2 text-left">Услуга</th>
              <th className="p-2 text-right w-32">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-200">
              <td className="p-2">1</td>
              <td className="p-2">
                Монтаж полупромышленного кондиционера 12 (D труб=6.35/12.70мм)
                (Q0=3.0-4.5 кВт)
              </td>
              <td className="p-2 text-right">10000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">2</td>
              <td className="p-2">
                Монтаж полупромышленного кондиционера 18 (D труб=6.35/12.70мм)
                (Q0=4.5-6.0 кВт)
              </td>
              <td className="p-2 text-right">12000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">3</td>
              <td className="p-2">
                Монтаж полупромышленного кондиционера 24 (D труб=6.35/15.88мм)
                (Q0=6.0-8.1 кВт)
              </td>
              <td className="p-2 text-right">14000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">4</td>
              <td className="p-2">
                Монтаж полупромышленного кондиционера 28-36 (D
                труб=9.52/15.88мм) (Q0=8.1-11 кВт)
              </td>
              <td className="p-2 text-right">16000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">5</td>
              <td className="p-2">
                Монтаж полупромышленного кондиционера 48 (D труб=9.52/19.05мм)
                (Q0=11-15 кВт)
              </td>
              <td className="p-2 text-right">20000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">6</td>
              <td className="p-2">
                Монтаж полупромышленного кондиционера 54-60 (D
                труб=12.70/19.05мм)(Q0=15-18 кВт)
              </td>
              <td className="p-2 text-right">25000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">7</td>
              <td className="p-2">
                Монтаж полупромышленного кондиционера 75 (D труб=12.70/19.05мм)
                (Q0=18-22 кВт)
              </td>
              <td className="p-2 text-right">30000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">8</td>
              <td className="p-2">
                Монтаж полупромышленного кондиционера 100 (D труб=15.88/28.58мм)
                (Q0=22-29 кВт)
              </td>
              <td className="p-2 text-right">40000 руб.</td>
            </tr>
            <tr>
              <td className="p-2">9</td>
              <td className="p-2">
                Монтаж полупромышленного кондиционера 125 (D труб=15.88/34.92мм)
                (Q0=29-34 кВт)
              </td>
              <td className="p-2 text-right">50000 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IndustrialSplit;
