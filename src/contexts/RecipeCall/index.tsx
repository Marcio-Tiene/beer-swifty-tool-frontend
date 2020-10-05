import React, { createContext, useState } from 'react';

export const isLogedIn = createContext({});

const RecipeCall = (children: React.ReactNode) => {
  const [login, setLogin] = useState(false);
  return (
    <isLogedIn.Provider value={{ login, setLogin }}>
      {children}
    </isLogedIn.Provider>
  );
};

export default RecipeCall;
