export interface Recipes {
  id: string;
  recipe_name: string;
  owner_id: string;
  description: string;

  style_id: string;
  created_at: string;
  updated_at: string;

  srm: number;
  fg: number;
  og: number;
  ibu: number;
  abv: number;
  color: number;

  hops: {}[];
  fermentables: {}[];
  yeast: {}[];
}

export interface Styles {
  id: string;
  style_name: string;
  description: string;
  image_url: string;
}
