import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { InputField, TextareaField } from './style';
import GetRecipes from '../../services/GetRecipes';
import Error404 from '../Error404';

import IRecipes from '../../Interfaces/IRecipes';
import Form from '../../components/Form';
import { SubmitHandler } from '@unform/core';
// import api from '../../services/api';

interface ParamTypes {
  id: string;
  name: string;
  notes: string;
}

const EditRecipe: React.FC<ParamTypes> = () => {
  const { id } = useParams<ParamTypes>();
  const { recipes } = new GetRecipes();

  const recipe = recipes.find((recipe) => recipe.id === id) as IRecipes;
  const [recipeState, setRecipeState] = useState(recipe);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    setRecipeState(Object.assign(recipeState, data));
    // await api.put(`/recipes/${id}`, recipeState);

    // await LoadRecipes();
    console.log(recipeState);
  };

  if (recipe) {
    return (
      <div>
        <h1>Receita : {recipeState.name}</h1>
        <img src={recipeState?.img_url} alt='foto da receita' />
        <Form onSubmit={handleSubmit}>
          <InputField
            label='recipe name'
            name='name'
            defaultValue={recipeState.name}
          />
          <TextareaField
            label='recipe notes'
            name='notes'
            defaultValue={recipeState.notes}
          />
          <button>editar</button>
        </Form>
      </div>
    );
  } else {
    return <Error404 />;
  }
};

export default EditRecipe;
