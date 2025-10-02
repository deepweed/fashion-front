export const convertProductStock = (stock: string) => {
  switch (stock) {
    case "OUT_OF_STOCK":
      return "Нет в наличии";
    case "PRE_ORDER":
      return "Под заказ";
    default:
      return "В наличии";
  }
};
