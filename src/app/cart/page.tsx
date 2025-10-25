import CartItems from "@/components/cart-page/cart-items/CartItems";
import OrderCreate from "@/components/cart-page/order-create/OrderCreate";
import Heading from "@/components/ui/Heading";

export default function CartPage() {
  return (
    <div className="flex gap-5 mt-10">
      <div className="w-3/4">
        <CartItems />
      </div>
      <div className="w-1/4">
        <OrderCreate />
      </div>
    </div>
  );
}
