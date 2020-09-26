import React from 'react';
import styled from 'styled-components';
import {
  DashBoardRecipeCard,
  DivName,
  Span,
} from '../../components/DashBoardContent/RecipeBanner/styles';
import PageDefault from '../../components/PageDefault';
import GetRecipes from '../../hooks/GetRecipes';
import GetStyles from '../../hooks/GetStyles';

const Div = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 8px #00000029;
  border-radius: 16px;

  margin: 2% 1% 0%;

  height: 90%;
  width: 80%;
  cursor: pointer;
  overflow: scroll;
  
  justify-self: center;
  }
  &::-webkit-scrollbar {
 border-radius:16px; 
  width: 16px;
  background: none;
  } 

/* Track */
&::-webkit-scrollbar-track {
  border-radius:16px;
  background: none;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  border-radius:16px;
  

  background: var(--primary-color);

  
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);

`;

const Recipes: React.FC = () => {
  const [styles] = GetStyles();

  const [recipes] = GetRecipes();
  return (
    <PageDefault>
      <Div>
        {recipes.map((recipes: any) => {
          let styleDesc: string = '';
          let styleName: string = '';
          let styleImg: string = '';
          let updatedAt: string = new Date(
            recipes.updated_at
          ).toLocaleDateString();

          styles.map((style: any) => {
            if (style.id === recipes.style_id) {
              styleDesc = style.description;
              styleName = style.style_name;
              styleImg = style.image_url;
            }
            return 1;
          });
          return (
            <DashBoardRecipeCard key={`${recipes.id}${recipes.recipe_name} `}>
              <Span BgImg={styleImg} />
              <DivName>
                <h1>{recipes.recipe_name}</h1>
                <h3>{styleName}</h3>
                <p>Última atualização em: {updatedAt}</p>
              </DivName>
              <div>{styleDesc}</div>
              <h5 style={{ alignSelf: 'center', width: '33%' }}>
                EBC:&nbsp;{recipes.color} &nbsp;&nbsp; ABV:&nbsp;{' '}
                {Number(recipes.abv).toFixed(1)}% &nbsp;&nbsp; IBU:&nbsp;
                {recipes.ibu}
              </h5>
            </DashBoardRecipeCard>
          );
        })}
      </Div>
    </PageDefault>
  );
};

export default Recipes;
