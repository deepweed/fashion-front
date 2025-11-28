const ServiceWork = () => {
  return (
    <section id="standartinstallation">
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
                Выезд на объект сервисной бригады (включая 2 часа работы по
                диагностике 1 единицы техники и мелкому ремонту не требующему
                зап. частей)
              </td>
              <td className="p-2 text-right">5000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">2</td>
              <td className="p-2">
                Обслуживание сплит-системы 2 – 2,5 кВт: настенная
              </td>
              <td className="p-2 text-right">5000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">3</td>
              <td className="p-2">
                Обслуживание сплит-системы 3,5 кВт: настенная/кассетная
              </td>
              <td className="p-2 text-right">6000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">4</td>
              <td className="p-2">
                Обслуживание сплит-системы 5,5 кВт:
                настенная/кассетная/напольно- потолочная/колонная/канальная
              </td>
              <td className="p-2 text-right">8000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">5</td>
              <td className="p-2">
                Обслуживание сплит-системы 7-9 кВт:
                настенная/кассетная/напольно- потолочная/колонная/канальная
              </td>
              <td className="p-2 text-right">9000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">6</td>
              <td className="p-2">
                Обслуживание сплит-системы 10-11 кВт:
                настенная/кассетная/напольно- потолочная/колонная/канальная
              </td>
              <td className="p-2 text-right">10000 руб.</td>
            </tr>
            <tr className="border-b border-zinc-200">
              <td className="p-2">6</td>
              <td className="p-2">
                Разовое ТО настенной/кассетной/напольно-потолочной, канальной
                сплит-системы (свыше 11,0 кВт)
              </td>
              <td className="p-2 text-right">+ 500 руб./кВт</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServiceWork;
