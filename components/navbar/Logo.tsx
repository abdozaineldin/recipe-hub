import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="flex items-center gap-1 group">
      <Image src={"/logoImg_2.png"} alt="logo" width={30} height={30} />

      <h2 className="text-2xl font-black tracking-wider text-recipe_dark_color dark:text-white">
        Recipe
        <span
          className="text-recipe_orange group-hover:text-recipe_light_orange
            transition-all duration-200"
        >
          Hub
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
