// store/useFavoritesStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Recipe } from "@/types/recipe";

interface FavoritesStore {
  favorites: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (recipe: Recipe) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (recipe) =>
        set((state) => ({
          favorites: [...state.favorites, recipe],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((r) => r.id !== id),
        })),

      toggleFavorite: (recipe) => {
        const isFav = get().isFavorite(recipe.id);
        isFav ? get().removeFavorite(recipe.id) : get().addFavorite(recipe);
      },

      isFavorite: (id) => get().favorites.some((r) => r.id === id),
    }),
    {
      name: "favorites-storage",
    },
  ),
);
