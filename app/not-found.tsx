import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <div className="rounded-full bg-orange-100 p-6 dark:bg-orange-500/15">
        <UtensilsCrossed
          size={80}
          className="text-recipe_orange animate-bounce"
        />
      </div>

      <h1 className="mt-8 text-6xl font-black text-recipe_orange">404</h1>

      <h2 className="mt-3 text-3xl font-bold">Recipe Not Found</h2>

      <p className="mt-4 max-w-md leading-7 text-muted-foreground">
        The recipe you're looking for doesn't exist, has been removed, or the
        link is incorrect.
      </p>

      <Link href="/" className="mt-10">
        <Button className="cursor-pointer rounded-full bg-recipe_orange px-8 hover:bg-orange-600">
          Back To Home
        </Button>
      </Link>
    </main>
  );
}
