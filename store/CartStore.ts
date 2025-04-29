import { Product, ProductInCartType } from "@/types";

import { areItemsEqual } from "@/utils/itemUtils";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type CartStoreType = {
  cart: ProductInCartType[];
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  decrementInCart: (item: Product) => void;
};

export const useCartStore = create<CartStoreType>()(
  immer((set) => ({
    cart: [],
    addToCart: (itemToAdd) =>
      set((state) => {
        const itemIfFound = state.cart.find((item) =>
          areItemsEqual(item, itemToAdd)
        );
        if (itemIfFound) {
          itemIfFound.amount++;
        } else {
          state.cart.push(itemToAdd);
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
