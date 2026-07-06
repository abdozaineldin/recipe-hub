import RecipeSliderSkeleton from "./RecipeSliderSkeleton";

const SliderSectionsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <RecipeSliderSkeleton key={index} />
      ))}
    </>
  );
};

export default SliderSectionsSkeleton;
