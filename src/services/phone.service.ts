import { axiosTemplate } from "@/api/axiosTemplate";
import type { IPhoneCallForm } from "@/components/phonecall-page/phone-create/PhoneCreate";

export const PHONE = "telegram/phone";

export const PhoneService = {
  async createPhoneCall(orderData: IPhoneCallForm) {
    const { data } = await axiosTemplate({
      url: PHONE,
      method: "POST",
      data: orderData,
    });

    return data;
  },
};
