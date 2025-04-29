import { Product, ProductInCart } from "@/types";

import { areItemsEqual } from "@/utils/itemUtils";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type CartStoreType = {
  cart: ProductInCart[];
  addToCart: ({
    product,
    selectedColor,
    selectedSize,
  }: {
    product: Product;
    selectedColor: string;
    selectedSize: string;
  }) => void;
  removeFromCart: (item: ProductInCart) => void;
  decrementInCart: (item: ProductInCart) => void;
};

export const useCartStore = create<CartStoreType>()(
  immer((set) => ({
    cart: [],
    addToCart: ({ product, selectedColor, selectedSize }) =>
      set((state) => {
        const productInCart: ProductInCart = {
          ...product,
          color: selectedColor,
          size: selectedSize,
          amount: 1,
        };
        const itemIfFound = state.cart.find((item) =>
          areItemsEqual(item, product)
        );
        if (itemIfFound) {
          itemIfFound.amount += productInCart.amount;
        } else {
          state.cart.push(productInCart);
        }
      }),
    removeFromCart: (itemToRemove) =>
      set((state) => {
        state.cart = state.cart.filter((item) =>
          areItemsEqual(item, itemToRemove)
        );
      }),
    decrementInCart: (itemToDecrement) =>
      set((state) => {
        const itemIfFound = state.cart.find((item) =>
          areItemsEqual(item, itemToDecrement)
        );
        if (itemIfFound) {
          if (itemIfFound.amount === 1) {
            state.cart = state.cart.filter((item) => item !== itemIfFound);
          } else {
            itemIfFound.amount--;
          }
        }
      }),
  }))
);
