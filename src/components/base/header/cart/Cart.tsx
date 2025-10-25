"use client";

import { useCartStore } from "@/store/cart.store";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";

const Cart = () => {
  const { items } = useCartStore();

  const isCartEmpty = items.length === 0;

  return (
    <Link className="flex items-center gap-x-3" href={"/cart"}>
      <ShoppingBasket size={16} strokeWidth={2.5} />
      <span className="text-sm font-semibold">КОРЗИНА</span>
      {isCartEmpty ? null : (
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-semibold">
          {items.length}
        </span>
      )}
    </Link>
  );
};

export default Cart;
