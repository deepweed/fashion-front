const CivilWork = () => {
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
              Дополнительное отверстие под трубопроводы (гипсокартон, ацеит и
              т.п.)
            </td>
            <td className="p-2 text-right">1000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">2</td>
            <td className="p-2">
              Дополнительное отверстие под трубопроводы (кирпич, дерево,
              листовой металл), сверление производится алмазной коронкой
            </td>
            <td className="p-2 text-right">1500 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">3</td>
            <td className="p-2">
              Дополнительное отверстие под трубопроводы (бетон)
            </td>
            <td className="p-2 text-right">2000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">4</td>
            <td className="p-2">Дополнительное отверстие под кабель</td>
            <td className="p-2 text-right">500 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">5</td>
            <td className="p-2">
              Штробление под трубопроводы (пеноблок/кирпич), за 1 м.п
            </td>
            <td className="p-2 text-right">1500/2000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">6</td>
            <td className="p-2">
              Штробление под трубопроводы (бетон), за 1 м.п
            </td>
            <td className="p-2 text-right">2500 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">7</td>
            <td className="p-2">
              Штробление под трубопроводы (плита, панель), за 1 м.п
            </td>
            <td className="p-2 text-right">3000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">8</td>
            <td className="p-2">
              Штробление под кабель, дренаж, за 1 м.п.
              пеноблок/кирпич/бетон/плита
            </td>
            <td className="p-2 text-right">900/1200/1500/1800 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">9</td>
            <td className="p-2">Алмазное бурение (d=52 - 132)</td>
            <td className="p-2 text-right">От 5000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">10</td>
            <td className="p-2">
              Проход фреоновых коммуникаций сквозь кровлю (с герметизацией
              отверстия)
            </td>
            <td className="p-2 text-right">От 6000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">11</td>
            <td className="p-2">Сборка/разборка подвесного потолка, за 1 м2</td>
            <td className="p-2 text-right">300 руб./м2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CivilWork;
