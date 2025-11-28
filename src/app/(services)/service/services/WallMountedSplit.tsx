import Image from "next/image";

const WallMountedSplit = () => {
  return (
    <section>
      <div className="text-sm text-zinc-700 mb-3">
        В стоимость включены необходимые расходные материалы.
      </div>

      <div className="overflow-x-auto p-3 rounded-md border border-zinc-200 mb-5">
        <table className="min-w-[400px] w-full text-sm text-zinc-700 rounded-md border-collapse">
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
                Монтаж блоков настенного кондиционера 07-09 (Dтруб=6.35/9.52мм)
                (Q0=1.5-3 кВт)
              </td>
              <td className="p-2 text-right">8000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">2</td>
              <td className="p-2">
                Монтаж блоков настенного кондиционера 12 (Dтруб=6.35/12.70мм)
                (Q0=3.5-4.5 кВт)
              </td>
              <td className="p-2 text-right">9000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">3</td>
              <td className="p-2">
                Монтаж блоков настенного кондиционера 18 (Dтруб=6.35/12.70мм)
                (Q0=4.5-6.0 кВт)
              </td>
              <td className="p-2 text-right">12000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">4</td>
              <td className="p-2">
                Монтаж блоков настенного кондиционера 24 (Dтруб=6.35/15.88мм)
                (Q0=6.0-8.1 кВт)
              </td>
              <td className="p-2 text-right">14000 руб.</td>
            </tr>
            <tr>
              <td className="p-2">5</td>
              <td className="p-2">
                Монтаж блоков настенного кондиционера 28-36 (Dтруб=9.52/15.88мм)
                (Q0=8.1-11.0 кВт)
              </td>
              <td className="p-2 text-right">16000 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WallMountedSplit;
