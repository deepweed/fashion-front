"use client";

import { useFormContext } from "react-hook-form";
import Link from "next/link";
import type { IPhoneCallForm } from "@/schema/phone-call.schema";

const PhonePrivacy = () => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<IPhoneCallForm>();

  const agreeData = watch("agreeData");

  const toggleAgreeData = () => {
    setValue("agreeData", !agreeData, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="flex items-center justify-between gap-3 mt-5">
      <div className="text-xs w-2/3">
        <span className="text-gray-700">
          Я согласен на обработку персональных данных и принимаю условия{" "}
        </span>
        <Link
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-700 transition"
        >
          политики конфиденциальности
        </Link>
        .
      </div>
      <button
        type="button"
        onClick={toggleAgreeData}
        className={`relative inline-flex items-center h-7 rounded-full w-13 focus:outline-none cursor-pointer ${
          agreeData ? "bg-blue-500" : "bg-zinc-300"
        }`}
      >
        <span
          className={`${
            agreeData ? "translate-x-7" : "translate-x-1"
          } inline-block w-5 h-5 transform bg-white rounded-full transition-transform`}
        />
      </button>
      {errors.agreeData && (
        <p className="text-red-700 text-xs mt-1">{errors.agreeData.message}</p>
      )}
    </div>
  );
};

export default PhonePrivacy;
