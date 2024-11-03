import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Website Name */}
        <h1 className="text-2xl font-bold uppercase">Website</h1>
        
        {/* Links for Desktop */}
        <ul className="hidden md:flex space-x-4 uppercase">
          <li><Link to="home" className="hover:underline">Home</Link></li>
          <li><Link to="about" className="hover:underline">About</Link></li>
          <li><Link to="services" className="hover:underline">Services</Link></li>
          <li><Link to="contact" className="hover:underline">Contact</Link></li>
        </ul>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="ml-4 toggle-theme" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={handleMenuToggle} 
          className="block md:hidden focus:outline-none ml-4" 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✖' : '☰'} {/* Menu icon changes when clicked */}
        </button>
      </div>

      {/* Links for Mobile */}
      {isMenuOpen && (
        <ul className={`md:hidden p-4 space-y-2 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
          <li><Link to="home" className="block">Home</Link></li>
          <li><Link to="about" className="block">About</Link></li>
          <li><Link to="services" className="block">Services</Link></li>
          <li><Link to="contact" className="block">Contact</Link></li>
        </ul>
      )}

      {/* Render children if any */}
      {children}
    </nav>
  );
};

// PropTypes validation
Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  children: PropTypes.node, // Add this line to validate 'children'
};

export default Navbar;
