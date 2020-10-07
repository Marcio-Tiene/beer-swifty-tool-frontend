import React from 'react';
import GetRecipesHook from '../../../hooks/GetRecipesHook';
import GetStylesHook from '../../../hooks/GetStylesHook';
import IStyles from '../../../Interfaces/IStyles';

import { DashBoardRecipeCard, DivName, Span } from './styles';

const RecipeBanner = () => {
  const [styles] = GetStylesHook();

  const [recipes] = GetRecipesHook();
  return (
    <>
      {recipes.slice(0, 3).map((recipes) => {
        let styleName: string = '';
        let styleImg: string = '';
        let updatedAt: string = new Date(
          recipes.updated_at
        ).toLocaleDateString();

        styles.map((style: IStyles) => {
          if (style.id === recipes.style_id) {
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
