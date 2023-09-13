import { useCartStore } from "@/store/cart";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import { Button } from "../ui/button";

const CartItem = () => {
  const { cart, removeFromCart, removeOneFromCart } = useCartStore();
  return (
    <>
      {cart.map((wine) => (
        <div className="cart-item" key={wine._id}>
          <div className="cart-wine-info flex mt-4">
            <Image
              className="bg-slate-100 rounded"
              src={wine.image}
              alt="Wines Banner"
              width={4088}
              height={584}
              style={{ width: "80px", height: "120px" }}
            />
            <div className="cart-wine-info-text w-full p-2 flex flex-col gap-1 tracking-wide">
              <div className="cart-wine-info-headline flex justify-between">
                <h4 className="text-slate-600">{wine.name.toUpperCase()}</h4>
                <p className="text-rose-600 font-bold">
                  {formatCurrency(wine.price)}
                </p>
              </div>
              <p className="text-slate-600">{wine.winery.toUpperCase()}</p>
              <p className="text-slate-600">Quantity: x{wine.quantity}</p>
              <div className="flex gap-2">
                <span>
                  {wine.quantity > 1 ? (
                    <Button
                      variant={"destructive"}
                      size={"sm"}
                      onClick={() => removeFromCart(wine)}
                    >
                      Remove All
                    </Button>
                  ) : (
                    <></>
                  )}
                </span>
                <span>
                  <Button
                    variant={"secondary"}
                    size={"sm"}
                    onClick={() => removeOneFromCart(wine)}
                  >
                    Remove x1
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
