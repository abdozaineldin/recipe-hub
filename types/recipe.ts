export interface Ingredient {
  quantity: number | null;
  unit: string;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  publisher: string;
  image_url: string;
  source_url?: string;
  servings?: number;
  cooking_time?: number;
}
