"use client";
import { useCartStore } from "@/store/cart";
import { WinesProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import { Toaster } from "react-hot-toast";

const WineCard = ({ wine }: { wine: WinesProps }) => {
  const { addToCart } = useCartStore();
  return (
    <>
      <Toaster />
      <div className="box w-64">
        <div className="content flex flex-col justify-cente items-center">
          <div className="product-image bg-slate-100 w-64">
            <Link href={`/shop/wines/${wine._id}`}>
              <Image
                className="m-auto object-contain"
                src={wine.image}
                alt={wine.name}
                width={800}
                height={1300}
                style={{ height: "310px", width: "190px" }}
              ></Image>
            </Link>
          </div>
          <Link href={`/shop/wines/${wine._id}`} className="border-b-2 w-full">
            <h2 className="product-name text-center font-bold">
              {`${wine.vintage} ${wine.name} - ${wine.winery}`.toUpperCase()}
            </h2>
          </Link>
          <div className="flex justify-between w-full mt-2 items-center">
            <div className="text-xs text-slate-500">0.75 Liter</div>
            <p className="text-right">{formatCurrency(wine.price)}</p>
          </div>
          <div className="cta-wine w-full flex justify-between mt-2 items-center gap-1">
            <Button variant={"details"}>
              <Link href={`/shop/wines/${wine._id}`}>Details</Link>
            </Button>
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
          </div>
        </div>
      </div>
    </>
  );
};
export default WineCard;
