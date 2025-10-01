import { EnumProductSort } from "@/services/product.types";
import type { ISelectItem } from "@/components/ui/select/select.interface";

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
  {
    key: EnumProductSort.HIGH_PRICE,
    label: "Сначала дороже",
  },
  {
    key: EnumProductSort.LOW_PRICE,
    label: "Сначала дешевле",
  },
];
