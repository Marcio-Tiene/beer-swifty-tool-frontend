import IRecipes from '../Interfaces/IRecipes';

export const initialRecipeReference: IRecipes = {
  id: 'NO_DATA',
  name: '',
  user_id: '',
  description: '',
  final_volume: 0,
  global_efficiency: 0,
  img_url: '',
  is_private: true,
  notes: '',
  short_description: '',
  style_id: '',
  created_at: '2020-11-10T23:11:32.862Z',
  updated_at: '',
  fg: 0,
  og: 0,
  ibu: 0,
  abv: 0,
  color: 0,
  hops_recipe: [{ id: '0', quantity: 0, add_time: 0, add_type: '' }],
  fermentables_recipe: [{ id: '0', quantity: 0, color: 0, potenttial: 0 }],
  yeast_recipe: [{ id: '0' }],
};
