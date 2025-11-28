import Image from "next/image";

const WallStandartInstallation = () => {
  return (
    <div className="overflow-x-auto p-3 rounded-md border border-zinc-300 mb-5">
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
              Монтаж, настенного кондиционера 07-09 (Dтруб=6.35/9.52мм)
              (Q0=1.5-3 кВт)
            </td>
            <td className="p-2 text-right">13000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">2</td>
            <td className="p-2">
              Монтаж настенного кондиционера 12 (Dтруб=6.35/12.70мм) (Q0=3.5-4.5
              кВт)
            </td>
            <td className="p-2 text-right">15000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">3</td>
            <td className="p-2">
              Монтаж настенного кондиционера 18 (Dтруб=6.35/12.70мм) (Q0=4.5-6.0
              кВт)
            </td>
            <td className="p-2 text-right">18000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">4</td>
            <td className="p-2">
              Монтаж настенного кондиционера 24 (Dтруб=6.35/15.88мм) (Q0=6.0-8.1
              кВт)
            </td>
            <td className="p-2 text-right">22000 руб.</td>
          </tr>
          <tr>
            <td className="p-2">5</td>
            <td className="p-2">
              Монтаж настенного кондиционера 36 (Dтруб=9.52/15.88мм)
              (Q0=9.0-10.1 кВт)
            </td>
            <td className="p-2 text-right">32000 руб.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WallStandartInstallation;
