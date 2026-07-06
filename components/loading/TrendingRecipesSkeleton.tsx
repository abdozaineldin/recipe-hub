import SectionHeader from "../home/shared/SectionHeader";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

const TrendingRecipesSkeleton = () => {
  return (
    <section className="mt-14">
      <SectionHeader
        fTitle="Trending"
        sTitle="Recipes"
        subtitle="Most searched recipes this week"
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <RecipeCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export default TrendingRecipesSkeleton;
