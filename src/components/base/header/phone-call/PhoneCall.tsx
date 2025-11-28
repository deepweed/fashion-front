"use client";

import PhoneButton from "@/components/base/header/phone-call/button/PhoneButton";
import PhoneForm from "@/components/base/header/phone-call/form/PhoneForm";
import PhonePrivacy from "@/components/base/header/phone-call/privacy-check/PhonePrivacy";
import Button from "@/components/ui/Button";
import Popup from "@/components/ui/Popup";
import { PhoneCallSchema } from "@/schema/phone-call.schema";
import { PhoneService } from "@/services/phone.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const toastPromise = import("react-hot-toast").then((mod) => mod.toast);

export interface IPhoneCallForm {
  name: string;
  phone: string;
  theme: string;
  comment?: string;
  agreeData: boolean;
}

const PhoneCallback = () => {
  const methods = useForm<IPhoneCallForm>({
    resolver: zodResolver(PhoneCallSchema),
    defaultValues: {
      name: "",
      phone: "",
      theme: "",
      comment: "",
      agreeData: false,
    },
    mode: "onChange",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: IPhoneCallForm) => {
    if (!data.agreeData) return;
    setIsSubmitting(true);

    try {
      await PhoneService.createPhoneCall(data);

      setIsPopupOpen(false);
      methods.reset();

      const toast = await toastPromise;
      toast.success("Заявка отправлена!");
    } catch (error) {
      const toast = await toastPromise;
      toast.error("Ошибка при отправке заявки");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsPopupOpen(true)}
        color="blue"
        className="px-8 h-10 rounded-2xl"
      >
        Обратный звонок
      </Button>

      <Popup
        title="Обратный звонок"
        onClose={() => setIsPopupOpen(false)}
        isOpen={isPopupOpen}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <PhoneForm />
            <PhonePrivacy />
            <PhoneButton isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </Popup>
    </>
  );
};

export default PhoneCallback;
