"use client";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useMounted } from "@/hooks/useMounted";

const FavoritesBtn = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === "/favorites";
  const favorites = useFavoritesStore((state) => state.favorites);
  const mounted = useMounted();

  const count = mounted ? favorites.length : 0;

  return (
    <div>
      <Link href="/favorites">
        <Button
          variant="outline"
          className={cn(
            "cursor-pointer group bg-white font-medium hover:bg-orange-50 hover:text-orange-500 hover:border-orange-400 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-800",
            isActive
              ? "border-orange-500 text-orange-500 dark:border-orange-500 dark:text-orange-500"
              : "border-gray-400 text-gray-700 dark:border-gray-400 dark:text-gray-300",
            className,
          )}
        >
          Favorites
          {count > 0 && (
            <span
              className={cn(
                "ml-1.5 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white group-hover:bg-orange-500",
                isActive ? "bg-orange-500" : "bg-gray-400",
              )}
            >
              {count}
            </span>
          )}
        </Button>
      </Link>
    </div>
  );
};

export default FavoritesBtn;
