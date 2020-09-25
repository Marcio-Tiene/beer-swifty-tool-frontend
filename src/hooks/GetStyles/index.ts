import { useEffect, useState } from 'react';
import { getRecipes, getStyles } from '../../repositories/Recipes';

const GetStyles = () => {
  const [styles, setStyles] = useState<any>([
    {
      id: 0,
      style_name: '',
      description: '',
    },
  ]);

  useEffect(() => {
    getStyles()
      .then((data) => {
        setStyles(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return [styles, setStyles];
};

export default GetStyles;
