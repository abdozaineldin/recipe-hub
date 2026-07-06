"use client";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useMounted } from "@/hooks/useMounted"; // ✅ أضفنا
import RecipeGrid from "@/components/home/shared/RecipeGrid";
import SectionHeader from "@/components/home/shared/SectionHeader";
import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartCrack } from "lucide-react";

export default function FavoritesPage() {
  const { favorites } = useFavoritesStore();
  const mounted = useMounted();

  const count = mounted ? favorites.length : 0;
  const list = mounted ? favorites : [];

  return (
    <Container>
      <main className="py-10">
        <SectionHeader
          fTitle="My"
          sTitle="Favorites"
          subtitle={`${count} saved recipes`}
        />

        {list.length === 0 ? (
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10">
              <HeartCrack
                size={56}
                className="text-recipe_orange"
                strokeWidth={1.7}
              />
            </div>
            <h2 className="text-3xl font-bold">No Favorite Recipes Yet</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Save your favorite recipes to access them quickly anytime. Start
              exploring delicious meals now.
            </p>
            <Link href="/">
              <Button className="mt-8 cursor-pointer rounded-full bg-recipe_orange px-8 py-6 font-bold text-white hover:bg-orange-600">
                Explore Recipes
              </Button>
            </Link>
          </div>
        ) : (
          <RecipeGrid recipes={list} />
        )}
      </main>
    </Container>
  );
}
