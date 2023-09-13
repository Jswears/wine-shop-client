import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCartStore } from "@/store/cart";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import CartItem from "../shoppingcart/CartItem";
import { Button } from "../ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

const ShoppingCartModal = () => {
  const { cart, totalPrice } = useCartStore();
  const handleRedirect = () => {
    return window.location.assign("/shop/checkout");
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
        </DialogTrigger>
        <DialogContent className="h-96 overflow-auto">
          <ScrollArea className="rounded-md p-4">
            <DialogHeader>
              <DialogTitle className="border-b text-center pb-5 tracking-wide">
                Your cart
              </DialogTitle>
              <div className="mt-0">
                <CartItem />
              </div>
            </DialogHeader>
            {cart.length > 0 ? (
              <div className="total-price flex justify-between items-center mt-8">
                <Button
                  variant={"default"}
                  size={"sm"}
                  onClick={handleRedirect}
                >
                  Checkout
                </Button>
                <div className="flex gap-2">
                  <span className="tracking-wide">Total:</span>
                  <span className="font-bold">
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-center tracking-wide text-slate-500">
                Your cart is empty
              </p>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShoppingCartModal;
