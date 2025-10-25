"use client";

import Checkbox from "@/components/ui/Checkbox";
import { useFormContext } from "react-hook-form";
import type { IOrderCreateForm } from "../OrderCreate";
import Link from "next/link";

const OrderInstallation = () => {
  const { watch, setValue } = useFormContext<IOrderCreateForm>();

  // Следим за состоянием чекбокса
  const agreeInstallation = watch("agreeInstallation");

  // Переключатель состояния
  const toggleInstallation = () => {
    setValue("agreeInstallation", !agreeInstallation, {
      shouldDirty: true,
    });
  };

  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-sm font-medium">Монтаж оборудования</h2>
          <span className="text-xs text-gray-600">
            Наши специалисты выполнят профессиональную установку и проверят
            работу оборудования. После оформления заказа мы свяжемся, чтобы
            уточнить все детали и подобрать удобное время.
          </span>
          <span className="text-xs text-gray-600">
            Если монтаж не требуется, доставка осуществляется за{" "}
            <Link className="text-blue-600 underline" href={"#"}>
              дополнительную плату.
            </Link>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-medium">
            Мне потребуется монтаж оборудования
          </span>
          <Checkbox
            isChecked={agreeInstallation}
            onClick={toggleInstallation}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderInstallation;
