"use client";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Recipe } from "@/types/recipe";
import RecipeCard from "../Cards/RecipeCard";
import Container from "@/components/Container";

interface Props {
  title: string;
  search: string;
  recipes: Recipe[];
}

const RecipeSliderSection = ({ title, search, recipes }: Props) => {
  const rawId = useId();
  const sliderId = rawId.replace(/:/g, "");
  const prevClass = `recipe-prev-${sliderId}`;
  const nextClass = `recipe-next-${sliderId}`;

  return (
    <Container className="my-15">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-recipe_orange">{title}</h2>
          <p className="mt-2 text-muted-foreground">
            Discover delicious recipes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href={`/search?q=${search}`}
            className="group flex items-center gap-1.5 text-sm font-semibold text-recipe_orange"
          >
            View All
            <ArrowRight
              size={14}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <span className="hidden mx-1 h-5 w-px bg-border sm:block" />

          <div className="flex items-center gap-2">
            <button
              className={`${prevClass} flex h-8 w-8 items-center justify-center cursor-pointer
              rounded-full border border-recipe_orange text-recipe_orange
              transition-all duration-200 hover:bg-recipe_orange hover:text-white
              [&.swiper-button-disabled]:pointer-events-none
              [&.swiper-button-disabled]:cursor-not-allowed
              [&.swiper-button-disabled]:opacity-30
              [&.swiper-button-disabled]:hover:bg-transparent
              [&.swiper-button-disabled]:hover:text-recipe_orange`}
            >
              <ChevronLeft size={16} />
            </button>

            <button
              className={`${nextClass} flex h-8 w-8 items-center justify-center cursor-pointer
              rounded-full border border-recipe_orange text-recipe_orange
              transition-all duration-200 hover:bg-recipe_orange hover:text-white
              [&.swiper-button-disabled]:pointer-events-none
              [&.swiper-button-disabled]:cursor-not-allowed
              [&.swiper-button-disabled]:opacity-30
              [&.swiper-button-disabled]:hover:bg-transparent
              [&.swiper-button-disabled]:hover:text-recipe_orange`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.${prevClass}`,
            nextEl: `.${nextClass}`,
          }}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default RecipeSliderSection;
