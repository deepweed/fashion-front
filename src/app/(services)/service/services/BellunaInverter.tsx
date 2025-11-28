const BellunaInverter = () => {
  return (
    <section>
      <div className="text-sm text-zinc-700 mb-3">
        * при длинне трассы до 5 м, удаленность блока управления 2 м, бурение
        одного отверстия D=50 мм
      </div>

      <div className="overflow-x-auto p-3 mb-5 rounded-md border border-zinc-300">
        <table className="min-w-[400px] w-full text-sm text-zinc-700 border-collapse">
          <thead>
            <tr className="bg-zinc-100">
              <th className="p-2 text-left w-12">№</th>
              <th className="p-2 text-left">Модель</th>
              <th className="p-2 text-right w-32">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-200">
              <td className="p-2">1</td>
              <td className="p-2">IP-1</td>
              <td className="p-2 text-right">20000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">2</td>
              <td className="p-2">IP-2</td>
              <td className="p-2 text-right">24000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">3</td>
              <td className="p-2">IP-3</td>
              <td className="p-2 text-right">29000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">4</td>
              <td className="p-2">IP-4</td>
              <td className="p-2 text-right">34000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">5</td>
              <td className="p-2">IP-5</td>
              <td className="p-2 text-right">42000 руб.</td>
            </tr>
            <tr>
              <td className="p-2">6</td>
              <td className="p-2">IP-6</td>
              <td className="p-2 text-right">44000 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BellunaInverter;
