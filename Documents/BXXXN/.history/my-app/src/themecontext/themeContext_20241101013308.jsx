import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Add propTypes for the ThemeProvider
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
