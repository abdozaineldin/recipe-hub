import type { Metadata } from "next";

import Container from "@/components/Container";
import RecipeGrid from "@/components/home/shared/RecipeGrid";
import SectionHeader from "@/components/home/shared/SectionHeader";
import EmbtySearch from "@/components/search/EmbtySearch";
import Pagination from "@/components/search/Pagination";

import { searchRecipes } from "@/services/recipe.service";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { q = "Search" } = await searchParams;

  return {
    title: `${q} Recipes`,
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q = "", page = "1" } = await searchParams;
  const currentPage = Number(page);

  const RESULT_PAGE = 9;
  const { recipes: allRecipes, results } = await searchRecipes(q);
  const totalPages = Math.ceil(allRecipes.length / RESULT_PAGE);
  const start = (currentPage - 1) * RESULT_PAGE;
  const recipes = allRecipes.slice(start, start + RESULT_PAGE);

  if (recipes.length === 0) {
    return (
      <Container>
        <EmbtySearch />
      </Container>
    );
  }

  return (
    <Container>
      <main className="py-10">
        <Suspense>
          <SectionHeader
            fTitle={`Results for "${q}"`}
            subtitle={`${results} Recipes Found`}
          />

          <RecipeGrid recipes={recipes} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            search={q}
          />
        </Suspense>
      </main>
    </Container>
  );
}
