import React from 'react';
import GetRecipes from '../../../hooks/GetRecipes';
import GetStyles from '../../../hooks/GetStyles';
import { DashBoardRecipeCard, DivName, Span } from './styles';

const RecipeBanner = () => {
  const [styles] = GetStyles();

  const [recipes] = GetRecipes();
  return (
    <>
      {recipes.slice(0, 3).map((recipes: any) => {
        // let styleDesc: string = '';
        let styleName: string = '';
        let styleImg: string = '';
        let updatedAt: string = new Date(
          recipes.updated_at
        ).toLocaleDateString();

        styles.map((style: any) => {
          if (style.id === recipes.style_id) {
            // styleDesc = style.description;
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
            <h5 style={{ alignSelf: 'center', width: '33%' }}>
              EBC:&nbsp;{recipes.color} &nbsp;&nbsp; ABV:&nbsp;{' '}
              {Number(recipes.abv).toFixed(1)}% &nbsp;&nbsp; IBU:&nbsp;
              {recipes.ibu}
            </h5>
          </DashBoardRecipeCard>
        );
      })}
    </>
  );
};
export default RecipeBanner;
