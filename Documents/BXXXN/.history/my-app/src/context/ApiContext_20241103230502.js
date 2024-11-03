// ApiContext.js
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState(false);

  return (
    <ApiContext.Provider value={{ globalLoading, setGlobalLoading }}>
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate 'children' prop
};

export const useApiContext = () => useContext(ApiContext);
