import { useFormContext } from "react-hook-form";
import type { IOrderCreateForm } from "../OrderCreate";
import SelectCity from "./select-city/SelectCity";
import Input from "@/components/ui/Input";

const OrderForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IOrderCreateForm>();

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex flex-col gap-x-2">
        <Input
          {...register("name")}
          placeholder="Имя"
          className="w-full h-12 bg-white border border-zinc-200 rounded-xl"
        />
        {errors.name && (
          <span className="text-red-700 text-sm">* {errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-x-2">
        <Input
          {...register("phone")}
          placeholder="Телефон"
          className="w-full h-12 bg-white border border-zinc-200 rounded-xl"
        />
        {errors.phone && (
          <span className="text-red-700 text-sm">* {errors.phone.message}</span>
        )}
      </div>

      <SelectCity />
    </div>
  );
};

export default OrderForm;
