"use client";
import { Button } from "@/components/ui/button";
import { Recipe } from "@/types/recipe";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useMounted } from "@/hooks/useMounted";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);
  const mounted = useMounted();
  const favorited = mounted && favorites.some((r) => r.id === recipe.id);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border
      bg-card shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Link href={`/recipe/${recipe.id}`}>
          <Image
            src={recipe.image_url}
            alt={recipe.title}
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
        </Link>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 text-lg truncate font-bold">
          {recipe.title}
        </h3>
        <p className="mt-1 text-sm truncate text-muted-foreground">
          {recipe.publisher}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <Button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(recipe);
            }}
            size="icon"
            variant="outline"
            className={`rounded-full cursor-pointer border transition-all duration-300
              ${
                favorited
                  ? "bg-recipe_orange border-recipe_orange text-white hover:bg-orange-600 hover:border-orange-600 dark:bg-recipe_orange dark:border-recipe_orange dark:hover:bg-orange-600"
                  : "hover:text-recipe_orange hover:border-recipe_orange dark:text-white dark:border-white"
              }`}
          >
            <Heart
              className={`size-5 transition-all duration-300 ${favorited ? "fill-current" : ""}`}
            />
          </Button>

          <Link href={`/recipe/${recipe.id}`}>
            <Button
              className="cursor-pointer text-white bg-recipe_dark_color dark:hover:text-white font-bold
              hover:bg-recipe_orange dark:bg-white dark:text-recipe_dark_color gap-2 group/details"
            >
              View Details
              <ArrowRight className="size-4 transition-transform group-hover/details:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
