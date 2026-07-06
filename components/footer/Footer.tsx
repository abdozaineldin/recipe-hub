import Link from "next/link";
import Logo from "../navbar/Logo";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />

            <p className="mt-5 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              Discover thousands of delicious recipes from around the world.
              Search, save your favorites, and start cooking today.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-zinc-500 transition-colors hover:text-recipe_orange dark:text-zinc-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/favorites"
                  className="text-zinc-500 transition-colors hover:text-recipe_orange dark:text-zinc-400"
                >
                  Favorites
                </Link>
              </li>

              <li>
                <Link
                  href="/search"
                  className="text-zinc-500 transition-colors hover:text-recipe_orange dark:text-zinc-400"
                >
                  Search Recipes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-white">
              Support
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-zinc-500 transition-colors hover:text-recipe_orange dark:text-zinc-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-zinc-500 transition-colors hover:text-recipe_orange dark:text-zinc-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-zinc-500 transition-colors hover:text-recipe_orange dark:text-zinc-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-zinc-500 transition-colors hover:text-recipe_orange dark:text-zinc-400"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-white">
              Stay Updated
            </h3>

            <p className="mb-5 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Subscribe to receive the latest recipes and cooking inspiration.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-recipe_orange dark:border-zinc-700 dark:bg-zinc-900"
              />

              <button className="rounded-xl bg-recipe_orange px-4 py-3 font-semibold text-white transition hover:bg-orange-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-zinc-500 md:flex-row dark:text-zinc-400">
          <p>© {new Date().getFullYear()} RecipeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
