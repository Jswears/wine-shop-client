import { WineBox } from "@/components";
import Image from "next/image";

export default function WinesPage() {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Image
        className="h-64 w-full object-fit "
        src="/wines-banner.jpg"
        alt="Wines Banner"
        width={4088}
        height={584}
        quality={100}
      />
      <h1 className="mt-5 text-5xl">Wines</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 h-full mb-10">
        <WineBox />
      </div>
    </div>
  );
}
