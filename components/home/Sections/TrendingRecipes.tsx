import RecipeGrid from "../shared/RecipeGrid";
import SectionHeader from "../shared/SectionHeader";
import { searchRecipes } from "@/services/recipe.service";

const TrendingRecipes = async () => {
  const { recipes } = await searchRecipes("vegetable");

  return (
    <section className="mt-14">
      <SectionHeader
        fTitle="Trending"
        sTitle="Recipes"
        subtitle="Most searched recipes this week"
      />

      <RecipeGrid recipes={recipes.slice(3, 7)} />
    </section>
  );
};

export default TrendingRecipes;
