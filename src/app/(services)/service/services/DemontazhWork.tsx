const DemontazhWork = () => {
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
              Демонтаж внуреннего/наружного блоков мощностью до 3кВт
              (соотношение работ - 40% / 60%)
            </td>
            <td className="p-2 text-right">6000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">2</td>
            <td className="p-2">
              Демонтаж внуреннего/наружного блоков мощностью от 3 кВт до 4,5 кВт
              (соотношение работ - 40% / 60%)
            </td>
            <td className="p-2 text-right">7000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">3</td>
            <td className="p-2">
              Демонтаж внуреннего/наружного блоков мощностью от 4,5 кВт до 7,0
              кВт (соотношение работ - 40% / 60%)
            </td>
            <td className="p-2 text-right">9000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">4</td>
            <td className="p-2">
              Демонтаж внуреннего/наружного блоков мощностью от 7,0 кВт до
              10,0кВт (соотношение работ - 40% / 60%)
            </td>
            <td className="p-2 text-right">11000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">5</td>
            <td className="p-2">
              Демонтаж внуреннего/наружного блоков мощностью от 10,0 кВт до
              14,0кВт (соотношение работ - 40% / 60%)
            </td>
            <td className="p-2 text-right">15000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">6</td>
            <td className="p-2">
              Демонтаж внуреннего/наружного блоков мощностью от 14,0 кВт до
              18,0кВт (соотношение работ - 35% / 65%)
            </td>
            <td className="p-2 text-right">17000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">7</td>
            <td className="p-2">
              Демонтаж внутреннего/наружного блоков кондиционера 100 (Q0=22-29
              кВт) (60/40%)
            </td>
            <td className="p-2 text-right">13000 / 16000 руб.</td>
          </tr>
          <tr className="border-b border-zinc-200">
            <td className="p-2">8</td>
            <td className="p-2">
              Демонтаж внутреннего/наружного блоков кондиционера 125 (Q0=29-34
              кВт) (60/40%)
            </td>
            <td className="p-2 text-right">15000 / 18000 руб.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DemontazhWork;
