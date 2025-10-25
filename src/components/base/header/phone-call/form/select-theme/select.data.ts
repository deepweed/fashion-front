import type { ISelectItem } from "@/components/ui/select/select.interface";

export enum EnumSelectCityForm {
  CATALOG = "Консультация по каталогу",
  PAYMENT = "Узнать про оплату",
  MORE = "Другое",
}

export const SORT_SELECT_CITY: ISelectItem<EnumSelectCityForm>[] = [
  {
    key: EnumSelectCityForm.CATALOG,
    label: "Консультация по каталогу",
  },
  {
    key: EnumSelectCityForm.PAYMENT,
    label: "Узнать про оплату",
  },
  {
    key: EnumSelectCityForm.MORE,
    label: "Другое, Московская область",
  },
];
