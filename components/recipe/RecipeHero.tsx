"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Clock3, Users, Globe, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { RecipeDetails } from "@/types/recipe-details";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useMounted } from "@/hooks/useMounted";

interface Props {
  recipe: RecipeDetails;
}

const RecipeHero = ({ recipe }: Props) => {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const handleToggleFavorite = () => {
    toggleFavorite({
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image_url: recipe.image_url,
      source_url: recipe.source_url,
      servings: recipe.servings,
      cooking_time: recipe.cooking_time,
    });
  };

  const favorites = useFavoritesStore((state) => state.favorites);
  const mounted = useMounted();
  const favorited = mounted && favorites.some((r) => r.id === recipe.id);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid gap-10 lg:grid-cols-2 items-center"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl"
      >
        <Image
          src={recipe.image_url}
          alt={recipe.title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="space-y-7">
        <span
          className="inline-flex rounded-full bg-orange-100 px-4 py-2
            text-sm font-semibold text-recipe_orange dark:bg-orange-500/20"
        >
          {recipe.publisher}
        </span>

        <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl">
          {recipe.title}
        </h1>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 rounded-xl border px-4 py-3">
            <Clock3 className="text-orange-500" size={20} />
            <span>{recipe.cooking_time} mins</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border px-4 py-3">
            <Users className="text-orange-500" size={20} />
            <span>{recipe.servings} Servings</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            size="lg"
            onClick={handleToggleFavorite}
            className={`cursor-pointer transition-all duration-300 ${
              favorited
                ? "bg-white text-recipe_orange border border-recipe_orange hover:bg-orange-50 dark:bg-transparent dark:hover:bg-orange-500/10"
                : "bg-recipe_orange hover:bg-orange-600 text-white"
            }`}
          >
            <Heart
              className={`transition-all duration-300 ${favorited ? "fill-recipe_orange" : ""}`}
            />
            {favorited ? "Remove from Favorites" : "Add To Favorites"}
          </Button>

          <Button asChild variant="outline" size="lg">
            <a href={recipe.source_url} target="_blank">
              <Globe className="mr-2 h-4 w-4" />
              Visit Source
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default RecipeHero;
