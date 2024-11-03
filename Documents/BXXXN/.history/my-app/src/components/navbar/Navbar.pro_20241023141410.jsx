import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Website Name */}
        <h1 className="text-2xl font-bold">My Website</h1>
        
        {/* Links for Desktop */}
        <ul className="hidden md:flex space-x-4">
          <li><Link href="#home" className="hover:underline">Home</Link></li>
          <li><Link href="#about" className="hover:underline">About</Link></li>
          <li><Link href="#services" className="hover:underline">Services</Link></li>
          <li><Link href="#contact" className="hover:underline">Contact</Link></li>
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
          <li><a href="#home" className="block">Home</a></li>
          <li><a href="#about" className="block">About</a></li>
          <li><a href="#services" className="block">Services</a></li>
          <li><a href="#contact" className="block">Contact</a></li>
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
