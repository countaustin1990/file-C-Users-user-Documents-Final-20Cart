// ApiContext.js
import { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState(false);

  return (
    <ApiContext.Provider value={{ globalLoading, setGlobalLoading }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
