"use client";

import OrderSuccessMessage from "@/components/cart-page/order-create/button/OrderSuccessMessage";
import OrderSuccessPopup from "@/components/cart-page/order-create/button/OrderSuccessPopup";
import Checkbox from "@/components/ui/Checkbox";
import Popup from "@/components/ui/Popup";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <Checkbox onClick={() => setClick(!click)} isChecked={click}>
        LOL
      </Checkbox>
      <OrderSuccessPopup
        isOpen={click}
        onClose={() => {
          setClick(false);
        }}
      >
        <OrderSuccessMessage />
      </OrderSuccessPopup>
    </div>
  );
}
