import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchServices } from './apiServices'; // Adjust the path based on your structure

const Services = ({ theme }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch {
        setError("Failed to load services.");
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) return <p>Loading services...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={`container-fluid py-12 px-4 ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 ${theme === 'light' ? 'bg-white border border-gray-300 hover:bg-gray-700 hover:text-gray-200' : 'bg-gray-700 border border-gray-600 hover:bg-gray-200 hover:text-gray-700'}`}
          >
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-40 object-cover rounded-t-lg mb-4" 
            />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className={`className ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>{service.description}</p>
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
