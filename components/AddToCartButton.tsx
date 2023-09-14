"use client";
import { useCartStore } from "@/store/cart";
import { Button } from "./ui/button";
import { WinesProps } from "@/types";

const AddToCartButton = ({ wine }: { wine: WinesProps }) => {
  const { addToCart } = useCartStore();
  return (
    <Button variant={"secondary"} onClick={() => addToCart(wine)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        style={{ fill: "#000" }}
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    </Button>
  );
};

export default AddToCartButton;
