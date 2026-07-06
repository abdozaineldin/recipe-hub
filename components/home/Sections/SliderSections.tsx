import React from "react";
import RecipeSliderSection from "../slider/RecipeSliderSection";
import { searchRecipes } from "@/services/recipe.service";

const SliderSections = async () => {
  const [
    { recipes: saladRecipes },
    { recipes: burgerRecipes },
    { recipes: cakeRecipes },
    { recipes: tacoRecipes },
    { recipes: cheeseRecipes },
    { recipes: potatoRecipes },
  ] = await Promise.all([
    searchRecipes("salad"),
    searchRecipes("burger"),
    searchRecipes("cake"),
    searchRecipes("taco"),
    searchRecipes("cheese"),
    searchRecipes("potato"),
  ]);

  return (
    <div>
      <RecipeSliderSection
        title="Salad"
        search="salad"
        recipes={saladRecipes}
      />
      <RecipeSliderSection
        title="Burger"
        search="burger"
        recipes={burgerRecipes}
      />
      <RecipeSliderSection title="Cake" search="cake" recipes={cakeRecipes} />
      <RecipeSliderSection title="Taco" search="taco" recipes={tacoRecipes} />
      <RecipeSliderSection
        title="Cheese"
        search="cheese"
        recipes={cheeseRecipes}
      />
      <RecipeSliderSection
        title="Potato"
        search="potato"
        recipes={potatoRecipes}
      />
    </div>
  );
};

export default SliderSections;
