const MultiZone = () => {
  return (
    <section>
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
                Монтаж мультизональная системы RMX, VRV (без учета трасс,
                BP-блоков, рефнет)
              </td>
              <td className="p-2 text-right">(Σцен сплит систем) х1,2</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">2</td>
              <td className="p-2">Пусконаладочные работы системы (RMX, VRV)</td>
              <td className="p-2 text-right">10% от стоимости оборудования</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">3</td>
              <td className="p-2">Установка BP-блока (только работа)</td>
              <td className="p-2 text-right">6500 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">4</td>
              <td className="p-2">
                Опрессовка смонтированной системы азотом (25 Бар)
              </td>
              <td className="p-2 text-right">От 10000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">5</td>
              <td className="p-2">
                Установка рефнет (1 комплект жидкость/газ) (только работа)
              </td>
              <td className="p-2 text-right">3000 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MultiZone;
