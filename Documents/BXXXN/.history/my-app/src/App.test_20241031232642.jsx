import React from 'react';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme}>
        {/* You can add additional content here if needed */}
      </Navbar>
      {/* Other components or content can go here */}
    </div>
  );
};

export default App;
