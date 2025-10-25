"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart.store";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartItems = () => {
  const {
    items,
    increaseCount,
    decreaseCount,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-500">
        <p className="text-lg font-medium">Корзина пуста 🛒</p>
        <p className="text-sm mt-2">Добавьте товары, чтобы оформить заказ</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:text-red-600 transition"
        >
          Очистить всё
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl bg-zinc-50 p-4"
          >
            <div className="flex items-center gap-4">
              {item.image && (
                <div className="relative overflow-hidden ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <p className="font-medium text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">
                  {(item.finalPrice * item.count).toLocaleString()} ₽
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="inline-flex items-center justify-between rounded-xl bg-gray-100 px-3 py-1.5 w-40 mb-3">
                <button
                  onClick={() => decreaseCount(item.id)}
                  className="text-gray-800 hover:text-black transition cursor-pointer"
                >
                  <Minus size={14} strokeWidth={2} />
                </button>

                <span className="text-sm font-medium">{item.count}</span>

                <button
                  onClick={() => increaseCount(item.id)}
                  className="text-gray-800 hover:text-black transition cursor-pointer"
                >
                  <Plus size={14} strokeWidth={2} />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-30 flex items-center justify-center gap-x-1 cursor-pointer rounded-xl bg-gray-100 px-3 py-1.5"
              >
                <span className="text-sm font-semibold">Удалить</span>
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center border-t border-zinc-100 mt-8 pt-6 px-4">
        <p className="text-lg font-semibold">Итого</p>
        <p className="text-xl font-bold">
          {getTotalPrice().toLocaleString()} ₽
        </p>
      </div>
    </div>
  );
};

export default CartItems;
