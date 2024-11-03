import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={`p-16 ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gradient-to-r from-green-700 to-gray-800 text-white'}`}>
      <div className="w-full max-w-full p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-5" onClick={scrollToTop}>
              <span className="text-xl font-bold capitalize tracking-wide">
                Orthopedic Clinic
              </span>
            </Link>
            <p className={`mt-2 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-100'}`}>
              A great taste of paypay cooking
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold tracking-wider">
              Resources
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gray-600 transition duration-300" onClick={scrollToTop}>Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-600 transition duration-300" onClick={scrollToTop}>Products</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold tracking-wider">
              Legal
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-600 transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-gray-600 transition duration-300">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className={`my-6 ${theme === 'light' ? 'border-gray-400' : 'border-gray-600'}`} />

        <div className="flex justify-between items-center">
          <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-100'}`}>
            Najoda Foundation © 2023. All Rights Reserved.
          </span>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`text-xl ${theme === 'light' ? 'hover:text-blue-700' : 'hover:text-blue-600'}`}>
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`text-xl ${theme === 'light' ? 'hover:text-pink-600' : 'hover:text-white'}`}>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`text-xl ${theme === 'light' ? 'hover:text-blue-800' : 'hover:text-blue-700'}`}>
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`text-xl ${theme === 'light' ? 'hover:text-red-600' : 'hover:text-white'}`}>
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={`text-xl ${theme === 'light' ? 'hover:text-blue-500' : 'hover:text-white'}`}>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Footer;
