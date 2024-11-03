import PropTypes from 'prop-types';
import Tailor from '../../assets/Tailor.jpg'; // Adjust the path based on your project structure
//import stylingConsultationImage from './assets/images/styling-consultation.jpg';
//import seasonalCollectionsImage from './assets/images/seasonal-collections.jpg';
//import alterationServicesImage from './assets/images/alteration-services.jpg';
//import personalShoppingImage from './assets/images/personal-shopping.jpg';
//import wardrobeRevampImage from './assets/images/wardrobe-revamp.jpg';

const Services = ({ theme }) => {
  const services = [
    { 
      title: "Custom Tailoring", 
      description: "Bespoke designs tailored to fit you perfectly.", 
      imageUrl: Tailor// Use the imported image here
    },

  ]


  return (
    <div className={`container-fluid py-12 px-4 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 ${theme === 'light' ? 'bg-white border border-gray-300' : 'bg-gray-700 border border-gray-600'}`}
          >
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-40 object-cover rounded-t-lg mb-4" 
            />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="className={`${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes validation
Services.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Services;
