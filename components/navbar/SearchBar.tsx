"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = ({ id }: { id: string }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setSearch(searchParams.get("q") ?? "");
  }, [searchParams]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!search.trim()) return;
        router.push(`/search?q=${encodeURIComponent(search)}`);
      }}
      className="relative"
    >
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id={id}
        className="bg-gray-50/95 focus-visible:border-recipe_orange
          focus-visible:ring-recipe_orange/30 focus:ring-2 shadow-sm 
          hover:shadow-md transition-all duration-200 dark:bg-zinc-800 dark:border-zinc-700
          dark:text-white dark:placeholder:zinc-400"
        placeholder="Search recipes..."
      />

      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <Search
          className="hover:text-recipe_orange transition-colors text-gray-500"
          size={18}
        />
      </button>
    </form>
  );
};

export default SearchBar;
