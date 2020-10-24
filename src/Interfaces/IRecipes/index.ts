export default interface IRecipes {
  id: string;
  name: string;
  color: number;
  og: number;
  fg: number;
  ibu: number;
  abv: number;
  final_volume: number;
  global_efficiency: number;
  description: string;
  short_description: string;
  notes: string;
  img_url: string;
  is_private: boolean;
  user_id: string;
  style_id: string;
  created_at: string;
  updated_at: string;
  hops_recipe: IHopRecipe[];
  fermentables_recipe: IFermentablesRecipe[];
  yeast_recipe: IYeastRecipe[];
}

export interface IHopRecipe {
  id: string;
  quantity: number;
  add_type: string;
  add_time: number;
}
export interface IFermentablesRecipe {
  id: string;
  quantity: number;
  potenttial: number;
  color: number;
}
export interface IYeastRecipe {
  id: string;
}
