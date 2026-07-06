import { Recipe } from "@/types/recipe";
import RecipeGrid from "../home/shared/RecipeGrid";

interface Props {
  recipes: Recipe[];
}

const RelatedRecipes = ({ recipes }: Props) => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">You may also like</h2>
        <p className="text-muted-foreground mt-2">
          Discover more delicious recipes you'll love.
        </p>
      </div>
      <RecipeGrid recipes={recipes.slice(0, 4)} />
    </section>
  );
};

export default RelatedRecipes;
