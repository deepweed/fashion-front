const BellunaEconom = () => {
  return (
    <section>
      <div className="text-sm text-zinc-700 mb-3">
        * при длинне трассы до 5 м, удаленность блока управления 2 м, бурение
        одного отверстия D=50 мм
      </div>

      <div className="overflow-x-auto mb-5 p-3 rounded-md border border-zinc-300">
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
              <td className="p-2">S115 - S115W</td>
              <td className="p-2 text-right">19000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">2</td>
              <td className="p-2">S218 - S218W</td>
              <td className="p-2 text-right">21000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">3</td>
              <td className="p-2">S226 - S226W</td>
              <td className="p-2 text-right">25000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">4</td>
              <td className="p-2">S232 - S232W</td>
              <td className="p-2 text-right">28000 руб.</td>
            </tr>
            <tr>
              <td className="p-2">5</td>
              <td className="p-2">S342 - S342W</td>
              <td className="p-2 text-right">34000 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BellunaEconom;
