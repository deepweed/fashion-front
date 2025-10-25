import { useFormContext } from "react-hook-form";
import Input from "@/components/ui/Input";
import type { IPhoneCallForm } from "@/schema/phone-call.schema";
import SelectTheme from "./select-theme/SelectTheme";

const PhoneForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IPhoneCallForm>();

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex flex-col gap-x-2">
        <Input
          {...register("name")}
          placeholder="Имя"
          className="w-full h-14 bg-white border border-zinc-200 rounded-xl"
        />
        {errors.name && (
          <span className="text-red-700 text-sm">* {errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-x-2">
        <Input
          {...register("phone")}
          placeholder="Телефон"
          className="w-full h-14 bg-white border border-zinc-200 rounded-xl"
        />
        {errors.phone && (
          <span className="text-red-700 text-sm">* {errors.phone.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-x-2">
        <Input
          {...register("comment")}
          placeholder="Комментарий к заявке (необязательно)"
          className="w-full h-20 bg-white border border-zinc-200 rounded-xl"
        />
      </div>
      <SelectTheme />
    </div>
  );
};

export default PhoneForm;
