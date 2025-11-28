const InterblockRoute = () => {
  return (
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
              Прокладка трассы 6,35/9,52 мм. без короба (трубопроводы,
              теплоизоляция; межблочный кабель, дренаж вместе с трассой) , за
              м.п
            </td>
            <td className="p-2 text-right">1500 руб./м.п</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">2</td>
            <td className="p-2">
              Прокладка трассы 6,35/12,70 мм свыше 5-ти м.п. без короба
              (трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с
              трассой), за м.п
            </td>
            <td className="p-2 text-right">1700 руб./м.п</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">3</td>
            <td className="p-2">
              Прокладка трассы 6,35/15,88 мм свыше 5-ти м.п. без короба
              (трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с
              трассой), за м.п
            </td>
            <td className="p-2 text-right">2000 руб./м.п</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">4</td>
            <td className="p-2">
              Прокладка трассы 9,52/15,88 мм свыше 5-ти м.п. без короба
              (трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с
              трассой), за м.п
            </td>
            <td className="p-2 text-right">2200 руб./м.п</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">6</td>
            <td className="p-2">
              Прокладка трассы 9,52/19,05 мм свыше 5-ти м.п. без короба
              (трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с
              трассой), за м.п
            </td>
            <td className="p-2 text-right">2400 руб./м.п</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">7</td>
            <td className="p-2">
              Прокладка трассы 12,70/19,05 мм свыше 5-ти м.п. без короба
              (трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с
              трассой), за м.п
            </td>
            <td className="p-2 text-right">2800 руб./м.п</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">8</td>
            <td className="p-2">
              Прокладка трассы 15,88/28,58 мм свыше 5-ти м.п. без короба
              (трубопроводы, теплоизоляция; межблочный кабель), за м.п
            </td>
            <td className="p-2 text-right">3200 руб./м.п</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">9</td>
            <td className="p-2">
              Прокладка трассы 15,88/34,92 мм свыше 5-ти м.п. без короба
              (трубопроводы, теплоизоляция; межблочный кабель), за м.п
            </td>
            <td className="p-2 text-right">3600 руб./м.п</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">10</td>
            <td className="p-2">
              Прокладка дополнительного пластикового короба под трассу 55х75, за
              м.п
            </td>
            <td className="p-2 text-right">1000 руб./м.п</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">11</td>
            <td className="p-2">
              Элемент фурнитуры 55х75 / Монтаж лотков под трассу (только работа)
              1000 руб за м.п / Монтаж лотков под трассу (с материалом) 2000 руб
              за м.п
            </td>
            <td className="p-2 text-right">350 руб. шт</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">12</td>
            <td className="p-2">
              Пайка медного трубопровода (d=6,35 - 12,70 мм)
            </td>
            <td className="p-2 text-right">750 руб./точка</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">13</td>
            <td className="p-2">
              Пайка медного трубопровода (d=15,88 - 19,05 мм)
            </td>
            <td className="p-2 text-right">1000 руб./ точка</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">14</td>
            <td className="p-2">
              Пайка медного трубопровода (d=25,40 - 34,92 мм)
            </td>
            <td className="p-2 text-right">1250 руб./ точка</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InterblockRoute;
