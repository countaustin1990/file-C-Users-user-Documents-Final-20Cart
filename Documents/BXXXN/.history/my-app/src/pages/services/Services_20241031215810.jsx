import PropTypes from 'prop-types';

const Services = ({ theme }) => {
  const services = [
    { title: "Custom Tailoring", description: "Bespoke designs tailored to fit you perfectly." },
    { title: "Styling Consultation", description: "Professional styling advice for any occasion." },
    { title: "Seasonal Collections", description: "Discover our latest trends each season." },
    { title: "Alteration Services", description: "Adjust your garments for the perfect fit." },
    { title: "Personal Shopping", description: "Personalized shopping experience with our stylists." },
    { title: "Wardrobe Revamp", description: "Reimagine your closet with our experts." },
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
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className={`${theme === 'light' ? 'bg-white border border-none' : 'bg-gray-700 border border-none'}`}>{service.description}</p>
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
