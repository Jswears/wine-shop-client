"use client";
import { WinesProps } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function WineDetailsPage({
  params,
}: {
  params: { wineId: string };
}) {
  const [oneWine, setOneWine] = useState<WinesProps>();

  const fetchOneWine = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/wines/${params.wineId}`
      );
      setOneWine(response.data);
    } catch (error) {
      toast.error("Error fetching wine");
    }
  };

  useEffect(() => {
    fetchOneWine();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.wineId]);

  return !oneWine ? (
    "Loading..."
  ) : (
    <>
      <button className="absolute top-14 left-4 bg-white rounded-full">
        <Link href="/shop/wines">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
      </button>
      <div className="">
        <Image
          src={oneWine.image}
          alt="wine"
          width={800}
          height={1300}
          quality={100}
          className="w-64 md:w-80 h-auto border-2 rounded-lg shadow-lg mx-auto bg-white"
        />
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg w-2/4 h-auto">
        <h1 className="text-3xl font-bold text-gray-800">
          {oneWine.vintage.toUpperCase()} {oneWine.name.toUpperCase()} -
          {oneWine.winery.toUpperCase()}
        </h1>
        <p className="text-sm text-gray-600 mt-5 tracking-wide font-normal ">
          {oneWine.desc}
        </p>
        <div className="mt-4 flex flex-wrap justify-between items-center">
          <div className="flex-1 tracking-wide font-semibold">
            <p className="text-gray-700">
              Country: {oneWine.country.toUpperCase()}
            </p>
            <p className="text-gray-700">
              Winery: {oneWine.winery.toUpperCase()}
            </p>
            <p className="text-gray-700">
              Vintage: {oneWine.vintage.toUpperCase()}
            </p>
          </div>
          <div className="text-2xl text-gray-800 font-semibold">
            {formatCurrency(oneWine.price)}
          </div>
        </div>
      </div>
    </>
  );
}
