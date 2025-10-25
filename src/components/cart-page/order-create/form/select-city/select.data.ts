import type { ISelectItem } from "@/components/ui/select/select.interface";

export enum EnumSelectCityForm {
  MOSCOW = "Москва",
  RAMENSKOE = "Раменское",
  ZHUKOVSKI = "Жуковский",
  ELECTROSTEAL = "Электросталь",
  BRONNITSU = "Бронницы, Раменский район",
  VOSKRESENCK = "Воскресенск, Воск. район",
  MORE = "Другое, Московская область",
}

export const SORT_SELECT_CITY: ISelectItem<EnumSelectCityForm>[] = [
  {
    key: EnumSelectCityForm.MOSCOW,
    label: "Москва",
  },
  {
    key: EnumSelectCityForm.RAMENSKOE,
    label: "Раменское",
  },
  {
    key: EnumSelectCityForm.ZHUKOVSKI,
    label: "Жуковский",
  },
  {
    key: EnumSelectCityForm.ELECTROSTEAL,
    label: "Электросталь",
  },
  {
    key: EnumSelectCityForm.BRONNITSU,
    label: "Бронницы, Раменский район",
  },
  {
    key: EnumSelectCityForm.VOSKRESENCK,
    label: "Воскресенск, Воск. район",
  },
  {
    key: EnumSelectCityForm.MORE,
    label: "Другое, Московская область",
  },
];
