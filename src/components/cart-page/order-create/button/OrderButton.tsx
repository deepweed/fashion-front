"use client";

import Button from "@/components/ui/Button";
import { useFormContext, useWatch } from "react-hook-form";
import type { IOrderCreateForm } from "../OrderCreate";

interface OrderButtonProps {
  isCartEmpty: boolean;
}

const OrderButton = ({ isCartEmpty }: OrderButtonProps) => {
  const {
    formState: { isValid },
    control,
  } = useFormContext<IOrderCreateForm>();

  const agreeData = useWatch({ control, name: "agreeData" });
  const isDisabled = !isValid || isCartEmpty || !agreeData;

  return (
    <Button
      type="submit"
      disabled={isDisabled}
      className={`h-14 rounded-3xl w-full mt-3 ${
        isDisabled ? "bg-gray-300 text-gray-600 cursor-not-allowed" : ""
      }`}
      color={isDisabled ? "gray" : "blue"}
    >
      {isCartEmpty
        ? "Корзина пуста"
        : !agreeData
        ? "Подтвердите соглашение"
        : "Оформить заказ"}
    </Button>
  );
};

export default OrderButton;
