import { Recipe } from "@/types/recipe";
import RecipeCard from "../Cards/RecipeCard";
import Container from "@/components/Container";

const RecipeGrid = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe?.id} />
      ))}
    </div>
  );
};

export default RecipeGrid;
