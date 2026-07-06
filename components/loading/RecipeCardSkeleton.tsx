const RecipeCardSkeleton = () => {
  return (
    <div
      className="overflow-hidden rounded-2xl border
      bg-card shadow-sm animate-pulse"
    >
      <div className="aspect-4/3 bg-muted" />

      <div className="space-y-4 p-4">
        <div className="h-6 w-3/4 rounded bg-muted" />

        <div className="h-4 w-1/2 rounded bg-muted" />

        <div className="mt-6 flex items-center justify-between">
          <div className="h-10 w-10 rounded-full bg-muted" />

          <div className="h-10 w-32 rounded-xl bg-muted" />
        </div>
      </div>
    </div>
  );
};

export default RecipeCardSkeleton;
