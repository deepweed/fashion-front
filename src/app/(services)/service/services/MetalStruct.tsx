const MetalStruct = () => {
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
            <td className="p-2">Установка защитного козырька</td>
            <td className="p-2 text-right">От 3000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">2</td>
            <td className="p-2">Установка антивандальной защиты</td>
            <td className="p-2 text-right">От 5000 руб.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MetalStruct;
