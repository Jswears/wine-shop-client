"use client";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart";
import ShoppingCartModal from "../modals/ShoppingCartModal";

export default function CartButton() {
  const { totalItems } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          <ShoppingCartModal />
          <span className="absolute top-1 right-7 w-4 h-4 bg-red-400 text-white font-semibold text-xs rounded-full grid place-content-center">
            {totalItems}
          </span>
        </>
      )}
    </>
  );
}
