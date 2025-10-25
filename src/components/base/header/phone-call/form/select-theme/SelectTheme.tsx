import { Select } from "@/components/ui/select/Select";
import { SORT_SELECT_CITY, type EnumSelectCityForm } from "./select.data";
import { Controller, useFormContext } from "react-hook-form";
import type { IPhoneCallForm } from "@/schema/phone-call.schema";

const SelectTheme = () => {
  const { control } = useFormContext<IPhoneCallForm>();

  return (
    <Controller
      name="theme"
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-x-2 my-3">
          <Select<EnumSelectCityForm>
            data={SORT_SELECT_CITY}
            title="Вас интересует что-то конкретно?"
            value={SORT_SELECT_CITY.find((v) => v.key === field.value)}
            onChange={(val) => field.onChange(val.key)}
          />
          {fieldState.error && (
            <span className="text-red-700 text-sm">
              * {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default SelectTheme;
