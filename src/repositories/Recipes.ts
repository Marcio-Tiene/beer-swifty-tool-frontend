export async function getRecipes(): Promise<any> {
  return fetch('http://localhost:3333/recipes').then(async (res) => {
    if (res.ok) {
      const recipeList = await res.json();
      return recipeList;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}
