import Container from "../Container";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

const RecipeSliderSkeleton = () => {
  return (
    <Container className="my-15">
      <div className="flex items-end justify-between">
        <div>
          <div className="h-8 w-40 rounded bg-muted animate-pulse" />

          <div className="mt-3 h-4 w-52 rounded bg-muted animate-pulse" />
        </div>

        <div className="flex items-center gap-3">
          <div className="h-8 w-20 rounded bg-muted animate-pulse" />

          <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />

          <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
        </div>
      </div>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <RecipeCardSkeleton key={index} />
        ))}
      </div>
    </Container>
  );
};

export default RecipeSliderSkeleton;
