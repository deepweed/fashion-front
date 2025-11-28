const Drainage = () => {
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
            <td className="p-2">Установка дренажной помпы встроенной</td>
            <td className="p-2 text-right">5000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">2</td>
            <td className="p-2">Установка дренажной помпы накладной</td>
            <td className="p-2 text-right">5000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">3</td>
            <td className="p-2">Установка дренажной помпы наливной</td>
            <td className="p-2 text-right">5000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">4</td>
            <td className="p-2">Установка распылителя конденсата</td>
            <td className="p-2 text-right">6000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">5</td>
            <td className="p-2">
              Прокладка дренажного шланга d=16 мм отдельно от трассы без короба,
              за 1 м.п
            </td>
            <td className="p-2 text-right">300 руб./м.п.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">5</td>
            <td className="p-2">
              Прокладка капиллярной трубки d=6/9 мм (для помпы), в ПНД гофре за
              1 м.п
            </td>
            <td className="p-2 text-right">300 руб./м.п.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">5</td>
            <td className="p-2">
              Пластиковый короб 30х30/25 для прокладки дренажного шланга,
              капиллярной трубки (дополнительно к стоимости 1 м.п. дренажа без
              короба), за 1 м.п
            </td>
            <td className="p-2 text-right">+ 400 руб./м.п.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">5</td>
            <td className="p-2">
              Прокладка труб PPRC (d=16-32) за 1 м.п. только работа
            </td>
            <td className="p-2 text-right">400 руб./м.п.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Drainage;
