import { useEffect, useState } from 'react';
import IStyles from '../../Interfaces/IBeerStyles';
import { getStyles } from '../../repositories/Recipes';

const GetStylesHook = () => {
  const [styles, setStyles] = useState<IStyles[]>([]);

  useEffect(() => {
    getStyles()
      .then((styelesData) => {
        setStyles(styelesData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return [styles];
};

export default GetStylesHook;
