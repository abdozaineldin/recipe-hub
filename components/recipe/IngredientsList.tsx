"use client";
import { Ingredient } from "@/types/recipe-details";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

interface Props {
  ingredients: Ingredient[];
}

const IngredientsList = ({ ingredients }: Props) => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">Ingredients</h2>

      <div className="grid gap-4">
        {ingredients.map((ingredient, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.05,
            }}
            className="flex items-center gap-4 rounded-2xl border p-4 hover:border-orange-400 transition"
          >
            <CheckCircle2 className="text-green-500 shrink-0" size={22} />

            <p className="text-[15px]">
              {ingredient.quantity && (
                <>
                  <span className="font-bold">{ingredient.quantity}</span>{" "}
                </>
              )}
              {ingredient.unit && (
                <>
                  <span className="font-semibold">{ingredient.unit}</span>{" "}
                </>
              )}
              {ingredient.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IngredientsList;
