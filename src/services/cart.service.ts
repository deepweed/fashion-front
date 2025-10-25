import { axiosTemplate } from "@/api/axiosTemplate";
import type { IOrderCreateForm } from "@/components/cart-page/order-create/OrderCreate";

export const CART = "telegram/order";

export const CartService = {
  async createOrder(orderData: {
    client: IOrderCreateForm;
    products: any[];
    total: string;
  }) {
    const { data } = await axiosTemplate({
      url: CART,
      method: "POST",
      data: orderData,
    });

    return data;
  },
};
