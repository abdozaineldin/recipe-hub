import CategoryCard from "../Cards/CategoryCard";
import SectionHeader from "../shared/SectionHeader";
import { categories } from "@/data/categories";

const PopularSearches = () => {
  return (
    <section className="mt-14">
      <SectionHeader
        fTitle="Popular"
        sTitle="Searches"
        subtitle="Browse by your favorite food"
      />

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 ">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
};

export default PopularSearches;
