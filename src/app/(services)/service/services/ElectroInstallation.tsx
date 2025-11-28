const ElectroInstallation = () => {
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
              Прокладка кабеля (3х1,5; 3х2,5; 5х1,5) в гофротрубе, коробе за
              м.п., только работа
            </td>
            <td className="p-2 text-right">150 руб./м.п.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">2</td>
            <td className="p-2">
              Установка автомата защиты в щит с подключением, только работа
            </td>
            <td className="p-2 text-right">1000 руб.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ElectroInstallation;
