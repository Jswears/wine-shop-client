import WineCard from "@/components/WineCard";
import { WinesProps } from "@/types";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Searchbar from "@/components/Searchbar";

const WinesPage = async ({
  searchParams,
}: {
  searchParams: { search?: string };
}) => {
  const response = await fetch("http://localhost:5005/api/wines", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const wines: WinesProps[] = await response.json();
  const searchQuery = searchParams.search ?? "";

  const filteredWines: WinesProps[] = [];
  wines.forEach((wine) => {
    if (
      wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.winery.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.country.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      filteredWines.push(wine);
    }
  });

  return (
    <div className="w-full flex flex-col items-center h-full">
      <Toaster />
      <h1 className="mt-5 text-5xl">Wines</h1>
      <Searchbar />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 h-full mb-10">
        {filteredWines?.map((wine) => (
          <WineCard key={wine._id} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default WinesPage;
