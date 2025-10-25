"use client";

import Button from "@/components/ui/Button";
import { Stock, type IProduct } from "@/types/product.interface";
import { useCartStore } from "@/store/cart.store";

interface ICartButton {
  product: IProduct;
}

const CartButton = ({ product }: ICartButton) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const items = useCartStore((state) => state.items);

  const isAvailable =
    product.stock === Stock.IN_STOCK || product.stock === Stock.PRE_ORDER;

  const isInCart = items.some((item) => item.id === product.id);

  const handleClick = () => {
    if (!isAvailable) return;
    if (isInCart) removeFromCart(product.id);
    else addToCart(product);
  };

  return (
    <Button
      color={isInCart ? "gray" : "blue"}
      disabled={!isAvailable}
      onClick={handleClick}
      className="text-base font-medium w-full h-14 rounded-full mb-5 transition"
    >
      {!isAvailable
        ? "Нет в наличии"
        : isInCart
        ? "Убрать из корзины"
        : "Добавить в корзину"}
    </Button>
  );
};

export default CartButton;
