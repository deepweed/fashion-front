const AdditionalWork = () => {
  return (
    <div className="overflow-x-auto mb-5 p-3 rounded-md border border-zinc-300">
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
              Установка зимнего комплекта для on-off моделей (подогрев картера,
              регулятор давления конденсации) с оборудованием и материалами
            </td>
            <td className="p-2 text-right">9500 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">2</td>
            <td className="p-2">
              Установка блока ротации проводного (только работа)
            </td>
            <td className="p-2 text-right">7500 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">3</td>
            <td className="p-2">
              Установка блока ротации без проводного (только работа)
            </td>
            <td className="p-2 text-right">10000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">4</td>
            <td className="p-2">
              Установка проводного пульта, ИК приемника сигнала (только работа)
            </td>
            <td className="p-2 text-right">+900 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">5</td>
            <td className="p-2">
              Нестандартное крепление наружного блока (на ограждение балкона или
              через теплоизоляцию стены)
            </td>
            <td className="p-2 text-right">+2000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">6</td>
            <td className="p-2">
              Нестандартное крепление наружного блока (на керамический
              вентилируемый фасад) / монтаж в корзину от застройщика под окном
            </td>
            <td className="p-2 text-right">+2000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">7</td>
            <td className="p-2">Демонтаж/монтаж стеклопакета</td>
            <td className="p-2 text-right">+1000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">8</td>
            <td className="p-2">
              Дозаправка фреоном. Цена за 1 грамм При стоимости заправки менее
              3000 руб. взымается дополнительная плата за работу по заправке
              сплит-системы в размере 1500 руб.
            </td>
            <td className="p-2 text-right">10 руб.</td>
          </tr>
          <tr>
            <td className="p-2">9</td>
            <td className="p-2">
              Перевальцовка соединения за сторону 1/4,3/8 / 1/4,1/2 / 1/4,5/8 /
              3/8,5/8 / 3/8,3/4
            </td>
            <td className="p-2 text-right">1500/1700/1800/ 2200/2500 руб.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalWork;
