"use client";

import Button from "@/components/ui/Button";
import { useFormContext, useWatch } from "react-hook-form";
import type { IPhoneCallForm } from "@/components/base/header/phone-call/PhoneCall";

interface IPhoneButton {
  isSubmitting: boolean;
}

const PhoneButton = ({ isSubmitting }: IPhoneButton) => {
  const {
    formState: { isValid },
    control,
  } = useFormContext<IPhoneCallForm>();

  const agreeData = useWatch({ control, name: "agreeData" });
  const isDisabled = !isValid || !agreeData || isSubmitting;

  return (
    <Button
      type="submit"
      disabled={isDisabled}
      className={`h-14 rounded-3xl w-full mt-3 ${
        isDisabled ? "bg-gray-300 text-gray-600 cursor-not-allowed" : ""
      }`}
      color={isDisabled ? "gray" : "blue"}
    >
      {isSubmitting
        ? "Отправка..."
        : !agreeData
        ? "Подтвердите соглашение"
        : "Отправить заявку"}
    </Button>
  );
};

export default PhoneButton;
