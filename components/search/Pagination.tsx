import Link from "next/link";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface Props {
  currentPage: number;
  totalPages: number;
  search: string;
}

const Pagination = ({ currentPage, totalPages, search }: Props) => {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <div className="mt-14 flex items-center justify-center gap-2 flex-wrap">
      <Link
        href={`/search?q=${search}&page=${Math.max(1, currentPage - 1)}`}
        className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200
        ${
          currentPage === 1
            ? "pointer-events-none opacity-40"
            : "hover:bg-recipe_orange hover:text-white hover:border-recipe_orange"
        }`}
      >
        <ChevronLeft size={18} />
      </Link>

      {pages.map((page, index) =>
        page === "..." ? (
          <div
            key={`dots-${index}`}
            className="flex h-11 w-11 items-center justify-center text-muted-foreground"
          >
            <MoreHorizontal size={18} />
          </div>
        ) : (
          <Link
            key={`page-${page}-${index}`}
            href={`/search?q=${encodeURIComponent(search)}&page=${page}`}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border font-semibold transition-all duration-200
            ${
              page === currentPage
                ? "bg-recipe_orange border-recipe_orange text-white shadow-lg"
                : "hover:bg-recipe_orange hover:text-white hover:border-recipe_orange"
            }`}
          >
            {page}
          </Link>
        ),
      )}

      <Link
        href={`/search?q=${search}&page=${Math.min(
          totalPages,
          currentPage + 1,
        )}`}
        className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200
        ${
          currentPage === totalPages
            ? "pointer-events-none opacity-40"
            : "hover:bg-recipe_orange hover:text-white hover:border-recipe_orange"
        }`}
      >
        <ChevronRight size={18} />
      </Link>
    </div>
  );
};

export default Pagination;
