export interface Recipes {
  id?: string;
  recipe_name?: string;
  owner_id?: string;
  description?: string;
  style?: string;
  created_at?: string;
  updated_at?: string;

  srm?: number;
  fg?: number;
  og?: number;
  ibu?: number;
  abv?: number;

  hops?: {}[];
  fermentables?: {}[];
  yeasts?: {}[];
}
