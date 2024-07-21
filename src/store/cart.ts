import { CartItem } from "@/models/cartItem";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  cart: CartItem[];
};

type Actions = {
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create(
  persist<State & Actions>(
    (set) => ({
      cart: [],
      addToCart: (product: CartItem) =>
        set((state) => ({
          cart: [...state.cart, product],
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(quantity, 0) }
              : item
          ),
        })),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    { name: "cart" }
  )
);
