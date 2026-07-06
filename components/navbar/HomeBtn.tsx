import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeBtn = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === "/";

  return (
    <div>
      <Link href={"/"}>
        <Button
          className={cn(
            `cursor-pointer bg-white font-medium hover:bg-orange-50 hover:text-orange-500 hover:border-orange-400 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-800`,
            isActive
              ? "border-orange-500 text-orange-500 dark:border-orange-500 dark:text-orange-500"
              : "text-gray-700 border-gray-400",
            className,
          )}
        >
          Home
        </Button>
      </Link>
    </div>
  );
};

export default HomeBtn;
