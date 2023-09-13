import { create } from "zustand";
import { Product } from "../types";
import toast from "react-hot-toast";

// Define the interface of the Cart state
interface State {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  removeOneFromCart: (item: Product) => void;
}

// Initialize a default state
const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

// Create the store with Zustand, combining the state and actions
export const useCartStore = create<State & Actions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: (product: Product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item._id === product._id);
    toast.success(`${product.name.toUpperCase()} added to cart`);

    if (cartItem) {
      // If the item already exists in the Cart, increase its quantity
      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      // If the item does not exist in the Cart, add it with a quantity of 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },
  removeFromCart: (product: Product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== product._id),
      totalItems: state.totalItems - product.quantity,
      totalPrice: state.totalPrice - product.price * product.quantity,
    }));
  },
  removeOneFromCart: (product: Product) => {
    set((state) => {
      const cart = state.cart;
      const cartItem = cart.find((item) => item._id === product._id);

      if (!cartItem) return state; // If the item is not in the cart, no change needed

      // If the item's quantity is greater than 1, decrement its quantity by 1
      if (cartItem.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - product.price,
        };
      } else {
        // If the item's quantity is 1, remove it from the cart
        const updatedCart = cart.filter((item) => item._id !== product._id);
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - product.price,
        };
      }
    });
  },
}));
