import { useEffect, useState } from 'react';
import IStyles from '../../Interfaces/IBeerStyles';

import api from '../../services/api';

const GetStylesHook = () => {
  const initialStyles: IStyles = {
    id: '',
    style_name: '',
    description: '',
    image_url: '',
  };
  const [styles, setStyles] = useState<IStyles[]>([initialStyles]);

  useEffect(() => {
    (async function loadRecipes(): Promise<void> {
      try {
        const response = await api.get('/styles');
        setStyles(response.data);
      } catch (err) {
        console.log('algo de errado não está certo');
      }
    })();
  }, []);

  return [styles];
};

export default GetStylesHook;
