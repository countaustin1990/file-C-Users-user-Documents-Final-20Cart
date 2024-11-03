import { createContext, useContext, useState, useTheme } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from './themecontext/themeContext';

const ThemeContext = createContext();
const ThemeProvider = setProvider();

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

export const useTheme = () => {
  return useContext(ThemeContext);
};
