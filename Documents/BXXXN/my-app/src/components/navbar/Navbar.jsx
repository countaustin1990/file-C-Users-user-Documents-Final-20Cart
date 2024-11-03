import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar shadow-lg sticky ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Website Name */}
        <h1 className="text-2xl font-bold uppercase text-green-500">ALapparel</h1>
        
        {/* Links for Desktop */}
        <ul className="hidden md:flex space-x-4 uppercase">
          <li><Link to="home" className="hover:underline font-semibold">Home</Link></li>
          <li><Link to="about" className="hover:underline font-semibold">About</Link></li>
          <li><Link to="services" className="hover:underline font-semibold">Services</Link></li>
          <li><Link to="contact" className="hover:underline font-semibold">Contact</Link></li>
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
        <ul className={`md:hidden p-4 space-y-2 ${theme === 'light' ? 'bg-white text-green-500' : 'bg-gray-800 text-green-500'}`}>
          <li><Link to="home" className="block font-semibold" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="about" className="block font-semibold" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="services" className="block font-semibold" onClick={handleLinkClick}>Services</Link></li>
          <li><Link to="contact" className="block font-semibold" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
