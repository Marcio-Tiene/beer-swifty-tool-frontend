import { IFermentablesRecipe, IHopRecipe, IYeastRecipe } from '../IRecipes';

export default interface ICreateRecipe {
  name: string;
  final_volume: number;
  description: string;
  short_description: string;
  notes: string;
  img_url: string;
  privete: boolean;
  global_efficiency: number;
  user_id: string;
  style_id: string;
  hops: IHopRecipeCreate[];
  fermentables: IFermentablesRecipeCreate[];
  yeasts: IYeastRecipeCreate[];
}

export interface IHopRecipeCreate {
  hop_id: string;
  quantity: number;
  add_type: string;
  add_time: number;
}
export interface IFermentablesRecipeCreate {
  fermentable_id: string;
  quantity: number;
  potenttial: number;
  color: number;
}
export interface IYeastRecipeCreate {
  yeast_id: string;
}
