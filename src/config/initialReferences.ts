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
  yeasts_recipe: [{ id: '0' }],
};

export const myRecipe = {
  name: 'teste',
  final_volume: 37,
  description:
    'Uma American Pale Ale decididamente mais lupulada e amarga,moderadamente forte, apresentando variedades de lúpulos americanos modernos ou Novo Mundo. O balanço é orientado para os lúpulos, com um perfil de fermentação limpo, final seco e limpo, com sustentação de maltes a permitir uma criativa variedade de caráteres de lúpulo destacar-se na cerveja.',
  short_description:
    'Uma American Pale Ale decididamente mais lupulada e amarga,moderadamente forte, apresentando variedades de lúpulos americanos modernos ou Novo Mundo.',

  notes: 'saporra ta começando a dar certo',
  img_url:
    'https://image.freepik.com/free-photo/close-up-bar-tender-filling-beer-from-bar-pump_107420-65347.jpg',
  privete: true,
  global_efficiency: 81,
  user_id: '5c18ca26-550e-410a-9e2c-c38476c94146',
  style_id: '64708e22-3966-420a-b236-0759f65c7825',
  hops: [
    {
      hop_id: 'a2b96a8a-6488-4948-b65c-b12819320f0d',
      quantity: 50,
      add_type: 'firsthop',
      add_time: 10,
      alpha_acid: 14,
    },
    {
      hop_id: 'a2b96a8a-6488-4948-b65c-b12819320f0d',
      quantity: 50,
      add_type: 'firsthop',
      add_time: 10,
      alpha_acid: 13,
    },
    {
      hop_id: 'a2b96a8a-6488-4948-b65c-b12819320f0d',
      quantity: 100,
      add_type: 'firsthop',
      add_time: 10,
      alpha_acid: 5.4,
    },
  ],
  fermentables: [
    {
      fermentable_id: 'a21ae611-5069-432c-9eea-04f70f5fb9cd',
      quantity: 3,
      potential: 1.036,
      color: 3,
    },
    {
      fermentable_id: 'a21ae611-5069-432c-9eea-04f70f5fb9cd',
      quantity: 3,
      potential: 1.037,
      color: 2,
    },
    {
      fermentable_id: 'a21ae611-5069-432c-9eea-04f70f5fb9cd',
      quantity: 0.5,
      potential: 1.032,
      color: 525,
    },
    {
      fermentable_id: 'a21ae611-5069-432c-9eea-04f70f5fb9cd',
      quantity: 0.5,
      potential: 1.032,
      color: 412,
    },
  ],
  yeasts: [
    {
      yeast_id: '40e81bab-fc49-45ae-afcd-05b0bfb1e6f5',
    },
  ],
};
