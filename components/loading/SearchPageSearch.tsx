import Container from "../Container";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

const SearchPageSkeleton = () => {
  return (
    <Container>
      <main className="py-10">
        <div className="mb-8 space-y-3">
          <div className="h-9 w-72 rounded bg-muted animate-pulse" />

          <div className="h-5 w-40 rounded bg-muted animate-pulse" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <RecipeCardSkeleton key={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-11 w-11 rounded-xl bg-muted animate-pulse"
            />
          ))}
        </div>
      </main>
    </Container>
  );
};

export default SearchPageSkeleton;
