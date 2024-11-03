import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar.test';
import Home from './pages/home/Home.test';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import About from './pages/about/About.test';
import Services from './pages/services/Services.test';
import BackToTopButton from './components/backtotopbutton/BackToTopButton';
//import ServicesInfo from './serviceinfo/ServiceInfo.test';

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
    setTheme(savedTheme || 'dark'); // Default to dark mode if no saved theme
  }, []);

  return (
    <Router>
      <BackToTopButton toggleTheme={toggleTheme} theme={theme}/>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/services" element={<Services theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
      </Routes>
      {/*<ServicesInfo isDarkMode={theme === 'dark'} />  Pass isDarkMode prop */}
      <Footer />
    </Router>
  );
};

export default App;
