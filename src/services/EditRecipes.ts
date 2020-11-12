import IRecipes from '../Interfaces/IRecipes';
import api from './api';
import GetRecipes from './GetRecipes';

export default class EditeRecipes extends GetRecipes {
  EditRecipe = async (completeData: IRecipes, id: string) => {
    await this.updatedRecipePost(completeData, id);
    this.LoadRecipes();
  };
  updatedRecipePost = async (completeData: IRecipes, id: string) => {
    await api.put(`/recipes/${id}`, completeData);
  };
}
