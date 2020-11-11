import React, { Key, useState } from 'react';

import { InputField, TextareaField } from './style';
import GetRecipes from '../../services/GetRecipes';
import Error404 from '../Error404';

import IRecipes from '../../Interfaces/IRecipes';
import Form from '../../components/Form';
import { SubmitHandler } from '@unform/core';
import api from '../../services/api';
import PageDefault from '../../components/PageDefault';
import { useHistory } from 'react-router';

interface ParamTypes {
  id: string;
  name: string;
  notes: string;
}

const CreateRecipe: React.FC<ParamTypes> = () => {
  const history = useHistory();
  const { recipes, LoadRecipes } = new GetRecipes();

  const recipe = recipes[0];

  const [recipeState, setRecipeState] = useState(recipe);

  const createRecipe = async (completeData: IRecipes) => {
    await api.post(`/recipes`, completeData);
  };

  const handleSubmit: SubmitHandler<IRecipes> = async (data) => {
    setRecipeState({ ...recipeState, ...data });
    const createdRecipe = { ...recipe, ...data };

    await createRecipe(createdRecipe);
    LoadRecipes();

    console.log(recipeState);
  };

  return (
    <PageDefault>
      <h1>Receita : {recipeState.name}</h1>
      <img src={recipeState?.img_url} alt='foto da receita' />
      <Form onSubmit={handleSubmit}>
        <InputField
          label='recipe name'
          name='name'
          defaultValue={recipeState.name}
        />
        <TextareaField
          label='Short description '
          name='short_description'
          defaultValue={recipeState.short_description}
        />
        <TextareaField
          label='URL da imagem '
          name='img_url'
          defaultValue={recipeState.img_url}
        />
        <button>criar</button>
      </Form>
    </PageDefault>
  );
};
export default CreateRecipe;
