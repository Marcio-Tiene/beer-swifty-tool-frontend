import React from 'react';
import PageDefault from '../../components/PageDefault';
import RecipeListContent from '../../components/RecipeListContent';

const Recipes: React.FC = () => {
  return (
    <PageDefault>
      <RecipeListContent />
    </PageDefault>
  );
};

export default Recipes;
