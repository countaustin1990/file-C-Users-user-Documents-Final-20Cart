import { useEffect, useState } from 'react';
import './App.css';  // Make sure to link to your CSS file

const Folder = () => {
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
    } else {
      setTheme('dark'); // Default to dark mode
    }
  }, []);

  return (
    <div className={`app ${theme}-mode`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Experience the best content, tailored for you. Switch between light and dark mode!</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      {/* Dark/Light Mode Toggle */}
      <label className="switch">
        <input 
          type="checkbox" 
          checked={theme === 'light'} 
          onChange={toggleTheme} 
        />
        <span className="slider"></span>
        <span className="decoration"></span>
      </label>
    </div>
  );
};

export default Folder;
