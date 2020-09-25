import React from 'react';
import GetRecipes from '../../../hooks/GetRecipes';
import GetStyles from '../../../hooks/GetStyles';

const RecipeBanner = () => {
  const [styles] = GetStyles();

  const [recipes] = GetRecipes();
  return (
    <>
      {recipes.slice(0, 3).map((recipes: any) => {
        let styleDesc: string = '';
        let styleName: string = '';
        let styleImg: string = '';

        styles.map((style: any) => {
          if (style.id === recipes.style_id) {
            styleDesc = style.description;
            styleName = style.style_name;
            styleImg = style.image_url;
          }
        });

        return (
          <div key={`${recipes.id}${recipes.recipe_name} `}>
            <span
              style={{
                height: '64px',
                display: 'flex',
                borderRadius: '50%',
                border: '6px solid #f29f05',
                width: '64px',
                overflow: 'hidden',
              }}
            >
              <img
                src={styleImg}
                style={{ maxHeight: '75px', display: 'flex' }}
              ></img>
            </span>
            <h1>{recipes.recipe_name}</h1>

            <h3>Estilo: {styleName}</h3>
            <p>{styleDesc}</p>
            <h3> ABV: {recipes.abv}%</h3>

            <hr />
          </div>
        );
      })}
    </>
  );
};
export default RecipeBanner;
