import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social icons
import './style.css';  // Make sure to link to your CSS file or Tailwind
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const HeroSection = ({ theme }) => { // Accept theme as a prop
  return (
    <div className={`app ${theme}-mode`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="font-extrabold">Welcome to Our Website</h1>
          <p className="lead font-semibold">Experience the best content, tailored for you. Switch between light and dark mode!</p>
          <button className="cta-button">Learn More</button>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-6 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-400 hover:text-blue-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl text-pink-600 hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-700 hover:text-blue-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
