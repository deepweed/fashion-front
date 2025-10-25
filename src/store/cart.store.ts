import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IProduct } from "@/types/product.interface";

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  discount?: IProduct["discount"];
  finalPrice: number;
  count: number;
  image?: string;
}

interface CartStore {
  items: ICartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items;
        const existing = items.find((i) => i.id === product.id);
        const discountPercent = product.discount?.percent || 0;
        const finalPrice = product.price * (1 - discountPercent / 100);

        if (existing) {
          set({
            items: items.map((i) =>
              i.id === product.id ? { ...i, count: i.count + 1 } : i
            ),
          });
        } else {
          set({
            items: [
              ...items,
              {
                id: product.id,
                title: product.title,
                price: product.price,
                discount: product.discount,
                finalPrice,
                count: 1,
                image: product.images?.[0] ?? null, // ✅ сохраняем первое изображение
              },
            ],
          });
        }
      },

      removeFromCart: (id) =>
        set({
          items: get().items.filter((item) => item.id !== id),
        }),

      increaseCount: (id) =>
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
          ),
        }),

      decreaseCount: (id) =>
        set({
          items: get()
            .items.map((item) =>
              item.id === id
                ? { ...item, count: Math.max(1, item.count - 1) }
                : item
            )
            .filter((item) => item.count > 0),
        }),

      clearCart: () => set({ items: [] }),

      getTotalPrice: () =>
        get().items.reduce(
          (acc, item) => acc + item.finalPrice * item.count,
          0
        ),

      getTotalCount: () =>
        get().items.reduce((acc, item) => acc + item.count, 0),
    }),
    {
      name: "cart-storage", // ключ в localStorage
    }
  )
);
