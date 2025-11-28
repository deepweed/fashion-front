const WorkHeight = () => {
  return (
    <section>
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
                Сборка/разборка/доставка строительных лесов (до 6-ти м.)
              </td>
              <td className="p-2 text-right">10000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">2</td>
              <td className="p-2">
                Альпинист (1 наружный блок) - по индивидуальному расчету
              </td>
              <td className="p-2 text-right">От 15000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">3</td>
              <td className="p-2">
                Автовышка, высота до 18 м (смена 7 часов работы)
              </td>
              <td className="p-2 text-right">От 16000 руб./смена</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">4</td>
              <td className="p-2">
                Монтаж оборудования на высоте от 2,5 до 6 метров с лестницы
              </td>
              <td className="p-2 text-right">От 2000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">5</td>
              <td className="p-2">
                Монтаж оборудования на высоте от 6 до 10 метров
              </td>
              <td className="p-2 text-right">От 5000 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WorkHeight;
