// "use client";
import Container from "@/components/Container";
import Hero from "@/components/home/hero/Hero";
import MiddleBanner from "@/components/home/Sections/MiddleBanner";
import PopularRecipes from "@/components/home/Sections/PopularSearchs";
import SliderSections from "@/components/home/Sections/SliderSections";
import TrendingRecipes from "@/components/home/Sections/TrendingRecipes";
import SliderSectionsSkeleton from "@/components/loading/SliderSectionsSkeleton";
import TrendingRecipesSkeleton from "@/components/loading/TrendingRecipesSkeleton";
import { Suspense } from "react";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  // throw new Error("test")
  return (
    <Container>
      <Hero />

      <PopularRecipes />

      <Suspense fallback={<TrendingRecipesSkeleton />}>
        <TrendingRecipes />
      </Suspense>

      <MiddleBanner />

      <Suspense fallback={<SliderSectionsSkeleton />}>
        <SliderSections />
      </Suspense>
    </Container>
  );
}
