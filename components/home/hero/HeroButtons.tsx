"use client";
import { Button } from "@/components/ui/button";
import focusSearch from "@/lib/focusSearch";
import Link from "next/link";

const HeroButtons = () => {
  return (
    <div className="flex items-center gap-4 py-6">
      <Button
        onClick={focusSearch}
        className="bg-orange-500 hover:bg-orange-600 border border-orange-500
        hover:border-orange-600 font-semibold sm:font-bold text-white py-4 sm:py-5 cursor-pointer"
      >
        Search Recipes
      </Button>

      <Link href={"/favorites"}>
        <Button
          className="bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black
        text-white border font-semibold sm:font-bold border-white py-4 sm:py-5 cursor-pointer"
        >
          View Favorites
        </Button>
      </Link>
    </div>
  );
};

export default HeroButtons;
