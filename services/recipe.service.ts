import { BASE_URL } from "@/lib/api";
import { Recipe } from "@/types/recipe";
import { RecipeDetails } from "@/types/recipe-details";
import { notFound } from "next/navigation";

// recipe
interface SearchResponse {
  status: string;
  results: number;
  data: {
    recipes: Recipe[];
  };
}

export async function searchRecipes(search: string, page: number = 1) {
  const response = await fetch(
    `${BASE_URL}/recipes?search=${encodeURIComponent(search)}&page=${page}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data: SearchResponse = await response.json();

  return {
    recipes: data.data.recipes,
    results: data.results,
  };
}

// recipe details
interface RecipeDetailsResponse {
  status: string;
  data: {
    recipe: RecipeDetails;
  };
}

export async function getRecipeById(id: string) {
  const response = await fetch(`${BASE_URL}/recipes/${id}`, {
    next: { revalidate: 3600 },
  });
  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }
  const data: RecipeDetailsResponse = await response.json();
  return data.data.recipe;
}
