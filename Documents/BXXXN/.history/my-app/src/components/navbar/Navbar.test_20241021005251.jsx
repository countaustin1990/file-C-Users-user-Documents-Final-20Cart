import PropTypes from 'prop-types';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`navbar ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">My Website</h1>
        <button onClick={toggleTheme} className="toggle-theme">
          {theme === 'light' ? '🌙' : '☀️'} {/* Simple icon for toggle */}
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
