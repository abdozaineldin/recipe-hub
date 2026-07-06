"use client";
import { SearchX } from "lucide-react";
import { motion } from "motion/react";

const EmbtySearch = () => {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
        }}
        className="mb-6 rounded-full bg-orange-100 dark:bg-orange-500/10 p-6"
      >
        <SearchX size={70} className="text-recipe_orange animate-pulse" />
      </motion.div>

      <motion.h2
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-3xl font-bold"
      >
        No recipes found
      </motion.h2>

      <motion.p
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-3 max-w-md text-zinc-500 dark:text-zinc-400"
      >
        We couldn't find any recipes matching your search.
        <br />
        Try another keyword like <b>pizza</b>, <b>chicken</b> or <b>cake</b>.
      </motion.p>
    </div>
  );
};

export default EmbtySearch;
