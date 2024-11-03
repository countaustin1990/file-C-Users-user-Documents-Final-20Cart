import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('dark');

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark'); // Default to dark mode
    }
  }, []);

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} /> {/* Pass theme prop to Home */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
