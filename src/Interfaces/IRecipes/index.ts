export default interface IRecipes {
  id: string;
  name: string;
  color: string;
  og: string;
  fg: string;
  ibu: string;
  abv: string;
  final_volume: string;
  global_efficiency: string;
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
  quantity: string;
  add_type: string;
  add_time: string;
}
export interface IFermentablesRecipe {
  id: string;
  quantity: string;
  potenttial: string;
  color: string;
}
export interface IYeastRecipe {
  id: string;
}
