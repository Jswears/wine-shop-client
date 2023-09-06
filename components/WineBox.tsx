"use client";
import Wines from "../app/constants/wines.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WineBox = () => {
  const [wines, setWines] = useState(Wines);
  return (
    <>
      {wines.map((wine) => (
        <div className="box w-64" key={wine.name}>
          <div className="content flex flex-col justify-cente items-center">
            <div className="product-image bg-slate-100 w-64">
              <Link href="/shop/wines">
                <Image
                  className="m-auto object-contain"
                  src="/2020-Santa-Cruz-de-Coya-RH5220.png"
                  alt={wine.name}
                  width={800}
                  height={1300}
                  style={{ height: "310px", width: "190px" }}
                ></Image>
              </Link>
            </div>
            <Link href={`/shop/wines/${wine.id}`} className="border-b-2 w-full">
              <h2 className="product-name text-center">
                {`${wine.year} ${wine.name}`}
              </h2>
            </Link>
            <p>{wine.price}$</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default WineBox;
