export const convertTypeOf = (typeOf: string) => {
  switch (typeOf) {
    case "WALL_CEILING_CONDITIONER":
      return "Настенные кондиционеры";
    case "CASSETE_CONDITIONER":
      return "Кассетные кондиционеры";
    case "DUCTED_CONDITIONER":
      return "Канальные кондиционеры";
    default:
      return "Настенно потолочные";
  }
};
