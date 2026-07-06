"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

type Props = {
  name: string;
  image: string;
};

const CategoryCard = ({ name, image }: Props) => {
  return (
    <Link href={`/search?q=${name.toLocaleLowerCase()}`}>
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="group flex flex-col items-center gap-3 rounded-2xl bg-orange-50 dark:bg-zinc-900 p-5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
          {name}
        </span>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
