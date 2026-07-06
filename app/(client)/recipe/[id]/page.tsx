import { getRecipeById, searchRecipes } from "@/services/recipe.service";
import RecipeHero from "@/components/recipe/RecipeHero";
import IngredientsList from "@/components/recipe/IngredientsList";
import RelatedRecipes from "@/components/recipe/RelatedRecipes";
import Container from "@/components/Container";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  const recipe = await getRecipeById(id);
  const { recipes: relatedRecipes } = await searchRecipes(
    recipe.title.split(" ")[0],
  );

  return (
    <Container>
      <div className="py-10 space-y-12">
        <RecipeHero recipe={recipe} />

        <IngredientsList ingredients={recipe.ingredients} />

        <RelatedRecipes
          recipes={relatedRecipes.filter((item) => item.id !== recipe.id)}
        />
      </div>
    </Container>
  );
}
