"use client";

import { useCartStore } from "@/store/cart";
import { formatCurrency } from "@/utils/formatCurrency";

export default function CheckoutPage() {
  const { cart, totalPrice, removeFromCart, removeOneFromCart } =
    useCartStore();
  return <>Checkout</>;
}
