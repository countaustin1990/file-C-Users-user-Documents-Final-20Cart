import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar.test';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';


const App = () => {
  // State for theme, default to 'dark'
  const [theme, setTheme] = useState('dark');

  // Function to toggle theme and update localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Load saved theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <Router>
      <div className={`app ${theme}-mode`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />  {/* Default route */}
          {/* Add more routes as needed */}
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;
