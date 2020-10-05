import { useEffect, useState } from 'react';
import { getStyles } from '../../repositories/Recipes';
import { Styles } from '../../types';

const GetStyles = () => {
  const [styles, setStyles] = useState<Styles[]>([]);

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

export default GetStyles;
