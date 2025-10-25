"use client";

import { FormProvider, useForm } from "react-hook-form";
import OrderForm from "./form/OrderForm";
import OrderButton from "./button/OrderButton";
import OrderPrivacy from "./privacy-check/OrderPrivacy";
import OrderInstallation from "./installation-check/OrderInstallation";
import { useCartStore } from "@/store/cart.store";
import OrderSuccessPopup from "./button/OrderSuccessPopup";
import { useState } from "react";
import { CartService } from "@/services/cart.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderSchema } from "@/schema/order.schema";
import OrderSuccessMessage from "./button/OrderSuccessMessage";

export interface IOrderCreateForm {
  name: string;
  phone: string;
  city: string;
  agreeInstallation: boolean;
  agreeData: boolean;
}

const OrderCreate = () => {
  const methods = useForm<IOrderCreateForm>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      agreeInstallation: true,
      agreeData: false,
    },
    mode: "onChange",
  });

  const { items, clearCart, getTotalPrice } = useCartStore();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onSubmit = async (data: IOrderCreateForm) => {
    if (items.length === 0 || !data.agreeData) return;

    const orderData = {
      client: data,
      products: items,
      total: getTotalPrice().toFixed(2),
    };

    try {
      const response = await CartService.createOrder(orderData);
      console.log("Заказ успешно создан:", response);

      clearCart();
      setIsPopupOpen(true);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const isCartEmpty = items.length === 0;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="bg-zinc-50 p-6 rounded-2xl">
          <span className="text-xl font-medium">Детали заказа</span>
          <OrderForm />
          <OrderInstallation />
          <OrderPrivacy />
        </div>

        <div className="mt-3">
          <OrderButton isCartEmpty={isCartEmpty} />
        </div>
      </form>

      <OrderSuccessPopup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setTimeout(() => {
            methods.reset(
              {
                name: "",
                phone: "",
                city: "",
                agreeInstallation: true,
                agreeData: false,
              },
              { keepErrors: false }
            );
          }, 150);
        }}
      >
        <OrderSuccessMessage />
      </OrderSuccessPopup>
    </FormProvider>
  );
};

export default OrderCreate;
