import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Searchbar = ({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="w-3/4 mt-4">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-end">
          <Input
            className="w-22 me-5"
            type="text"
            placeholder="Search wine"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button>Search</Button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
