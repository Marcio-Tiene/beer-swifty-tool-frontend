import { initialRecipeReference } from '../config/initialReferences';
import IRecipes from '../Interfaces/IRecipes';
import api from './api';

export default class GetRecipes {
  recipes: IRecipes[] = JSON.parse(
    localStorage.getItem('myRecipes') as string
  ) || [initialRecipeReference];

  totalOfRecipes =
    this.recipes.length === 1
      ? `Total de ${this.recipes.length} receita`
      : `Total de ${this.recipes.length} receitas`;

  recipesLastUpdate = new Date(
    Math.max(
      ...this.recipes.map((recipe) => new Date(recipe.updated_at).getTime())
    )
  ).toLocaleDateString();
  hasRecipes = this.recipes[0].id !== 'NO_DATA';

  async LoadRecipes(): Promise<void> {
    try {
      const response = await api.get('/recipes', { timeout: 1500 });
      const sortedRecipesByDate = this.SortRecipesByDate(response.data);

      localStorage.setItem('myRecipes', JSON.stringify(sortedRecipesByDate));
    } catch (err) {
      console.log(err);
    }
  }

  SortRecipesByDate(recipes: IRecipes[]) {
    recipes.sort((recipe_01: IRecipes, recipe_02: IRecipes) => {
      const date_01InMs = new Date(recipe_01.updated_at).getTime();
      const date_02InMs = new Date(recipe_02.updated_at).getTime();

      return date_02InMs - date_01InMs;
    });
    return recipes;
  }
}
