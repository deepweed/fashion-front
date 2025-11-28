const TransportExpenses = () => {
  return (
    <section>
      <div className="overflow-x-auto p-3 rounded-md border border-zinc-300">
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
                Выезд монтажной бригады за пределы Раменского свыше 15 км
              </td>
              <td className="p-2 text-right"> + 30 руб./1км</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">2</td>
              <td className="p-2">Выезд монтажной бригады в Москву</td>
              <td className="p-2 text-right">2000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">3</td>
              <td className="p-2">Ложный выезд монтажной бригады на объект</td>
              <td className="p-2 text-right">3500 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">4</td>
              <td className="p-2">
                Вынужденный простой монтажной бригады, час
              </td>
              <td className="p-2 text-right">2000 руб./час</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">5</td>
              <td className="p-2">
                Подъем оборудования (инструмента) без лифта, цена за каждый
                наружный блок (за комплект инструментов)
              </td>
              <td className="p-2 text-right">300 руб./этаж</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">6</td>
              <td className="p-2">
                Транспортировка, перевозка оборудования клиента в сервис-центр и
                обратно
              </td>
              <td className="p-2 text-right">От 1500 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">7</td>
              <td className="p-2">
                Выезд технического специалиста для консультаций, обмеров,
                разметки.
              </td>
              <td className="p-2 text-right">1500 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">8</td>
              <td className="p-2">
                Прорисовка штроб на объекте, для рабочих Заказчика, за единицу
              </td>
              <td className="p-2 text-right">1500 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">9</td>
              <td className="p-2">
                Минимальная стоимость работы монтажной бригады из 2-х чел, час
              </td>
              <td className="p-2 text-right">3000 руб./час</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransportExpenses;
