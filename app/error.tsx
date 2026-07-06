"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CookingPot } from "lucide-react";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <div className="rounded-full bg-orange-100 p-6 dark:bg-orange-500/15">
        <CookingPot size={80} className="text-recipe_orange animate-pulse" />
      </div>

      <h1 className="mt-8 text-4xl font-black">Something Went Wrong</h1>

      <p className="mt-4 max-w-md leading-7 text-muted-foreground">
        We couldn't prepare this recipe right now.
        <br />
        Please try again in a moment.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button
          onClick={() => reset()}
          className="cursor-pointer rounded-full bg-recipe_orange px-7 hover:bg-orange-600"
        >
          Try Again
        </Button>

        <Link href="/">
          <Button
            variant="outline"
            className="cursor-pointer rounded-full px-7"
          >
            Go Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
