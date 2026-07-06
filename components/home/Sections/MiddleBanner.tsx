"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import focusSearch from "@/lib/focusSearch";

const MiddleBanner = () => {
  return (
    <Container>
      <section className="my-16 overflow-hidden rounded-3xl">
        <div
          className="relative min-h-90 sm:min-h-105 lg:h-120 bg-cover bg-center"
          style={{ backgroundImage: "url('/middleBaner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div
            className="relative z-10 flex h-full flex-col items-center
            justify-center px-6 py-12 text-center
            sm:px-10 lg:px-20"
          >
            <span
              className="mb-5 rounded-full bg-orange-500/20
              px-4 py-2 text-xs font-semibold tracking-wide
              text-orange-300 sm:text-sm"
            >
              Delicious Recipes
            </span>

            <h2
              className="max-w-4xl font-black leading-tight
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl"
            >
              Cook Like A Professional Chef
            </h2>

            <p
              className="mt-5 max-w-2xl
              text-sm text-zinc-200
              sm:text-base
              lg:text-lg"
            >
              Discover thousands of recipes from the best food publishers around
              the world.
            </p>

            <Button
              onClick={focusSearch}
              className="mt-8 rounded-full bg-orange-500
              px-8 py-6 font-bold text-white
              transition-all duration-300
              hover:scale-105 hover:bg-orange-600
              text-sm sm:text-base
              cursor-pointer"
            >
              Start Searching
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default MiddleBanner;
