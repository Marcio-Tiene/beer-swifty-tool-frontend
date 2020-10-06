import IStyles from '../../Interfaces/IBeerStyles';
import IRecipes from '../../Interfaces/IRecipes';

export async function getRecipes(): Promise<IRecipes[]> {
  return fetch('http://localhost:3333/recipes').then(async (res) => {
    if (res.ok) {
      const recipeList = (await res.json()) as IRecipes[];
      return recipeList;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

export async function getStyles(): Promise<IStyles[]> {
  return fetch('http://localhost:3333/style').then(async (res) => {
    if (res.ok) {
      const styleList = (await res.json()) as IStyles[];
      return styleList;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}
