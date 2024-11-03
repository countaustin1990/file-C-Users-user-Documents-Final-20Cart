import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

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
  children: PropTypes.node.isRequired, // Validate that children is required
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
