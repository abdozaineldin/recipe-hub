import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <div className="flex h-full items-center">
      <div className="max-w-2.5xl px-6 sm:px-10 lg:px-14">
        <h1
          className="font-extrabold text-white
          text-3xl sm:text-5xl lg:text-6xl
          leading-[1.15] sm:leading-tight"
        >
          Discover
          <br />
          Delicious Recipes
        </h1>

        <p
          className="mt-3 sm:mt-0
          max-w-xl
          text-sm sm:text-lg
          leading-6 sm:leading-8
          text-gray-200"
        >
          Find thousands of recipes from around the world and cook your favorite
          food at home.
        </p>

        <HeroButtons />
      </div>
    </div>
  );
};

export default HeroContent;
