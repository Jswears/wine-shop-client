"use client";

import WineCard from "@/components/WineCard";
import { WinesProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Searchbar from "@/components/Searchbar";

export default function WinesPage() {
  const [wines, setWines] = useState<WinesProps[]>([]);
  const [filteredWines, setFilteredWines] = useState<WinesProps[]>([]);

  const fetchWinesData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/wines");
      const winesData = response.data;
      setWines(winesData);
      setFilteredWines(winesData); // Initialize filteredWines with all wines
    } catch (error) {
      toast.error("Error fetching wines");
    }
  };

  useEffect(() => {
    fetchWinesData();
  }, []);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm !== "") {
      const results = wines.filter(
        (wine) =>
          wine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          wine.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredWines(results);
    } else {
      setFilteredWines(wines); // Show all wines when search term is empty
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-full">
      <Image
        className="h-64 w-full object-fit"
        src="/wines-banner.jpg"
        alt="Wines Banner"
        width={4088}
        height={584}
        quality={100}
      />
      <h1 className="mt-5 text-5xl">Wines</h1>

      <Searchbar onSearch={handleSearch} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 h-full mb-10">
        {filteredWines.map((wine) => (
          <WineCard key={wine._id} wine={wine} />
        ))}
      </div>
    </div>
  );
}
