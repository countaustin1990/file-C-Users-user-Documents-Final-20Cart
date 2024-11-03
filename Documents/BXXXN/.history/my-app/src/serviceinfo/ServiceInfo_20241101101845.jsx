import PropTypes from 'prop-types';
import { FaTshirt, FaShippingFast, FaCheckCircle } from 'react-icons/fa';

const ServicesInfo = ({ isDarkMode }) => {
  return (
    <section className={`info-section py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Commitment to You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Line of Services Column */}
          <div className={`shadow-lg p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-center mb-4">
              <FaTshirt className={`text-4xl ${isDarkMode ? 'text-indigo-300' : 'text-indigo-500'}`} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Line of Services</h3>
            <p>
              From personal styling to seasonal collections, we offer an array of services tailored to fit every fashion need. Our team is dedicated to helping you find the perfect style for any occasion.
            </p>
          </div>

          {/* Delivery Time Column */}
          <div className={`shadow-lg p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-center mb-4">
              <FaShippingFast className={`text-4xl ${isDarkMode ? 'text-indigo-300' : 'text-indigo-500'}`} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Delivery Time</h3>
            <p>
              We pride ourselves on quick processing and delivery. Orders are usually dispatched within 24-48 hours and arrive within 3-5 business days, depending on your location.
            </p>
          </div>

          {/* Quality Assurance Column */}
          <div className={`shadow-lg p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-center mb-4">
              <FaCheckCircle className={`text-4xl ${isDarkMode ? 'text-indigo-300' : 'text-indigo-500'}`} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
            <p>
              Every item goes through rigorous quality checks to ensure durability and comfort. Our commitment to excellence means that you receive only the best, crafted with care.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

ServicesInfo.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default ServicesInfo;
