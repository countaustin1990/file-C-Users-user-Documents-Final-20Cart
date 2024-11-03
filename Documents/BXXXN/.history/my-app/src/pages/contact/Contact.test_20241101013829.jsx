import PropTypes from 'prop-types';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = ({ theme }) => {
  return (
    <div className={`container-fluid h-70 py-12 px-4 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="text-center mb-8">
        <p className="text-lg">
          We’d love to hear from you! Reach out with any questions, feedback, or to learn more about our work. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-8">
        <div className="flex flex-col items-center p-6">
          <FaPhone className="text-3xl mb-2" />
          <h2 className="text-xl font-semibold">Phone</h2>
          <p className="text-gray-500">+1 (555) 123-4567</p>
        </div>
        <div className="flex flex-col items-center p-6">
          <FaEnvelope className="text-3xl mb-2" />
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-gray-500">contact@fashionbrand.com</p>
        </div>
        <div className="flex flex-col items-center p-6">
          <FaMapMarkerAlt className="text-3xl mb-2" />
          <h2 className="text-xl font-semibold">Address</h2>
          <p className="text-gray-500">123 Fashion Ave, New York, NY</p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4 text-center">Get in Touch</h2>
      <form className="container mx-auto max-w-lg">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className={`w-full p-3 border rounded ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700 text-white'}`}
            placeholder="Your Name" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={`w-full p-3 border rounded ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700 text-white'}`}
            placeholder="Your Email" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            className={`w-full p-3 border rounded ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700 text-white'}`}
            placeholder="Your Message" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3 mt-4 text-lg font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold mb-4">Connect with us on Social Media</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-2xl hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-2xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl hover:text-blue-700">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Contact.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Contact;
