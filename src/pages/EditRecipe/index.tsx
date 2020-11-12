import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { InputField, TextareaField } from './style';
import GetRecipes from '../../services/GetRecipes';
import Error404 from '../Error404';

import IRecipes from '../../Interfaces/IRecipes';
import Form from '../../components/Form';
import { SubmitHandler } from '@unform/core';
import api from '../../services/api';
import PageDefault from '../../components/PageDefault';
import EditeRecipes from '../../services/EditRecipes';

interface ParamTypes {
  id: string;
  name: string;
  notes: string;
}

const EditRecipe: React.FC<ParamTypes> = () => {
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  const { recipes, EditRecipe, LoadRecipes } = new EditeRecipes();

  const recipe = recipes.find((recipe) => recipe.id === id) as IRecipes;
  const [recipeState, setRecipeState] = useState(recipe);

  const handleSubmit: SubmitHandler<IRecipes> = async (data) => {
    setRecipeState({ ...recipeState, ...data });
    const updatedRecipe = { ...recipe, ...data };

    await EditRecipe(updatedRecipe, id);

    console.log(recipeState);
  };

  const DeleteRecipe = async () => {
    await api.delete(`recipes/${id}`);
  };

  async function DeleteHandler() {
    await DeleteRecipe();
    await LoadRecipes();
    history.push('/recipes');
  }

  if (recipe) {
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
          <div style={{ display: 'flex' }}>
            <button>editar</button>
            <button onClick={DeleteHandler}>delete</button>
          </div>
        </Form>
      </PageDefault>
    );
  } else {
    return <Error404 />;
  }
};

export default EditRecipe;
