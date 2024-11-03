import PropTypes from 'prop-types';
import Tailor from '../../assets/Tailor.jpg'; // Adjust the path based on your project structure

const Services = ({ theme }) => {
  const services = [
    { 
      title: "Custom Tailoring", 
      description: "Bespoke designs tailored to fit you perfectly.", 
      imageUrl: Tailor // Use the imported image here
    },
    // You can add more services here
    // {
    //   title: "Styling Consultation",
    //   description: "Expert advice for your wardrobe.",
    //   imageUrl: stylingConsultationImage,
    // },
    // {
    //   title: "Seasonal Collections",
    //   description: "Explore our latest seasonal styles.",
    //   imageUrl: seasonalCollectionsImage,
    // },
    // {
    //   title: "Alteration Services",
    //   description: "Perfecting the fit of your garments.",
    //   imageUrl: alterationServicesImage,
    // },
    // {
    //   title: "Personal Shopping",
    //   description: "Tailored shopping experiences.",
    //   imageUrl: personalShoppingImage,
    // },
    // {
    //   title: "Wardrobe Revamp",
    //   description: "Refresh your wardrobe with our help.",
    //   imageUrl: wardrobeRevampImage,
    // },
  ];

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
            <p className={`mb-2 ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
              {service.description}
            </p>
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
